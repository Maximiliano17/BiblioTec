//Components
import { useState } from "react";
import Header from "../components/Header";
import StockItem from "../components/StockItem";
//Styles
import styles from "../modules/Stock.module.css";
import { useLibrosContext } from "../context/libroContexts";

function Stock() {
  const { libros } = useLibrosContext();
  return (
    <>
      {/*Stock*/}
      <Header />
      <div className={styles.stockContent}>
        {libros.length > 0 ? (
          libros.map((libro) => <StockItem key={libro._id} libro={libro} />)
        ) : (
          <div>No hay libros aun</div>
        )}
      </div>
    </>
  );
}

export default Stock;
