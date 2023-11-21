// ---------------------------------------------------------------
import { createContext, useContext, useState, useEffect } from "react";
import { getLibros, getLibro, createLibro, deleteLibro, updateLibro } from "../utils/manejarLibros";
import { borrarPedido, crearPedido, obtenerPedidos } from "../utils/manejarPedidos";
const libroContext = createContext();
export const useLibrosContext = () => {
    const context = useContext(libroContext);
    if (!context) {
        throw new Error("useAuth must be used within an authProvider");
    }
    return context;
}
// ---------------------------------------------------------------

export function LibroProvider({ children }) {
    const [libros, setLibros] = useState([]);
    const [pedidos, setPedidos] = useState([]);
    
    useEffect(()=>{
        obtenerPedidos(setPedidos);
        getLibros(setLibros);
    },[]);
    return (
        <libroContext.Provider 
        value={{ 
            libros, setLibros, createLibro, getLibros, deleteLibro, getLibro, updateLibro,
            pedidos, setPedidos, borrarPedido, crearPedido
            }}>
            {children}
        </libroContext.Provider>
    );
}