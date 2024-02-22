import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Contact } from "./routes/contact";
import { Skills } from "./routes/Skills";
import { About } from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contato" element={<Contact />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/Sobre" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
