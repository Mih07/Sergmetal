import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import CTA from "./components/CTA";
import Footer from "./components/Footer"
import Segmentos from "./components/Segmentos";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Segmentos />
        <Diferenciais />
        <Projetos />
        <CTA />
        
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;