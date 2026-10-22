function Diferenciais() {
  const diferenciais = [
    {
      numero: "01",
      titulo: "Qualidade que faz a diferença",
      icone: "bi bi-gear-wide-connected",
      descricao:
        "Cada projeto tem suas particularidades e exige atenção às necessidades de quem contrata. Nosso compromisso é buscar soluções adequadas para cada demanda, valorizando um trabalho bem executado e que atenda às expectativas do cliente.",
    },
    {
      numero: "02",
      titulo: "Honestidade que gera confiança",
      icone: " bi-people",
      descricao:
        "Acreditamos que uma boa parceria começa com transparência. Por isso, valorizamos o diálogo, o alinhamento das expectativas e uma relação honesta com cada cliente, desde o primeiro contato até a condução do serviço.",
    },
  ];

  return (
    <section
      id="diferenciais"
      className="py-5"
      style={{
        backgroundColor: "#080808",
        color: "#FFFFFF",
      }}
    >
      <div className="container py-4">

        {/* Cabeçalho */}
        <div
          className="text-center mx-auto mb-5"
          style={{
            maxWidth: "700px",
          }}
        >
          <span
            className="d-inline-block text-uppercase fw-bold mb-2"
            style={{
              color: "#C6A15B",
              fontSize: "0.85rem",
              letterSpacing: "2px",
            }}
          >
            Nosso compromisso
          </span>

          <h2
            className="fw-bold"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            O que nos{" "}
            <span style={{ color: "#C6A15B" }}>
              diferencia
            </span>
          </h2>

          <p
            className="mt-3 mb-0"
            style={{
              color: "#CCCCCC",
              lineHeight: "1.8",
            }}
          >
            Valorizamos a qualidade dos serviços e a honestidade
            em cada relacionamento.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {diferenciais.map((item) => (
            <div
              className="col-12 col-md-6 col-lg-5"
              key={item.numero}
            >
              <article
                className="h-100 p-4 p-lg-5"
                style={{
                  backgroundColor: "#151515",
                  border: "1px solid #333333",
                  borderRadius: "10px",
                  transition:
                    "transform 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#C6A15B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.borderColor = "#333333";
                }}
              >
                <div
                    className="d-flex align-items-center justify-content-center mb-4"
                    style={{
                        width: "58px",
                        height: "58px",
                        backgroundColor: "#C6A15B",
                        color: "#080808",
                        borderRadius: "8px",
                        fontSize: "1.8rem",
                    }}
                    >
                    <i
                        className={`bi ${item.icone}`}
                        aria-hidden="true"
                    ></i>
                    </div>

                <h3
                  className="fw-bold mb-3"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.titulo}
                </h3>

                <p
                  className="mb-0"
                  style={{
                    color: "#CCCCCC",
                    lineHeight: "1.8",
                  }}
                >
                  {item.descricao}
                </p>

                <div
                  className="mt-4"
                  style={{
                    width: "50px",
                    height: "3px",
                    backgroundColor: "#C6A15B",
                  }}
                ></div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Diferenciais;