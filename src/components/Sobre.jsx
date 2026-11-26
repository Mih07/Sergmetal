
function Sobre() {
  return (
    <section
      id="sobre"
      className="py-5"
      style={{
        backgroundColor: "#FFFFFF",
      }}
      aria-labelledby="titulo-sobre"
    >
      <div className="container py-4">
        <div className="row align-items-center g-5">

          {/* Conteúdo institucional */}
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
              id="titulo-sobre"
              className="fw-bold mb-4"
              style={{
                color: "#080808",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1.2",
              }}
            >
              Soluções em{" "}
              <span style={{ color: "#A9823D" }}>
                aço inox e estruturas metálicas
              </span>{" "}
              para empresas
            </h2>

            <p
              className="mb-3 text-secondary"
              style={{
                lineHeight: "1.9",
                fontSize: "1rem",
              }}
            >
              A SERGMETAL atua na fabricação de soluções em aço inox,
              estruturas metálicas e peças sob medida, atendendo às
              necessidades de empresas dos segmentos alimentício,
              de reciclagem e de diferentes aplicações industriais.
            </p>

            <p
              className="mb-3 text-secondary"
              style={{
                lineHeight: "1.9",
                fontSize: "1rem",
              }}
            >
              Desenvolvemos projetos de serralheria industrial,
              incluindo estruturas metálicas, mesas, bancadas,
              tubulações, peças em aço inox, grades de proteção
              e mezaninos, conforme as especificações de cada demanda.
            </p>

            <p
              className="mb-4 text-secondary"
              style={{
                lineHeight: "1.9",
                fontSize: "1rem",
              }}
            >
              Nosso trabalho é pautado pela qualidade e honestidade,
              buscando compreender as necessidades de cada cliente
              e oferecer soluções adequadas para seu projeto.
              Atendemos Itupeva, região e interior de São Paulo.
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
              Solicitar orçamento
            </a>
          </div>

          {/* Imagem institucional */}
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
                aria-hidden="true"
              ></div>

              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80"
                alt="Ambiente industrial de fabricação e trabalho com estruturas metálicas"
                className="img-fluid w-100"
                loading="lazy"
                decoding="async"
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
