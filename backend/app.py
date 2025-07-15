from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore
from openai import OpenAI # type: ignore
from dotenv import load_dotenv # type: ignore
import json
import os

load_dotenv()
api_key = os.getenv("API_KEY")
client = OpenAI(api_key=api_key)

with open("resultados_modelos.json", "r", encoding="utf-8") as f:
    datos = json.load(f)

app = Flask(__name__)
CORS(app)


@app.route("/chat", methods=["POST"])
def chat():
    body = request.get_json()
    pregunta = body.get("mensaje")

    contexto = f"""
Eres un asistente especializado en análisis y predicción de precios de viviendas. Aquí están los resultados del análisis del proyecto:
- Modelo con mejor rendimiento: {datos['mejor_modelo']}
- Puntaje R² del mejor modelo: {datos['r2_score']}
- Predicción del valor medio de la vivienda para el próximo periodo: {datos['prediccion_valor_medio']}
- Segmentación de viviendas por características (clusters): {', '.join(datos['clusters'])}
- Variables más influyentes en el precio de las viviendas: {', '.join(datos['variables_importantes'])}

Si la predicción del valor medio es baja o decreciente, sugiere posibles acciones para mejorar el valor o la oferta. Si es alta o estable, felicita y sugiere mantener la estrategia.
Usa esta información para responder preguntas del usuario.
"""

    try:
        respuesta = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": contexto},
                {"role": "user", "content": pregunta}
            ],
            temperature=0.7
        )
        contenido = respuesta.choices[0].message.content
    except Exception as e:
        # Puedes agregar manejo más específico de errores si quieres
        contenido = f"Error en la API: {str(e)}"

    return jsonify({"respuesta": contenido})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
