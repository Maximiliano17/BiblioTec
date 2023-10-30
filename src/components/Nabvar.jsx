//Estilos
import styles from "../modules/Header.module.css"

function Nav() {
    return (
      <>
      {/*Header*/}
       <nav className={styles.nav}>
            <a href="#">Inicio</a>
            <a href="#">Libros</a>
            <a href="#">Nuestro Personal</a>
            <a href="#">Eventos</a>
            <a href="#">Cooperadora</a>
            <a href="#">Perfil</a>
       </nav> 
      </>
    )
  } 
  
  export default Nav
  