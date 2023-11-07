import { useEffect, useState } from "react";
import styles from "../modules/Pedidos.module.css"

export default function PedidoItem({pedido, borar}){
  const [fecha, setFecha] = useState();
  const [hora, setHora] = useState();
  useEffect(()=>{
    const fechaBaseDatos = new Date(pedido.createdAt)


      const hora = fechaBaseDatos.getHours();
      const fechaActual = new Date();
      const diferenciaMilisegundos = fechaActual - fechaBaseDatos;
      const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
      if(diferenciaDias == 0){
        const dia = fechaBaseDatos.getDate();
        const mes = fechaBaseDatos.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
        setFecha(dia+'/'+mes);
      }
      else{
        setFecha('hace ' + diferenciaDias+'d');
      }
      setHora(hora)
    
  },[]);
    return(
        <div className={styles.pedidoFactura}>
        <div className={styles.encabezado}>
         <p>N° #{pedido._id}</p>
         <p>Fecha: {fecha}</p>
         <p>Hora: A las {hora}h</p>
        </div>
         <div className={styles.contenido}>
           <p>Profesor: {pedido.profesor}</p>
           <p>Cruso: {pedido.year}</p>
           <p>Divicion: {pedido.divicion}</p>
         </div>
         <div className={styles.librosPedido}>

         </div>
         <div className={styles.bottones}>
          <button onClick={()=>borar(pedido._id)}>Borrar</button>
          <button>Informar</button>
          <button>Donwload</button>
         </div>
       </div>
    );
}