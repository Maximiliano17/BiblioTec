//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//Components
import App from './App.jsx';
import Login from "./pages/Login.jsx";
import Libros from "./pages/Libros.jsx";
import NuestroPersonal from "./pages/NuestroPersonal.jsx";
import Stock from "./pages/Stock.jsx";
import Pedidos from "./pages/Pedidos.jsx";
// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: ( 
        <App /> 
    ),
  },
  {
    path: "/libros",
    element: ( 
        <Libros /> 
    ), 
  },
  {
    path: "/personal",
    element: ( 
        <NuestroPersonal /> 
    ), 
  },
  {
    path: "/pedidos",
    element: ( 
        <Pedidos /> 
    ), 
  },
  {
    path: "/stock",
    element: (  
        <Stock /> 
    ), 
  },
  {  /*Login - Register*/
    path: "/login",
    element: ( 
        <Login /> 
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);