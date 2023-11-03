//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Inicio.module.css"
//Imagenes
//import banner from "../assets/banners/biblioteca.jpg"

function Inicio() {
    return ( 
      <>
      {/*Inicio*/}
       <Header />
       <div className={styles.inicioContent}>
        <div className={styles.info}>

        </div>
        <div className={styles.formularios}>
         <form className={styles.formulario}> 
           
         </form>
         <form className={styles.formulario}> 
          
         </form>
        </div>
       </div>
      </>
    )
  } 
  
  export default Inicio
  