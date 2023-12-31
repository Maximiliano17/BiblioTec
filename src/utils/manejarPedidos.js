import { borrarPedidoRequest, crearPedidoRequest, getPedidosRequest } from "../api/pedido";

export const crearPedido = async (e, librosSeleccionados, getLibros, setPedidos) => {
    e.preventDefault();
    const formulario = e.target;
    const pedido = {
        profesor: formulario.profesor.value,
        solicitante: formulario.solicitante.value,
        especialidad: formulario.especialidad.value,
        year: formulario.year.value,
        divicion: formulario.divicion.value,
        librosSeleccionados: ['uni','mate']//reemplazar aqui por librosSeleccionados
    };
    const enviar = JSON.stringify(pedido);
    const res = crearPedidoRequest(enviar);
    if(res.status == 200) getLibros(setPedidos);
    // e.target.submit();
}

export const obtenerPedidos = async (setPedidos)=>{
    const {data} = await getPedidosRequest();
    setPedidos(data);
}

export const borrarPedido = async (id, setPedidos, pedidos)=>{
    const filtrado = pedidos.filter(pedido => pedido._id !== id);
    setPedidos(filtrado);
    borrarPedidoRequest(id);
}