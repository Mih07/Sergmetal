import açoInox from "../assets/grades-protecao-industriais.jpg";
import estruturasMetalicas from "../assets/estrutura-metalica.jpg";
import mesasBancadas from "../assets/mesa-bancada-em-inox.jpg";
import tubulacaoPecas from "../assets/tubulacao-pecas-em-aco-inox.jpg";
import mezanino from "../assets/mezanino.jpg";

const servicos = [
  {
    titulo: "Aço Inox",
    descricao:
      "Soluções em aço inox para diferentes aplicações, com foco em resistência e durabilidade.",
    imagem: açoInox,
  },
  {
    titulo: "Estruturas Metálicas",
    descricao:
      "Estruturas metálicas desenvolvidas para atender às necessidades de cada projeto.",
    imagem: estruturasMetalicas,
  },
  {
    titulo: "Mesas e Bancadas",
    descricao:
      "Mesas e bancadas em aço inox para ambientes industriais e comerciais.",
    imagem: mesasBancadas,
  },
  {
    titulo: "Tubulação e peças em aço inox",
    descricao:
      "Tubulação e peças em aço inox para sistemas industriais e comerciais.",
    imagem: tubulacaoPecas,
  },
  {
    titulo: "Mezaninos",
    descricao:
      "Estruturas para aproveitamento de espaços em ambientes industriais e comerciais.",
    imagem: mezanino,
  },
];

function Servicos() {
  return (
    <section
      id="servicos"
      className="py-5"
      style={{
        backgroundColor: "#F3F3F3",
      }}
    >
      <div className="container py-4">

        {/* Cabeçalho da seção */}
        <div
          className="text-center mx-auto mb-5"
          style={{
            maxWidth: "700px",
          }}
        >
          <span
            className="d-inline-block mb-2 fw-bold text-uppercase"
            style={{
              color: "#A9823D",
              fontSize: "0.85rem",
              letterSpacing: "2px",
            }}
          >
            O que fazemos
          </span>

          <h2
            className="fw-bold"
            style={{
              color: "#080808",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Nossos{" "}
            <span style={{ color: "#A9823D" }}>
              serviços
            </span>
          </h2>

          <p
            className="mt-3 mb-0 text-secondary"
            style={{
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            Soluções em serralheria e estruturas metálicas
            para atender às necessidades do seu negócio.
          </p>
        </div>

        {/* Cards de serviços */}
        <div className="row g-4 justify-content-center">
          {servicos.map((servico, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={servico.titulo}
            >
              <article
                className="h-100"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E5E5",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 5px 20px rgba(0, 0, 0, 0.06)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 20px rgba(0, 0, 0, 0.06)";
                }}
              >
                {/* Imagem */}
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    backgroundColor: "#E8E8E8",
                  }}
                >
                  <img
                    src={servico.imagem}
                    alt={servico.titulo}
                    className="w-100 h-100"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-4">

                  {/* Identificação numerada */}
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "46px",
                      height: "46px",
                      backgroundColor: "#C6A15B",
                      color: "#080808",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontWeight: "800",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3
                    className="h4 fw-bold mb-3"
                    style={{
                      color: "#171717",
                    }}
                  >
                    {servico.titulo}
                  </h3>

                  <p
                    className="mb-0 text-secondary"
                    style={{
                      lineHeight: "1.7",
                      fontSize: "0.95rem",
                    }}
                  >
                    {servico.descricao}
                  </p>

                  <div
                    className="mt-4"
                    style={{
                      width: "45px",
                      height: "3px",
                      backgroundColor: "#C6A15B",
                    }}
                  ></div>

                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicos;