//Imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Inicio from "./pages/inicio.jsx";
import Login from "./pages/Login.jsx";
import Libros from "./pages/Libros.jsx";
import NuestroPersonal from "./pages/NuestroPersonal.jsx";
import Stock from "./pages/Stock.jsx";
import Pedidos from "./pages/Pedidos.jsx";

//contexto
import { LibroProvider } from "./context/libroContexts.jsx";

function App() {
  return (
    <LibroProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/personal" element={<NuestroPersonal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </BrowserRouter>
    </LibroProvider>
  );
}

export default App;
