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

----------------------------------------------------------------------------------------------------------

**MODELO**
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


----------------------------------------------------------------------------------------------------------

**API + FRONT**

***Figma*** 
https://www.figma.com/design/D4VWLDFSjG9H8GMs1fw1EG/Prototipo-de-Recomendador-de-Especializaci%C3%B3n?node-id=0-1&t=EhCiaJa7xZY6G6vV-1

++++
***Semana del 11 al 15 de mayo*** 
Objetivo: Diseño y Frontend. 

El trabajo consiste en crear el prototipo funcional en Figma, desarrollar la estructura de la aplicación en index.html con Tailwind CSS y programar la lógica de captura de datos en el formulario para que coincida con las variables del modelo.

***Semana del 18 al 22 de mayo*** 
Objetivo: Backend e Integración. 

Las tareas incluyen la configuración del servidor en Flask, la implementación de la carga del modelo, el escalador y las columnas mediante joblib, y el desarrollo de las rutas en app.py para procesar los datos de entrada con pandas y generar las recomendaciones basadas en el archivo de especializaciones.

***Semana del 25 de mayo***
Objetivo: Entrega Final.

Se llevarán a cabo las pruebas de integración para asegurar que el flujo de datos sea correcto, se realizará el pulido final de la interfaz de usuario, se completará la documentación técnica en el archivo README y se verificará que el archivo requirements.txt incluya todas las dependencias necesarias para la ejecución local.


## Instalación

# Recomendador

Sistema recomendador de especializaciones TI usando Flask + Machine Learning.

## Instalación

pip install -r requirements.txt

## Ejecutar

py specializaciones.py
py modelo.py  
python app.py 