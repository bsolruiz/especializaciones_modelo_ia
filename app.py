import os
import pandas as pd
import joblib
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder="static")


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def cargar_artefactos():
    modelo  = joblib.load(os.path.join(BASE_DIR, "modelo.pkl"))
    scaler  = joblib.load(os.path.join(BASE_DIR, "scaler.pkl"))
    columnas = joblib.load(os.path.join(BASE_DIR, "columnas.pkl"))
    df_esp  = pd.read_csv(os.path.join(BASE_DIR, "especializaciones.csv"))
    especializaciones = df_esp.to_dict(orient="records")
    return modelo, scaler, columnas, especializaciones

try:
    modelo, scaler, columnas, especializaciones = cargar_artefactos()
    MODELO_CARGADO = True
    print("✅  Modelo, scaler y especializaciones cargados correctamente.")
except Exception as e:
    MODELO_CARGADO = False
    modelo = scaler = columnas = especializaciones = None
    print(f"⚠️  No se encontraron los archivos del modelo: {e}")
    print("    El servidor correrá en modo de demostración (score simulado).")


# Función de compatibilidad 
def compatibilidad(valor_usuario, valor_real, escala=10):
    return escala - abs(valor_usuario - valor_real)

# Rutas
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/api/status")
def status():
    return jsonify({"modelo_cargado": MODELO_CARGADO})

@app.route("/api/recomendar", methods=["POST"])
def recomendar():
    data = request.get_json(force=True)

    try:
        prefs = {
            "demanda":    int(data["demanda"]),
            "costo":      int(data["costo"]),
            "salario":    int(data["salario"]),
            "dificultad": int(data["dificultad"]),
            "modalidad":  int(data["modalidad"]),
        }
    except (KeyError, ValueError) as e:
        return jsonify({"error": f"Parámetro inválido: {e}"}), 400

    esps = especializaciones if MODELO_CARGADO else ESPECIALIZACIONES_DEMO
    resultados = []

    for esp in esps:
        compat = {
            "demanda":    compatibilidad(prefs["demanda"],    esp["demanda"]),
            "costo":      compatibilidad(prefs["costo"],      esp["costo"]),
            "salario":    compatibilidad(prefs["salario"],    esp["salario"]),
            "dificultad": compatibilidad(prefs["dificultad"], esp["dificultad"]),
            "modalidad":  10 if prefs["modalidad"] == esp["modalidad"] else 0,
        }

        if MODELO_CARGADO:
            entrada = pd.DataFrame([{
            "compat_demanda": compat["demanda"],
            "compat_costo": compat["costo"],
            "compat_salario": compat["salario"],
            "compat_dificultad": compat["dificultad"],
            "compat_modalidad": compat["modalidad"],
            }])
            entrada = entrada[columnas]
            entrada_scaled = scaler.transform(entrada)
            prob = float(modelo.predict_proba(entrada_scaled)[0][1])
        else:
            # Modo demo: prob simulada
            avg = sum(compat.values()) / len(compat)
            prob = avg / 10.0

        avg_compat = sum(compat.values()) / len(compat)
        score_final = 0.6 * prob + 0.4 * (avg_compat / 10.0)

        # Razones legibles (igual que app.py original)
        razones = []
        if compat["salario"]    > 7:  razones.append("salario acorde a tu expectativa")
        if compat["costo"]      > 5:  razones.append("costo cercano a tu preferencia")
        if compat["dificultad"] < 4:  razones.append("nivel de dificultad alto para ti")
        if compat["demanda"]    > 6:  razones.append("demanda compatible con tu objetivo")
        if compat["modalidad"] == 10: razones.append("modalidad exacta que prefieres")
        if not razones:               razones.append("opción balanceada según tus preferencias")

        resultados.append({
            "nombre":  esp["nombre"],
            "score":   round(score_final, 4),
            "pct":     round(score_final * 100),
            "compat":  {k: round(v, 2) for k, v in compat.items()},
            "razones": razones,
        })

    ranking = sorted(resultados, key=lambda x: x["score"], reverse=True)

    return jsonify({
        "modelo_activo": MODELO_CARGADO,
        "top3": ranking[:3],
        "ranking_completo": ranking,
    })


if __name__ == "__main__":
    print("\nRecomendador de Especialidad")
    print("Abre http://localhost:5000 en tu navegador\n")
    app.run(debug=True, port=5000)
