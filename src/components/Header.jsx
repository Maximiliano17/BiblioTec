//Estilos
import styles from "../modules/Header.module.css"
//Components
import Nav from "./Nabvar"
//Imagenes
import logo from "../assets/logos/BiblioTec.png"

function Header() {
    return (
      <>
      {/*Header*/}
       <header className={styles.header}>
         <div className={styles.barraSuperior}> 
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
         </div>
         <div className={styles.barraInferior}>
          <Nav />
          <div className={styles.burger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
         </div>
       </header> 
      </>
    )
  } 
  
  export default Header
  