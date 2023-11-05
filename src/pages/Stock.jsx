//Components
import { useState } from "react"
import Header from "../components/Header"
import StockItem from "../components/StockItem"
//Styles
import styles from "../modules/Stock.module.css"
import { getLibros } from "../utils/manejarLibros";

function Stock() {
  const [libros, setLibros] = useState([]);
  useState(() => {
    getLibros(setLibros);

  }, []);
  return (
    <>
      {/*Stock*/}
      <Header />
      <div className={styles.stockContent}>
        {
          libros.length > 0 ?
            libros.map(libro => <StockItem key={libro._id} libro={libro}/>)
            :
            <div>No hay libros aun</div>
        }
      </div>
    </>
  )
}

export default Stock
