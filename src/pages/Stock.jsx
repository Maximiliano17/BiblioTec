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
           <p>Stock</p>
           <p>Stock Numero</p>
           <p>Stock Utilizable</p>
           <p>Stock Numero</p>
           <p>Stock En Uso</p>
           <p>Stock Numero</p>
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
  