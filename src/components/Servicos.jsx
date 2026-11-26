
import açoInox from "../assets/grades-protecao-industriais.jpg";
import estruturasMetalicas from "../assets/estrutura-metalica.jpg";
import mesasBancadas from "../assets/mesa-bancada-em-inox.jpg";
import tubulacaoPecas from "../assets/tubulacao-pecas-em-aco-inox.jpg";
import mezanino from "../assets/mezanino.jpg";

const servicos = [
  {
    titulo: "Grades de Proteção Industriais",
    descricao:
      "Fabricação de grades de proteção metálicas para aplicações industriais, desenvolvidas conforme as necessidades de cada ambiente e projeto.",
    imagem: açoInox,
    alt: "Grades de proteção industriais fabricadas em metal",
  },
  {
    titulo: "Estruturas Metálicas",
    descricao:
      "Estruturas metálicas para ambientes industriais e comerciais, com soluções desenvolvidas de acordo com as especificações de cada projeto.",
    imagem: estruturasMetalicas,
    alt: "Estrutura metálica para aplicação industrial",
  },
  {
    titulo: "Mesas e Bancadas em Aço Inox",
    descricao:
      "Fabricação de mesas e bancadas em aço inox para ambientes industriais, comerciais e operações que necessitam de praticidade e resistência.",
    imagem: mesasBancadas,
    alt: "Mesa e bancada fabricada em aço inox",
  },
  {
    titulo: "Tubulações e Peças em Aço Inox",
    descricao:
      "Soluções em tubulações e peças de aço inox para aplicações industriais, atendendo às características e necessidades de cada projeto.",
    imagem: tubulacaoPecas,
    alt: "Tubulações e peças fabricadas em aço inox para uso industrial",
  },
  {
    titulo: "Mezaninos Metálicos",
    descricao:
      "Estruturas metálicas para criação e aproveitamento de espaços em ambientes industriais e comerciais, conforme as necessidades de cada instalação.",
    imagem: mezanino,
    alt: "Mezanino metálico para aproveitamento de espaço industrial",
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
            Soluções industriais
          </span>

          <h2
            className="fw-bold"
            style={{
              color: "#080808",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Serviços em{" "}
            <span style={{ color: "#A9823D" }}>
              aço inox e estruturas metálicas
            </span>
          </h2>

          <p
            className="mt-3 mb-0 text-secondary"
            style={{
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            A SERGMETAL desenvolve soluções em serralheria industrial,
            aço inox e estruturas metálicas para empresas dos segmentos
            alimentício, de reciclagem e outras aplicações industriais.
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
                    alt={servico.alt}
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
