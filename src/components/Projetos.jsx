const projetos = [
  {
    titulo: "Soluções em Aço Inox",
    categoria: "Fabricação em metal",
    imagem:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80",
  },
  {
    titulo: "Estruturas Metálicas",
    categoria: "Estruturas industriais",
    imagem:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
  },
  {
    titulo: "Projetos sob Medida",
    categoria: "Soluções industriais",
    imagem:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  },
];

function Projetos() {
  return (
    <section
      id="projetos"
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
            className="fw-bold"
            style={{
              color: "#080808",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Conheça nossos{" "}
            <span style={{ color: "#A9823D" }}>
              projetos
            </span>
          </h2>

          <p
            className="mt-3 mb-0 text-secondary"
            style={{
              lineHeight: "1.8",
            }}
          >
            Conheça algumas das soluções em metal que fazem parte
            do universo de atuação da SERGMETAL.
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
                    alt={projeto.titulo}
                    className="w-100 h-100"
                    loading="lazy"
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

        {/* Aviso provisório */}
        <p
          className="text-center mt-4 mb-0"
          style={{
            color: "#777777",
            fontSize: "0.85rem",
          }}
        >
          Imagens ilustrativas — galeria provisória para
          apresentação da estrutura da página.
        </p>

      </div>
    </section>
  );
}

export default Projetos;