# 🏡 HomePriceBot

**HomePriceBot** es un bot conversacional de inteligencia artificial que responde preguntas sobre precios de viviendas. Combina un modelo de lenguaje GPT-3.5 con los resultados de un análisis previo de machine learning para brindar respuestas claras, útiles y basadas en datos reales.

Este proyecto incluye un backend en Flask que procesa las preguntas y un frontend en React que presenta la interfaz de chat para el usuario.

---

## 🔍 ¿Cómo funciona?

1. Se entrenaron varios modelos de machine learning para predecir precios de viviendas.
2. Se evaluó su rendimiento y se almacenó un resumen en `resultados_modelos.json`.
3. El backend en Flask carga ese archivo JSON y, junto con la API de OpenAI, genera respuestas a las preguntas del usuario.
4. El frontend en React permite que los usuarios interactúen con el bot y visualicen las respuestas en tiempo real.

---

## 💬 Ejemplo de conversación

**Usuario:**

> ¿Qué opinas del valor promedio actual?

**Bot:**

> El modelo con mejor rendimiento fue la Regresión Lineal, con un R² de 0.87. El valor promedio estimado es RD$325,000. Esto indica estabilidad en el mercado. ¡Sigue así!

---

## 🧩 Tecnologías utilizadas

- **Backend:** Python, Flask, Flask-CORS, OpenAI API, dotenv
- **Frontend:** React, Vite, Axios
- **Machine Learning:** Análisis previo con scikit-learn (no en tiempo real)

---

## 📁 Estructura del proyecto

HomePriceBot/
├── backend/
│ ├── app.py
│ ├── resultados_modelos.json
│ ├── .env
│ └── requirements.txt
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ └── api.js
│ └── package.json

---

## ⚙️ Cómo ejecutar el proyecto

### Backend

1. Crear y activar un entorno virtual:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: .\venv\Scripts\activate
Instalar dependencias:
pip install -r requirements.txt
Crear un archivo .env en la carpeta backend con tu clave de API de OpenAI:
API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Ejecutar el servidor Flask:
python app.py
Frontend
Instalar dependencias:
cd frontend
npm install
Ejecutar la aplicación React en modo desarrollo:
npm run dev
Abrir en el navegador la URL que muestre la terminal (normalmente http://localhost:3000).
📚 Recursos adicionales

Documentación Flask
Documentación React
OpenAI API
Scikit-learn
🤝 Contribuciones

¡Contribuciones son bienvenidas! Si quieres mejorar este proyecto, por favor abre un issue o envía un pull request.

⚠️ Licencia

Este proyecto está bajo licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Gracias por usar HomePriceBot! 🚀

```
