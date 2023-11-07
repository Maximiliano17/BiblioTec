//Components
import { useEffect, useState } from "react"
import Header from "../components/Header"
import PedidoItem from "../components/PedidoItem"
//Estilos
import styles from "../modules/Pedidos.module.css"
import { borrarPedido, obtenerPedidos } from "../utils/manejarPedidos";
function Pedidos() {
  const [pedidos,setPedidos] = useState([]);
  useEffect(()=>{
    obtenerPedidos(setPedidos);
  },[]);
    return (
      <> 
      {/*Pedidos*/}
       <Header />
       <div className={styles.pedidosContent}>
       {
          pedidos.length > 0 ?
          pedidos.map(pedido => <PedidoItem key={pedido._id} pedido={pedido} borar={(id)=>borrarPedido(id,setPedidos, pedidos)}/>)
            :
            <div>No hay libros aun</div>
        }
       </div>
      </>
    )
  } 
  
  export default Pedidos