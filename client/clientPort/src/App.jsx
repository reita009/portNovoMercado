import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Contact } from "./routes/contact";
import { Skills } from "./routes/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contato" element={<Contact />} />
        <Route path="/habilidades" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
