import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Contact } from "./routes/contact";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contato" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
