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
          <select>
            <option>Profesor</option>
            <option>Alumno</option>
          </select>
          <input type="text" name="" id="" placeholder=" Nombre del Estudiante" />
           <input type="text" name="" id="" placeholder=" " />
           <input type="text" name="" id="" />
           <input type="text" name="" id="" />
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
  