import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report


# Cargar datos

df = pd.read_csv("dataset_realista2.csv")

print("Datos:")
print(df.head())


# Variables

X = df.drop("recomendado", axis=1)
y = df["recomendado"]

# Guardar nombres de columnas
columnas = X.columns.tolist()


# División

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)


# Escalado

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)


# Modelo

modelo = LogisticRegression()
modelo.fit(X_train, y_train)


# Evaluación

y_pred = modelo.predict(X_test)

print("\nPrecisión:", round(accuracy_score(y_test, y_pred), 2))
print("\nMatriz de confusión:")
print(confusion_matrix(y_test, y_pred))
print("\nReporte:")
print(classification_report(y_test, y_pred))


# 7. Guardar modelo

joblib.dump(modelo, "modelo.pkl")
joblib.dump(scaler, "scaler.pkl")
joblib.dump(columnas, "columnas.pkl")

print("\nModelo guadadoe")