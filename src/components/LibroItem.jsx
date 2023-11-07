import { useEffect } from "react";
import styles from "../modules/Libros.module.css"
export const LibroItem = ({libro}) => {
    return (
        <article className={styles.libroItem}>
            <img src={'/'+libro.img} alt="" />
            <p>{libro.title}</p>
            <div>
                <p>Tejuelo:</p>
                <p>{libro.tejuelo.dewi}</p>
                <p>{libro.tejuelo.tresPrimerasLetrasAutor}</p>
                <p>{libro.tejuelo.catalogacion}</p>
            </div>
        </article>
    );
}
export default LibroItem;