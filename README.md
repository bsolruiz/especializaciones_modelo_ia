# especializaciones_modelo_ia
Proyecto Modelo de recomendación de especializaciones

🧠 **Problema**
Muchos estudiantes recién egresados de Ingeniería de Software no tienen una orientación clara para elegir una especialización, por lo que toman decisiones basadas en desinformación o presión externa.

🎯 **Objetivo**
El modelo busca predecir si una especialización es recomendable según tres datos ingresados por el usuario.

🤖 **¿Por qué utilizar la IA?**
La IA ayuda a analizar factores importantes como demanda, interés y costos, para dar una recomendación más objetiva.

📊 **Features**
Demanda: qué tanto se solicita en el mercado (1–10)
Gusto: qué tanto le interesa al estudiante (1–5)
Costos: qué tan costosa es la especialización (1–10)

💡 **¿Por qué estas features?**
Porque combinan lo más importante al decidir:
lo que me gusta, lo que tiene salida laboral y lo que puedo pagar.

🚀 **Primera entrega**
Se realiza la primera entrega donde **permite clasificar si una especialización es recomendable o no, en función de variables como demanda, gusto del estudiante y costo**.
En esta primera entrega se desarrolló un modelo básico de clasificación utilizando regresión logística. El modelo es entrenado con las features definidas (demanda, gusto y costos) y permite predecir si una especialización es recomendable o no para un nuevo estudiante.

------


🗂️ Plan de trabajo del proyecto
Este proyecto se desarrollará en 4 entregas progresivas, con el objetivo de evolucionar desde un modelo básico hasta un sistema de recomendación funcional basado en datos reales.


📊 Entrega 1 – Integración de datos reales
Objetivo: incorporar información del mundo real al modelo.
Actividades:
Aumentar el dataset (más ejemplos simulados), construir un dataset en formato CSV
Incluir nuevas variables 
Leer datos con pandas
Limpiar y preparar los datos

🧠 Entrega 2 – Sistema de recomendación
Objetivo: evolucionar de clasificador a recomendador.
Actividades:
Definir un conjunto de especializaciones
Evaluar múltiples opciones en lugar de una sola
Generar un ranking o top de recomendaciones

🌐 Entrega 3 – Interfaz y producto final
Objetivo: hacer el sistema interactivo y presentable.
Actividades:
Crear una interfaz simple (ej: Streamlit)
Permitir ingreso de datos por el usuario (Opcional)

🎯 Resultado final del proyecto
Se espera desarrollar un sistema de recomendación que sugiera especializaciones adecuadas para estudiantes de Ingeniería de Software, utilizando variables como intereses, demanda del mercado y costos, apoyado en datos reales y técnicas de inteligencia artificial.
