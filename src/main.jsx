//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//Components
import App from './App.jsx';
import Login from "./pages/Login.jsx";

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: ( 
        <App /> 
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