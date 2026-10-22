const whatsappNumber = "5511974603651";

function Header() {
  const mensagem = encodeURIComponent(
    "Olá! Vim pelo site da Sergmetal e gostaria de solicitar um orçamento."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagem}`;

  const linksMenu = [
    { texto: "Início", destino: "#inicio" },
    { texto: "Serviços", destino: "#servicos" },
    { texto: "Diferenciais", destino: "#diferenciais" },
    { texto: "Projetos", destino: "#projetos" },
    { texto: "Sobre", destino: "#sobre" },
    { texto: "Contato", destino: "#contato" },
  ];

  return (
    <header
      className="py-3"
      style={{
        backgroundColor: "#080808",
        borderBottom: "1px solid #333333",
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg p-0">

          {/* Logo */}
          <a
            href="#inicio"
            className="navbar-brand fw-bold m-0"
            style={{
              color: "#C6A15B",
              fontSize: "1.5rem",
              letterSpacing: "1px",
            }}
          >
            SERG<span style={{ color: "#FFFFFF" }}>METAL</span>
          </a>

          {/* Botão do menu mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir ou fechar menu"
            style={{
              border: "1px solid #C6A15B",
              padding: "6px 10px",
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                filter: "invert(1)",
              }}
            ></span>
          </button>

          {/* Menu de navegação */}
          <div
            className="collapse navbar-collapse"
            id="menuPrincipal"
            style={{
              
              borderRadius: "8px",
              padding: "12px",
              marginTop: "12px",
            }}
          >
            <ul className="navbar-nav mx-auto my-3 my-lg-0">
              {linksMenu.map((link) => (
                <li className="nav-item" key={link.destino}>
                  <a
                    href={link.destino}
                    className="nav-link px-3 fw-medium"
                    style={{
                      color: "#F3F3F3",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C6A15B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#F3F3F3";
                    }}
                  >
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>

            {/* Botão WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn fw-bold px-4 py-2"
              style={{
                backgroundColor: "#C6A15B",
                color: "#080808",
                border: "2px solid #C6A15B",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D8B875";
                e.currentTarget.style.borderColor = "#D8B875";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C6A15B";
                e.currentTarget.style.borderColor = "#C6A15B";
              }}
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;