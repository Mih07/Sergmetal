function Segmentos() {
  const segmentos = [
    {
      icone: "bi-clipboard2-pulse",
      titulo: "Setor Alimentício",
      descricao:
        "Soluções em aço inox e estruturas metálicas para atender às necessidades de empresas do setor alimentício.",
    },
    {
      icone: "bi-recycle",
      titulo: "Setor de Reciclagem",
      descricao:
        "Soluções metálicas para empresas de reciclagem, considerando as necessidades de cada projeto.",
    },
  ];

  return (
    <section
      id="segmentos"
      className="py-5"
      style={{ backgroundColor: "#ffffff", color: "#080808" }}
    >
      <div className="container py-4">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "750px" }}>
          <span
            className="d-inline-block text-uppercase fw-bold mb-3"
            style={{
              color: "#C6A15B",
              fontSize: "0.85rem",
              letterSpacing: "2px",
            }}
          >
            Onde atuamos
          </span>

          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              lineHeight: "1.2",
            }}
          >
            Soluções para diferentes{" "}
            <span style={{ color: "#C6A15B" }}>segmentos</span>
          </h2>

          <p style={{ color: "#080808", lineHeight: "1.8" }}>
            Atendemos empresas dos setores alimentício e de reciclagem,
            desenvolvendo soluções de acordo com as necessidades de cada projeto.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {segmentos.map((segmento) => (
            <div className="col-12 col-md-6" key={segmento.titulo}>
              <div
                className="h-100 p-4 p-lg-5 text-center"
                style={{
                    backgroundColor: "#F3F3F3",
                    border: "1px solid #DDDDDD",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                    }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "#C6A15B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#dddddd";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#C6A15B",
                    borderRadius: "8px",
                  }}
                >
                  <i
                    className={`bi ${segmento.icone}`}
                    aria-hidden="true"
                    style={{ fontSize: "2rem", color: "#080808" }}
                  ></i>
                </div>

                <h3
                    className="h4 fw-bold mb-3"
                    style={{ color: "#080808" }}
                    >
                    {segmento.titulo}
                </h3>

                <p
                    className="mb-0"
                    style={{ color: "#555555", lineHeight: "1.8" }}
                    >
                    {segmento.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Segmentos;