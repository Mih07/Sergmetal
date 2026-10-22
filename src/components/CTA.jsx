function CTA() {
  const whatsappNumber = "5511974603651";

  const mensagem = encodeURIComponent(
    "Olá! Acessei o site da SERGMETAL e gostaria de solicitar um orçamento."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagem}`;

  return (
    <section
      id="contato"
      className="py-5"
      style={{
        backgroundColor: "#e2c788",
        color: "#080808",
      }}
    >
      <div className="container py-5">
        <div
          className="text-center mx-auto"
          style={{
            maxWidth: "800px",
          }}
        >
          <span
            className="d-inline-block text-uppercase fw-bold mb-3"
            style={{
              color: "#080808",
              fontSize: "0.85rem",
              letterSpacing: "2px",
            }}
          >
            Vamos conversar?
          </span>

          <h2
            className="fw-bold mb-4"
            style={{
              color: "#080808",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: "1.2",
            }}
          >
            Seu próximo projeto começa com uma{" "}
            <span style={{ color: "#ffffff" }}>
              boa conversa.
            </span>
          </h2>

          <p
            className="mb-4"
            style={{
              color: "#080808",
              fontSize: "1.05rem",
              lineHeight: "1.8",
            }}
          >
            Entre em contato com a SERGMETAL e converse sobre
            as necessidades do seu projeto.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg fw-bold px-4 py-3"
            style={{
              backgroundColor: "#080808",
              color: "#ffffff",
              border: "2px solid #080808",
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
          >
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;