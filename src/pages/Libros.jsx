//Components
import Header from "../components/Header"
//Estilos
import styles from "../modules/Libros.module.css"
function libros() {
    return (
      <>
      {/*libros*/}
       <Header />  
       <div className={styles.librosContent}>
        <section className={styles.buscador}> 
           <input type="text" placeholder=" Busca Tu Libro" /> 
           {/* <button>Realizar Pedido</button> */}
        </section>
       <div className={styles.seccionBaja}>
         <form className={styles.form}>
          {/* <label>Biblioteca App</label> */}

          <input type="text" placeholder="Nombre Completo" />

           <select name="especialidad_op">
              <option>- -</option>
              <option>Profesor</option>
              <option>Alumno</option>
            </select>

             <select name="especialidad_op">
              <option>- -</option>
              <option>Informatica</option>
              <option>Turismo</option>
              <option>Alimentos</option>
              <option>Ciclo Basico</option>
            </select>
              
             <select name="year_op">
              <option>- -</option>
              <option>1 ro</option>
              <option>2 do</option>
              <option>3 ro</option>
              <option>4 to</option>
              <option>5 to</option>
              <option>6 to</option>
              <option>7 mo</option>
             </select>
         
            <select name="year_div_op">
              <option>- -</option>
              <option>Primera</option>
              <option>Segunda</option>
              <option>Tercera</option>
              <option>Cuarta</option>
              <option>Quinta</option>
              <option>Sexta</option>
              <option>Septima</option>
            </select>
          
           {/*Button*/}
           <input type="button" value="Realizar Pedido" />
           {/* Libros */}
            <div className={styles.libros}>
              
            </div>
         </form>
       <section className={styles.librosStock}>
         <article className={styles.libroItem}>
            Libro
         </article>
         <article className={styles.libroItem}>
            Libro
         </article>
         <article className={styles.libroItem}>
            Libro
         </article>
         <article className={styles.libroItem}>
            Libro
         </article>
         <article className={styles.libroItem}>
            Libro
         </article>
         <article className={styles.libroItem}>
            Libro
         </article>
         <article className={styles.libroItem}>
            Libro
         </article>
         <article className={styles.libroItem}>
            Libro
         </article>
        </section>
       </div>
       </div>
      </>
    )
  } 
  
  export default libros
  