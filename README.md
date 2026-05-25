# 🌲 Growth Forest — Recomendador de Especialidades

Sistema web con Machine Learning que recomienda al estudiante las 3 especialidades tecnológicas de la Ingenieria de Software que mejor se adaptan a su perfil, según sus preferencias.

---

## Problema que resolvimos

Muchos estudiantes de tecnología no saben qué especialidad elegir entre las decenas disponibles. La orientación suele ser genérica. Quise que un modelo tomara sus preferencias reales y les devolviera una recomendación personalizada.

---

## Stack utilizado

- **Backend:** Python + Flask
- **ML:** scikit-learn, pandas, numpy
- **Frontend:** HTML, Tailwind CSS, JavaScript vanilla

---

## Dataset

Construido automaticamente. Cada fila representa una especialidad con 4 atributos en escala del 0 al 10:


 `demanda`  Qué tan demandada está en el mercado 
 `costo`  Costo de formación estimado 
 `salario`  Expectativa salarial 
 `dificultad`  Exigencia académica 
 `modalidad`  0 = virtual / 1 = presencial 

**~5000 registros** generados con variaciones por especialidad. Split: 80% entrenamiento / 20% prueba.

---

## Modelos entrenados y métricas

 Modelo  Accuracy 
------
 **Random Forest**  **91%** 
 Decision Tree  82% 
 KNN  78% 

Se eligió **Random Forest** por ser el más preciso y por entregar probabilidades por clase, lo que permite construir el ranking de compatibilidad.

---

## Predicciones y cómo se usan

El modelo recibe los 5 valores del usuario y devuelve una probabilidad por cada especialidad. Las 3 con mayor score se muestran como cards con:

- Porcentaje de match
- Barras de compatibilidad por atributo
- Razones textuales y consejo personalizado

---

## Frontend y Backend

**`app.py`** expone un endpoint `POST /api/recomendar` que carga el modelo `.pkl`, predice y responde con JSON.

El frontend tiene 3 archivos estáticos:
- `index.html` — estructura de la página
- `styles.css` — estilos y animaciones
- `data.js` — metadatos visuales de cada especialidad (imagen, colores, consejo)
- `app.js` — lógica: llamada a la API y render de resultados

---

## Cómo funciona la interfaz

Al abrir la página aparece un **modal de bienvenida** que explica qué es el sistema, cómo usar los sliders y qué tipo de resultado va a ver. Puede reabrirse desde el botón **`?`** en el header.

El usuario mueve 4 sliders (demanda, costo, salario, dificultad), elige modalidad y presiona **Ejecutar Modelo**. El sistema responde con el ranking top 3 animado.

---

## Correr el proyecto

```bash
pip install -r requirements.txt
py specializaciones.py
py modelo.py  
python app.py 
# Abrir http://localhost:5000
```

> Si el modelo `.pkl` no existe, el sistema activa un modo demostración automáticamente.
