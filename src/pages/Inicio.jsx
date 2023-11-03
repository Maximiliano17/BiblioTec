//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Inicio.module.css"
//Imagenes
import biblioteca from "../assets/logos/biblioteca-en-linea.png"

function Inicio() {
    return ( 
      <>
      {/*Inicio*/}
       <Header />
       <div className={styles.inicioContent}>
        <div className={styles.info}>
         <img src={biblioteca} alt="Logo" />
         <div className={styles.infoText}>
          <h1>¡Bienvenido Bibliotecario!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse, doloribus est neque enim numquam asperiores necessitatibus odit animi! Pariatur error nemo suscipit eaque excepturi eveniet ex consequuntur quo molestiae.
          </p>
         </div>
        </div>
        {/* <div className={styles.formularios}>
         <form className={styles.formulario}> 
           <label>Ingresar Pedido (Estudiante)</label>
           <input type="text" name="" id="" placeholder=" Nombre del Estudiante" />
           <input type="text" name="" id="" placeholder=" " />
           <input type="text" name="" id="" />
           <input type="text" name="" id="" />
          
           <input type="button" value="Enviar" />
         </form>
         <form className={styles.formulario}> 
         <label>Ingresar Pedido (Profesor)</label>
           <input type="text" name="" id="" placeholder=" Nombre del Profesor" />
           <input type="text" name="" id="" />
           <input type="text" name="" id="" />
           <input type="text" name="" id="" />
           <input type="button" value="Enviar" />
         </form>
        </div> */}
       </div>
      </>
    )
  } 
  
  export default Inicio
  