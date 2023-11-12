//Styles
import styles from "../modules/Libros.module.css";
const LibroItem = ({ libro, onSeleccionarLibro }) => {
  const handleClick = () => {
    onSeleccionarLibro(libro._id);
  };

  return (
    <article className={styles.libroItem}>
      <p>{libro.title}</p>
      <div className={styles.tejuelo}>
        <p>Tejuelo</p>
        <p>{libro.tejuelo.dewi}</p>
        <p>{libro.tejuelo.tresPrimerasLetrasAutor}</p>
        <p>{libro.tejuelo.catalogacion}</p>

        <button onClick={handleClick}>Seleccionar Libro</button>
      </div>
    </article>
  );
};

export default LibroItem;
