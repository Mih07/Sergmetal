function Footer() {
  const whatsappNumber = "5511974603651";

  const mensagem = encodeURIComponent(
    "Olá! Vim pelo site da SERGMETAL e gostaria de mais informações."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagem}`;

  const links = [
    { texto: "Início", destino: "#inicio" },
    { texto: "Serviços", destino: "#servicos" },
    { texto: "Diferenciais", destino: "#diferenciais" },
    { texto: "Projetos", destino: "#projetos" },
    { texto: "Sobre", destino: "#sobre" },
    { texto: "Contato", destino: "#contato" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#080808",
        color: "#FFFFFF",
        borderTop: "1px solid #333333",
      }}
    >
      <div className="container py-5">
        <div className="row g-4">

          {/* Identidade da empresa */}
          <div className="col-12 col-md-5">
            <a
              href="#inicio"
              className="text-decoration-none fw-bold"
              style={{
                color: "#C6A15B",
                fontSize: "1.6rem",
                letterSpacing: "1px",
              }}
            >
              SERG<span style={{ color: "#FFFFFF" }}>METAL</span>
            </a>

            <p
              className="mt-3 mb-0"
              style={{
                color: "#CCCCCC",
                lineHeight: "1.8",
                maxWidth: "400px",
              }}
            >
              Soluções em aço inox e estruturas metálicas para empresas
              dos segmentos alimentício e de reciclagem.
            </p>
          </div>

          {/* Navegação */}
          <div className="col-12 col-md-3">
            <h5
              className="fw-bold mb-3"
              style={{ color: "#C6A15B" }}
            >
              Navegação
            </h5>

            <ul className="list-unstyled mb-0">
              {links.map((link) => (
                <li key={link.destino} className="mb-2">
                  <a
                    href={link.destino}
                    className="text-decoration-none"
                    style={{
                      color: "#CCCCCC",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C6A15B")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#CCCCCC")
                    }
                  >
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="col-12 col-md-4">
            <h5
              className="fw-bold mb-3"
              style={{ color: "#C6A15B" }}
            >
              Entre em contato
            </h5>

            <p style={{ color: "#CCCCCC" }}>
              Solicite informações sobre seu projeto.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn fw-bold px-3 py-2"
              style={{
                backgroundColor: "#C6A15B",
                color: "#080808",
                borderRadius: "6px",
              }}
            >
              <i className="bi bi-whatsapp me-2"></i>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <hr
          className="my-4"
          style={{ borderColor: "#444444" }}
        />

        <div className="text-center">
          <p
            className="mb-0"
            style={{
              color: "#999999",
              fontSize: "0.9rem",
            }}
          >
            © {new Date().getFullYear()} SERGMETAL SERVIÇOS INDUSTRIAL LTDA.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;