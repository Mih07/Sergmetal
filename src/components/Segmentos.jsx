
function Segmentos() {
  const segmentos = [
  {
    icone: "bi-clipboard2-pulse",
    titulo: "Setor Alimentício",
    descricao:
      "Soluções em aço inox, estruturas metálicas, mesas, bancadas e componentes para empresas do setor alimentício, desenvolvidas conforme as necessidades de cada projeto.",
  },
  {
    icone: "bi-recycle",
    titulo: "Setor de Reciclagem",
    descricao:
      "Fabricação de peças, estruturas metálicas e soluções em serralheria industrial para empresas de reciclagem, considerando as necessidades de cada operação.",
  },
  {
    icone: "bi-gear-wide-connected",
    titulo: "Setor Industrial",
    descricao:
      "Soluções em estruturas metálicas, fabricação de peças, aço inox e serviços de serralheria industrial para diferentes aplicações e segmentos.",
  },
];

  return (
    <section
      id="segmentos"
      aria-labelledby="titulo-segmentos"
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
            id="titulo-segmentos"
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
            A SERGMETAL desenvolve soluções em aço inox, estruturas metálicas
            e serralheria industrial para empresas dos setores alimentício,
            de reciclagem e outras aplicações industriais, atendendo Itupeva
            e região.
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
