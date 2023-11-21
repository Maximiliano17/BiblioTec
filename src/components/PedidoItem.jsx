import { useEffect, useState } from "react";
import moment from 'moment';
import styles from "../modules/Pedidos.module.css"
import { useLibrosContext } from "../context/libroContexts";
export default function PedidoItem({pedido}){
  const [fecha, setFecha] = useState();
  const [hora, setHora] = useState();
  const {
    setPedidos, pedidos, borrarPedido
  } = useLibrosContext();

  useEffect(()=>{
    setFecha(moment('2023-11-21T00:45:37.186+00:00').format('L'))
    setHora(moment(pedido.createdAt).format('h:mm a'))
  },[]);
    return(
        <div className={styles.pedidoFactura}>
        <div className={styles.encabezado}>
         <p>N° #{pedido._id}</p>
         <p>Fecha: {fecha}</p>
         <p>Hora: {hora}</p>
        </div>
         <div className={styles.contenido}>
           <p>Profesor: {pedido.profesor}</p>
           <p>Cruso: {pedido.year}</p>
           <p>Divicion: {pedido.divicion}</p>
         </div>
         <div className={styles.librosPedido}>

         </div>
         <div className={styles.bottones}>
          <button onClick={()=>borrarPedido(pedido._id, setPedidos, pedidos)}>Borrar</button>
          <button>Informar</button>
          <button>Donwload</button>
         </div>
       </div>
    );
}