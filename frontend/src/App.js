import { useState } from "react";
import axios from "axios";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [cargando, setCargando] = useState(false);

  const enviarMensaje = async () => {
    if (!mensaje.trim()) return;
    setCargando(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", { mensaje });
      setRespuesta(res.data.respuesta);
    } catch (error) {
      setRespuesta("❌ Error al conectar con el bot.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          🤖 Bot de Predicción de precios de viviendas
        </h2>
        <textarea
          style={styles.textarea}
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
        <button
          onClick={enviarMensaje}
          disabled={cargando || !mensaje.trim()}
          style={{
            ...styles.button,
            backgroundColor: cargando || !mensaje.trim() ? "#ccc" : "#4f46e5",
            cursor: cargando || !mensaje.trim() ? "not-allowed" : "pointer",
          }}
        >
          {cargando ? "Pensando..." : "Enviar"}
        </button>
        <div style={styles.respuestaContainer}>
          <p style={styles.respuestaLabel}>Respuesta del bot:</p>
          <div style={styles.respuestaTexto}>
            {respuesta || "Aún no hay respuesta."}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    padding: 30,
    width: "100%",
    maxWidth: 500,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
    color: "#4f46e5",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    resize: "vertical",
    outline: "none",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  respuestaContainer: {
    marginTop: "25px",
  },
  respuestaLabel: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#555",
  },
  respuestaTexto: {
    marginTop: "10px",
    backgroundColor: "#f9fafb",
    padding: "12px",
    borderRadius: "8px",
    color: "#333",
    minHeight: "50px",
    whiteSpace: "pre-wrap",
  },
};

export default App;
