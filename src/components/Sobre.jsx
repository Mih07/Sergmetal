function Sobre() {
  return (
    <section
      id="sobre"
      className="py-5"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="container py-4">
        <div className="row align-items-center g-5">

          {/* Conteúdo */}
          <div className="col-12 col-lg-6">
            <span
              className="d-inline-block text-uppercase fw-bold mb-3"
              style={{
                color: "#A9823D",
                fontSize: "0.85rem",
                letterSpacing: "2px",
              }}
            >
              Conheça a SERGMETAL
            </span>

            <h2
              className="fw-bold mb-4"
              style={{
                color: "#080808",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1.2",
              }}
            >
              Soluções em metal pensadas para{" "}
              <span style={{ color: "#A9823D" }}>
                cada necessidade
              </span>
            </h2>

            <p
              className="mb-3 text-secondary"
              style={{
                lineHeight: "1.9",
                fontSize: "1rem",
              }}
            >
              A SERGMETAL atua com soluções em aço inox e estruturas
              metálicas, atendendo demandas de empresas dos segmentos
              alimentício e de reciclagem.
            </p>

            <p
              className="mb-4 text-secondary"
              style={{
                lineHeight: "1.9",
                fontSize: "1rem",
              }}
            >
              Cada projeto apresenta necessidades específicas.
              Por isso, buscamos compreender cada demanda e valorizar
              a qualidade do trabalho e a honestidade no relacionamento
              com nossos clientes.
            </p>

            <a
              href="#contato"
              className="btn fw-bold px-4 py-3"
              style={{
                backgroundColor: "#C6A15B",
                color: "#080808",
                border: "2px solid #C6A15B",
                borderRadius: "6px",
              }}
            >
              Fale com a SERGMETAL
            </a>
          </div>

          {/* Imagem ilustrativa */}
          <div className="col-12 col-lg-6">
            <div
              style={{
                position: "relative",
                padding: "0 0 18px 18px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "75%",
                  height: "75%",
                  backgroundColor: "#C6A15B",
                  borderRadius: "8px",
                }}
              ></div>

              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80"
                alt="Ambiente de trabalho industrial"
                className="img-fluid w-100"
                loading="lazy"
                style={{
                  position: "relative",
                  height: "380px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sobre;