//Components
import { useEffect, useState } from "react"
import Header from "../components/Header"
import PedidoItem from "../components/PedidoItem"

//Estilos
import styles from "../modules/Pedidos.module.css"
import { useLibrosContext } from "../context/libroContexts";

function Pedidos() {
  const {pedidos, borrarPedido} = useLibrosContext();

    return (
      <> 
      {/*Pedidos*/}
       <Header />
       <div className={styles.pedidosContent}>
       {
          pedidos[0] ?
          pedidos.map(pedido => <PedidoItem key={pedido._id} pedido={pedido}/>)
            :
            <div>No hay libros aun</div>
        }
       </div>
      </>
    )
  } 
  
  export default Pedidos