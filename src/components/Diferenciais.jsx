
function Diferenciais() {
  const diferenciais = [
    {
      numero: "01",
      titulo: "Qualidade que faz a diferença",
      icone: "bi bi-gear-wide-connected",
      descricao:
        "Cada projeto de serralheria industrial possui necessidades específicas. Buscamos desenvolver soluções em aço inox, estruturas metálicas e fabricação de peças, valorizando a qualidade do serviço executado e as necessidades de cada cliente.",
    },
    {
      numero: "02",
      titulo: "Honestidade que gera confiança",
      icone: " bi-people",
      descricao:
        "Acreditamos que uma parceria sólida começa com transparência e honestidade. Valorizamos o diálogo, o alinhamento das expectativas e o compromisso com cada cliente, desde o orçamento até a execução do projeto.",
    },
  ];

  return (
    <section
      id="diferenciais"
      aria-labelledby="titulo-diferenciais"
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
            id="titulo-diferenciais"
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
            Qualidade na fabricação de soluções metálicas, transparência
            nos serviços de serralheria industrial e honestidade em cada
            relacionamento com nossos clientes.
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
