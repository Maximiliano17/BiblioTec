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
        </section>
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
         <article className={styles.libroItem}>
            Libro
         </article>
        </section>
       </div>
      </>
    )
  } 
  
  export default libros
  