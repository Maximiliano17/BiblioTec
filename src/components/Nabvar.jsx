//Estilos
import styles from "../modules/Header.module.css"
//React
import { Link } from "react-router-dom"
function Nav() {
    return (
      <>
      {/*Header*/} 
       <nav className={styles.nav}>
            <Link className={styles.link} to="/">Inicio</Link>
            <Link className={styles.link} to="/libros">Libros</Link>
            <Link className={styles.link} to="/stock">Stock</Link>
            <Link className={styles.link} to="/pedidos">Pedidos</Link>
            <a href="#">Perfil</a>
       </nav> 
      </>
    ) 
  } 
  
  export default Nav
  