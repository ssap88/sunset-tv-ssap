import React, { useEffect, useState } from "react";

export default function SunsetLanding() {
  const waLink =
    "https://wa.me/525635119772?text=Hola%20%F0%9F%91%8B%20estoy%20interesado%20en%20una%20suscripci%C3%B3n%20a%20Sunset%20TV.";

  const testimonios = [
    {
      nombre: "Mariana G.",
      texto:
        "Excelente servicio, buena calidad de imagen y canales para toda la familia. Me encantó lo fácil que fue suscribirme.",
    },
    {
      nombre: "Carlos R.",
      texto:
        "Probé varios servicios y Sunset TV es el más estable y con mejor atención al cliente. Lo recomiendo totalmente.",
    },
    {
      nombre: "Sofía L.",
      texto:
        "Llevo 6 meses con ellos y no he tenido problemas. Buena calidad, rápido y confiable.",
    },
    {
      nombre: "David M.",
      texto:
        "La mejor opción que he probado, la atención por WhatsApp fue inmediata y el servicio funciona perfecto.",
    },
    {
      nombre: "Laura P.",
      texto:
        "Siempre hay algo que ver y la calidad es excelente, incluso en mi Smart TV.",
    },
    {
      nombre: "Andrés T.",
      texto:
        "Tenía dudas al principio, pero todo fue muy fácil. 100% recomendable.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonios.length),
      4500
    );
    return () => clearInterval(timer);
  }, [testimonios.length]);

  const pageStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #241445 0%, #050509 45%, #020103 100%)",
    color: "#fff",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const maxWidth = { maxWidth: "1100px", margin: "0 auto", padding: "24px" };

  const cardStyle = {
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(10,10,20,0.85))",
    padding: "20px",
  };

  const buttonStyle = {
    background:
      "linear-gradient(90deg, #ff2d9a 0%, #18d1ff 100%)",
    border: "none",
    borderRadius: "999px",
    color: "#050509",
    fontWeight: 700,
    padding: "12px 22px",
    cursor: "pointer",
    boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
    fontSize: "14px",
    textDecoration: "none",
    display: "inline-block",
  };

  const sectionTitle = {
    fontSize: "28px",
    fontWeight: 800,
    marginBottom: "8px",
    textShadow: "0 0 8px rgba(255,0,200,0.5)",
  };

    return (
  <div
    style={{
      minHeight: "100vh",
      background: "#0a0018",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
    }}
  >
    <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
      Sunset TV
    </h1>

    <h2>Mantenimiento temporal</h2>

    <p style={{ maxWidth: "500px", lineHeight: "1.6" }}>
      Estamos realizando mejoras en la plataforma.
      Por favor vuelve a visitarnos más tarde.
    </p>
  </div>
export default SunsetLanding
