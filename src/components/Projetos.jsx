
import açoInox from "../assets/tubulacao-pecas-em-aco-inox.jpg";
import estruturasMetalicas from "../assets/estrutura-metalica.jpg";

const projetos = [
  {
    titulo: "Soluções em Aço Inox",
    categoria: "Fabricação em aço inox",
    imagem: açoInox,
    alt: "Tubulações e peças fabricadas em aço inox para aplicações industriais",
  },
  {
    titulo: "Estruturas Metálicas",
    categoria: "Estruturas industriais",
    imagem: estruturasMetalicas,
    alt: "Estrutura metálica utilizada em projetos e aplicações industriais",
  },
  {
    titulo: "Projetos sob Medida",
    categoria: "Serralheria industrial",
    imagem:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
    alt: "Ambiente industrial com equipamentos e soluções de fabricação metálica",
  },
];

function Projetos() {
  return (
    <section
      id="projetos"
      aria-labelledby="titulo-projetos"
      className="py-5"
      style={{
        backgroundColor: "#F3F3F3",
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
              color: "#A9823D",
              fontSize: "0.85rem",
              letterSpacing: "2px",
            }}
          >
            Nosso trabalho
          </span>

          <h2
            id="titulo-projetos"
            className="fw-bold"
            style={{
              color: "#080808",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Conheça nossas{" "}
            <span style={{ color: "#A9823D" }}>
              soluções industriais
            </span>
          </h2>

          <p
            className="mt-3 mb-0 text-secondary"
            style={{
              lineHeight: "1.8",
            }}
          >
            Conheça algumas das soluções em aço inox, estruturas metálicas
            e fabricação de peças desenvolvidas para diferentes necessidades
            industriais pela SERGMETAL. 
          </p>
        </div>

        {/* Galeria */}
        <div className="row g-4">
          {projetos.map((projeto) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={projeto.titulo}
            >
              <article
                className="h-100"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 5px 20px rgba(0, 0, 0, 0.07)",
                  border: "1px solid #E5E5E5",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0, 0, 0, 0.13)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 20px rgba(0, 0, 0, 0.07)";
                }}
              >
                {/* Imagem ilustrativa */}
                <div
                  style={{
                    height: "250px",
                    overflow: "hidden",
                    backgroundColor: "#DDDDDD",
                  }}
                >
                  <img
                    src={projeto.imagem}
                    alt={projeto.alt}
                    className="w-100 h-100"
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* Informações */}
                <div className="p-4">
                  <span
                    className="d-inline-block text-uppercase fw-bold mb-2"
                    style={{
                      color: "#A9823D",
                      fontSize: "0.75rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {projeto.categoria}
                  </span>

                  <h3
                    className="h5 fw-bold mb-3"
                    style={{
                      color: "#171717",
                    }}
                  >
                    {projeto.titulo}
                  </h3>

                  <div
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

export default Projetos;
