//Styles
import styles from "../modules/Stock.module.css"

function StockItem({libro}){
    return(
        <section className={styles.stockItem}>
          <div className={styles.nombreHerramienta}>
           <h1>{libro.title}</h1>
          </div> 
          <div className={styles.estadisticasHerramienta}>
           <p>Libros en pedidos</p>
           <p>{libro.pedidos}</p>
           <p>Stock Utilizable</p>
           <p>{libro.disponible}</p>
           <p>Stock Total</p>
           <p>{libro.stock}</p>
          </div>
        </section>  
    );
}

export default StockItem