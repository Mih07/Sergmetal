import heroImage from "../assets/hero.png";

function Hero() {
  const whatsappNumber = "5511974603651";

  const mensagem = encodeURIComponent(
    "Olá! Vim pelo site da Sergmetal e gostaria de solicitar um orçamento."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagem}`;

  return (
    <section
      id="inicio"
      className="d-flex align-items-center position-relative"
      style={{
        minHeight: "650px",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#080808",
        overflow: "hidden",
      }}
    >
      {/* Sobreposição escura */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.68) 55%, rgba(0,0,0,0.30) 100%)",
        }}
      ></div>

      <div className="container position-relative py-5">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-7">

            {/* Identificação */}
            <span
              className="d-inline-block fw-bold text-uppercase mb-3"
              style={{
                color: "#C6A15B",
                fontSize: "0.85rem",
                letterSpacing: "2px",
              }}
            >
              Serralheria e soluções em metal
            </span>

            {/* Título principal */}
            <h1
              className="fw-bold mb-4"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2.3rem, 5vw, 4.2rem)",
                lineHeight: "1.15",
              }}
            >
              Soluções em{" "}
              <span style={{ color: "#C6A15B" }}>
                aço inox e estruturas metálicas
              </span>
            </h1>

            {/* Descrição */}
            <p
              className="mb-4"
              style={{
                color: "#EEEEEE",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: "1.8",
                maxWidth: "600px",
              }}
            >
              Soluções sob medida para empresas dos segmentos
              alimentício e de reciclagem.
            </p>

            {/* Botão de orçamento */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg fw-bold px-4 py-3"
              style={{
                backgroundColor: "#C6A15B",
                color: "#080808",
                border: "2px solid #C6A15B",
                borderRadius: "6px",
                fontSize: "1rem",
              }}
            >
              Solicitar orçamento
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;