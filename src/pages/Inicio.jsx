//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Home.module.css"

function Inicio() {
    return (
      <>
      {/*Inicio*/}
       <Header />
       <div className={styles.inicio}>
        Hola
       </div>
      </>
    )
  } 
  
  export default Inicio
  