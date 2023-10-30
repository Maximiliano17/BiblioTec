//Styles
import styles from "../modules/Login.module.css"
//Imagenes
import logo from "../assets/logos/biblio.png"
//React
import { Link } from "react-router-dom"

function Login() {
    return (   
      <>
      {/*Login*/}
      <div className={styles.loginContent}>
        <form className={styles.formularioLogin}>
        <section className={styles.logo}> 
         <img src={logo} alt="Icon" />
         <h1>Login</h1>
        </section>
        <section className={styles.campos}>
         <input type="text" placeholder="  Nombre" />
         <input type="text" placeholder="  Apellido" />
         <input type="text" placeholder="  Dni" />
        </section>
        <section className={styles.enviar}>
         <input type="submit" />
        </section>
        </form>
        <div className={styles.formulario}>
            <div className={styles.formDos}>
              <p>¿No tienes cuenta?   <Link className={styles.link} to="/">Registrarse</Link></p>
            </div>
              <div className={styles.formDos}>
               <p>Entrar sin cuenta  <Link className={styles.link} to="/">Ir</Link></p>
              </div>  
        </div>
      </div>
      </>
    )
  } 
  
  export default Login
  