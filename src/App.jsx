import "./App.css";
import { FormularioDeEvento } from "./Componentes/FormularioDeEvento";

//No React, componentes são funções:

//Props é um objeto
//Props. children

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png?" alt="imagem-de-logo-tipo" />
      </header>
      <section>
        <img
          src="/banner.png"
          alt="imagem-com-uma-mulher-com-oculos-de-realidade-aumentada"
        />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
