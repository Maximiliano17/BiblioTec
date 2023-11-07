import axios from "./axios";
//obtener todos los libros
export const crearPedidoRequest = async (pedido) => {
    axios.post(`/pedidos`, pedido)
    .then(e => console.log(e.data))
    .catch((e) => {
        console.log(e.response.data.error);
    });
}
export const getPedidosRequest = async()=>axios.get('/pedidos');
export const borrarPedidoRequest = (id)=>axios.get(`/pedidos/${id}`);