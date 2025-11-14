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
    <div style={pageStyle}>
      {/* NAVBAR SIMPLE */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(0,0,0,0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            ...maxWidth,
            paddingTop: "10px",
            paddingBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: "18px" }}>Sunset TV</div>
            <div style={{ fontSize: "11px", color: "#c0c0c0" }}>
              Disfruta el mejor contenido sin límites
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "12px",
              fontSize: "13px",
              alignItems: "center",
            }}
          >
            <a
              href="#planes"
              style={{ color: "#e0e0e0", textDecoration: "none" }}
            >
              Planes
            </a>
            <a
              href="#como-funciona"
              style={{ color: "#e0e0e0", textDecoration: "none" }}
            >
              Cómo funciona
            </a>
            <a
              href="#testimonios"
              style={{ color: "#e0e0e0", textDecoration: "none" }}
            >
              Testimonios
            </a>
            <a
              href="#faq"
              style={{ color: "#e0e0e0", textDecoration: "none" }}
            >
              Preguntas
            </a>
            <a href={waLink} style={buttonStyle} target="_blank" rel="noreferrer">
              👉 Suscríbete ahora
            </a>
          </nav>
        </div>
      </header>

      {/* CONTENIDO */}
      <main style={{ paddingTop: "86px" }}>
        {/* ANUNCIO FIRE TV STICK */}
<section
  style={{
    maxWidth: "1100px",
    margin: "0 auto",
    marginBottom: "30px",
    padding: "16px",
    marginTop: "10px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background:
      "linear-gradient(90deg, rgba(255,45,154,0.25), rgba(24,209,255,0.25))",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
  }}
>
  <img
    src="https://i.ibb.co/1YtyCBmL/Screenshot-20251113-181715-Amazon-Shopping.jpg"
    alt="Fire TV Stick"
    style={{
      width: "90px",
      height: "90px",
      objectFit: "cover",
      borderRadius: "10px",
      background: "rgba(0,0,0,0.3)",
    }}
  />

  <div style={{ flex: 1 }}>
    <h3
      style={{
        margin: 0,
        fontSize: "17px",
        fontWeight: 700,
        color: "#fff",
        textShadow: "0 0 8px rgba(255,255,255,0.4)",
      }}
    >
      ¿No tienes dispositivo para usar Sunset TV?
    </h3>

    <p
      style={{
        margin: "6px 0 0 0",
        color: "#e5e5e5",
        fontSize: "14px",
      }}
    >
      Te vendo un Fire TV Stick con la app instalada y lista para usar.
      Solo es conectar y disfrutar. Entrega inmediata.
    </p>
  </div>

  <a
    href="https://wa.me/525635119772?text=Hola,%20quiero%20información%20sobre%20el%20Fire%20TV%20Stick%20con%20la%20app%20de%20Sunset%20TV."
    target="_blank"
    rel="noreferrer"
    style={{
      background: "linear-gradient(90deg,#ff2d9a,#18d1ff)",
      padding: "10px 18px",
      borderRadius: "999px",
      color: "#000",
      fontWeight: "700",
      fontSize: "13px",
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    Ver precio
  </a>
</section>
        {/* HERO */}
        <section style={maxWidth}>
          <div
            style={{
              display: "grid",
              gap: "32px",
              gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "34px",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  textShadow:
                    "0 0 10px rgba(255,0,200,0.6), 0 0 30px rgba(0,200,255,0.4)",
                }}
              >
                Sunset TV — entretenimiento en vivo con estilo
              </h1>
              <p
                style={{
                  marginTop: "14px",
                  color: "#e0e0e0",
                  fontSize: "15px",
                  maxWidth: "480px",
                }}
              >
                Películas, series, deportes y canales en vivo, todo en un solo
                lugar. Calidad HD/4K, múltiples dispositivos y soporte rápido
                por WhatsApp.
              </p>

              <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  style={buttonStyle}
                >
                  👉 Suscríbete ahora
                </a>
                <a
                  href="#planes"
                  style={{
                    borderRadius: "999px",
                    padding: "11px 20px",
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#f5f5f5",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                >
                  Ver planes
                </a>
              </div>

              <div
                style={{
                  marginTop: "18px",
                  display: "flex",
                  gap: "18px",
                  fontSize: "12px",
                  color: "#c0c0c0",
                }}
              >
                <div>✔ Canales en vivo</div>
                <div>✔ Biblioteca 4K</div>
                <div>✔ Soporte por WhatsApp</div>
              </div>
            </div>

            {/* Tarjeta visual */}
            <div>
              <div
                style={{
                  ...cardStyle,
                  background:
                    "radial-gradient(circle at top, rgba(255,45,154,0.35), transparent 55%), #05030a",
                }}
              >
                <div
                  style={{
                    height: "210px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(circle at center, #3b1c64 0%, #050308 55%, #010002 100%)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#bbbbbb",
                        marginBottom: "6px",
                      }}
                    >
                      Reproduciendo ahora
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        textShadow:
                          "0 0 10px rgba(255,0,200,0.6), 0 0 26px rgba(0,200,255,0.6)",
                      }}
                    >
                      La Mejor Noche Retro
                    </div>
                    <div
                      style={{
                        marginTop: "10px",
                        fontSize: "11px",
                        color: "#c0c0c0",
                      }}
                    >
                      Canal Sunset Live • En vivo
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 10px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                    }}
                  >
                    HD
                  </div>
                  <div
                    style={{
                      padding: "8px 10px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                    }}
                  >
                    4K
                  </div>
                  <div
                    style={{
                      padding: "8px 10px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                    }}
                  >
                    Multi-dispositivo
                  </div>
                  <div
                    style={{
                      padding: "8px 10px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                    }}
                  >
                    Soporte 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN DESTACADA */}
        <section
          style={{
            ...maxWidth,
            marginTop: "26px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              display: "grid",
              gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
              gap: "18px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                Disfruta tu contenido en la mejor calidad
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#e0e0e0",
                }}
              >
                Sunset TV se adapta a tus dispositivos para que puedas ver
                películas, series y deportes donde quieras. Solo necesitas
                conexión a internet y listo.
              </p>
            </div>

            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "#000",
              }}
            >
              <img
                src="https://i.ibb.co/1YtyCBmL/Screenshot-20251113-181715-Amazon-Shopping.jpg"
                alt="Contenido Sunset TV"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" style={{ ...maxWidth, marginTop: "40px" }}>

        {/* PLANES */}
        <section id="planes" style={{ ...maxWidth, marginTop: "40px" }}>
        {/* PLANES */}
        <section id="planes" style={{ ...maxWidth, marginTop: "40px" }}>
          <h2 style={sectionTitle}>Planes</h2>
          <p style={{ color: "#d0d0d0", fontSize: "14px" }}>
            Elige el plan que más se ajuste a tu ritmo. Todos incluyen acceso a
            canales en vivo y contenido on-demand.
          </p>

          <div
            style={{
              marginTop: "16px",
              display: "grid",
              gap: "14px",
            }}
          >
            {[
              {
                nombre: "Mensual",
                precio: "$250 MXN/mes",
                detalles: [
                  "Canales en vivo",
                  "Peliculas y Series",
                  "3 pantallas simultáneas",
                ],
              },
              {
                nombre: "Trimestral (Ahorra 12%)",
                precio: "$660 MXN/3 meses",
                detalles: [
                  "Canales en vivo",
                  "Peliculas y Series",
                  "3 pantallas simultáneas",
                ],
              },
              {
                nombre: "Semestral (Ahorra 20%)",
                precio: "$1,200 MXN/6 meses",
                detalles: [
                  "Canales en vivo",
                  "Peliculas y Series",
                  "3 pantallas simultáneas",
                ],
              },
              {
                nombre: "Anual (Mejor valor)",
                precio: "$2,220 MXN/año",
                detalles: [
                  "Canales en Vivo",
                  "Peliculas y Series",
                  "3 pantallas simultáneas",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                style={{
                  ...cardStyle,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    textTransform: "uppercase",
                    color: "#f0f0f0",
                  }}
                >
                  {plan.nombre}
                </div>
                <div style={{ fontSize: "22px", fontWeight: 800 }}>
                  {plan.precio}
                </div>
                <ul
                  style={{
                    margin: "6px 0 0 18px",
                    padding: 0,
                    fontSize: "13px",
                    color: "#e0e0e0",
                  }}
                >
                  {plan.detalles.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <div style={{ marginTop: "10px" }}>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    style={buttonStyle}
                  >
                    👉 Suscríbete ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section
          id="como-funciona"
          style={{ ...maxWidth, marginTop: "42px", marginBottom: "18px" }}
        >
          <h2 style={sectionTitle}>¿Cómo funciona Sunset TV?</h2>
          <p style={{ color: "#d0d0d0", fontSize: "14px" }}>
            Contratar Sunset TV es rápido y sin complicaciones. En solo unos
            pasos estarás disfrutando de todo el contenido.
          </p>

          <div
            style={{
              marginTop: "16px",
              display: "grid",
              gap: "14px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ fontSize: "17px", fontWeight: 600 }}>
                1. Elige tu plan
              </h3>
              <p style={{ fontSize: "13px", color: "#e0e0e0" }}>
                Selecciona el plan que mejor se adapte a ti según el tiempo y
                pantallas que necesites.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: "17px", fontWeight: 600 }}>
                2. Escríbenos por WhatsApp
              </h3>
              <p style={{ fontSize: "13px", color: "#e0e0e0" }}>
                Haz clic en “Suscríbete ahora” para enviarnos un mensaje directo
                y confirmar tu suscripción.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: "17px", fontWeight: 600 }}>
                3. Disfruta sin límites
              </h3>
              <p style={{ fontSize: "13px", color: "#e0e0e0" }}>
                Recibirás tus accesos y podrás disfrutar de canales, series y
                películas al instante, desde cualquier dispositivo.
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: "14px",
              fontSize: "13px",
              color: "#cfcfcf",
            }}
          >
            💬 Si tienes dudas, nuestro equipo está disponible por WhatsApp para
            ayudarte en cualquier momento.
          </p>
        </section>

        {/* TESTIMONIOS */}
        <section
          id="testimonios"
          style={{
            marginTop: "8px",
            paddingTop: "26px",
            paddingBottom: "30px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div style={maxWidth}>
            <h2 style={sectionTitle}>Lo que opinan nuestros suscriptores</h2>
            <p style={{ color: "#d0d0d0", fontSize: "14px" }}>
              Miles de usuarios ya disfrutan Sunset TV todos los días. Estas son
              algunas de sus experiencias:
            </p>

            <div
              style={{
                marginTop: "18px",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: `${testimonios.length * 100}%`,
                  transform: `translateX(-${
                    (index * 100) / testimonios.length
                  }%)`,
                  transition: "transform 0.8s ease-in-out",
                }}
              >
                {testimonios.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      width: "100%",
                      padding: "18px",
                    }}
                  >
                    <div
                      style={{
                        ...cardStyle,
                        background: "rgba(10,10,20,0.96)",
                      }}
                    >
                      <p
                        style={{
                          fontStyle: "italic",
                          fontSize: "14px",
                          color: "#f0f0f0",
                        }}
                      >
                        “{t.texto}”
                      </p>
                      <div
                        style={{
                          marginTop: "10px",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        — {t.nombre}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          style={{ ...maxWidth, marginTop: "24px", marginBottom: "40px" }}
        >
          <h2 style={sectionTitle}>Preguntas frecuentes</h2>
          <div style={{ marginTop: "14px" }}>
            <details style={{ ...cardStyle, marginBottom: "8px" }}>
              <summary style={{ cursor: "pointer", fontSize: "14px" }}>
                ¿Qué incluye mi suscripción?
              </summary>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>
                Acceso a canales en vivo, biblioteca on-demand, calidad HD/4K
                según el plan y soporte vía WhatsApp.
              </p>
            </details>

            <details style={{ ...cardStyle, marginBottom: "8px" }}>
              <summary style={{ cursor: "pointer", fontSize: "14px" }}>
                ¿Puedo usar Sunset TV en mi Smart TV?
              </summary>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>
                Sí, puedes utilizarlo en algunas Smart TV, dispositivos
                de streaming (Fire tv Stick, Chromecast y dispositivos android.) en celulares y tablets (Android & IOs).
              </p>
            </details>

            <details style={{ ...cardStyle, marginBottom: "8px" }}>
              <summary style={{ cursor: "pointer", fontSize: "14px" }}>
                ¿Cómo me puedo suscribir?
              </summary>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>
                Solo haz clic en “Suscríbete ahora”, envíanos un mensaje por
                WhatsApp y te guiaremos paso a paso.
              </p>
            </details>

            <details style={{ ...cardStyle, marginBottom: "8px" }}>
              <summary style={{ cursor: "pointer", fontSize: "14px" }}>
                ¿Puedo cancelar cuando quiera?
              </summary>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>
                No son planes forzosos, contrata el periodo que elijas. 
              </p>
            </details>

            <details style={{ ...cardStyle }}>
              <summary style={{ cursor: "pointer", fontSize: "14px" }}>
                ¿Qué métodos de pago aceptan?
              </summary>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>
                Aceptamos transferencias y otros métodos que te compartiremos al
                momento de confirmar tu suscripción por WhatsApp.
              </p>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
          }
