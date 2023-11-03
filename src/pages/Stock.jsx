//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Stock.module.css"

function Stock() {
    return (
      <>
      {/*Stock*/} 
       <Header />
       <div className={styles.stockContent}>
        <section className={styles.stockItem}>
          <div className={styles.nombreHerramienta}>
           <h1>El Principito</h1>
          </div> 
          <div className={styles.estadisticasHerramienta}>
           <p>Libros en pedidos</p>
           <p>5</p>
           <p>Stock Utilizable</p>
           <p>30</p>
           <p>Stock Total</p>
           <p>35</p>
          </div>
        </section>
        <section className={styles.stockItem}>
          <div className={styles.nombreHerramienta}>
           
          </div>
          <div className={styles.estadisticasHerramienta}>

          </div>
        </section>
        <section className={styles.stockItem}>
          <div className={styles.nombreHerramienta}>
           
          </div>
          <div className={styles.estadisticasHerramienta}>

          </div>
        </section>
        <section className={styles.stockItem}>
          <div className={styles.nombreHerramienta}>
           
          </div>
          <div className={styles.estadisticasHerramienta}>

          </div>
        </section>
        <section className={styles.stockItem}>
          <div className={styles.nombreHerramienta}>
           
          </div>
          <div className={styles.estadisticasHerramienta}>

          </div>
        </section>
       </div>
      </>
    )
  } 
  
  export default Stock
  