//Components
import { useState } from "react"
import Header from "../components/Header"
import LibroItem from "../components/LibroItem"
//Estilos
import styles from "../modules/Libros.module.css"
import { getLibros } from "../utils/manejarLibros";
import { crearPedido } from "../utils/manejarPedidos";
function libros() {
   const [libros, setLibros] = useState([]);

   //solo debe guardar ID de los libros seleccionados
   const [librosSeleccionados, setLibrosSeleccionados] = useState([]);
   useState(() => {
      getLibros(setLibros);
   }, []);
   const seleccionarLibros = () => {
      useState
   }
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
               <form className={styles.form} onSubmit={(evento) => crearPedido(evento, librosSeleccionados)}>
                  <label>Biblioteca App</label>

                  {/* Nombre del profesor */}
                  <label htmlFor="profesor">Nombre</label>
                  <input type="text" name="profesor" id="profesor" placeholder="Nombre Completo" required />

                  <label htmlFor="solicitante">Solicitante</label>
                  <select name="solicitante" id="solicitante" required>
                     <option value='profesor'>Profesor</option>
                     <option value='alumno'>Alumno</option>
                  </select>

                  {/* 
                  crear un input que aparezca si un alumno es el solicitante para pedir su nombre.
                  <label htmlFor="solicitante">Nombre</label>
                  <input type="text" placeholder="Nombre Completo" />
                  */}

                  <label htmlFor="especialidad">Especialidad</label>
                  <select name="especialidad" id="especialidad" required>
                     <option value='informatica'>Informatica</option>
                     <option value='turismo'>Turismo</option>
                     <option value='alimentos'>Alimentos</option>
                     <option value='ciclo_basico'>Ciclo Basico</option>
                  </select>

                  <label htmlFor="year">Año</label>
                  <select name="year" id="year" required>
                     <option value='1ro'>1 ro</option>
                     <option value='2do'>2 do</option>
                     <option value='3ro'>3 ro</option>
                     <option value='4to'>4 to</option>
                     <option value='5to'>5 to</option>
                     <option value='6to'>6 to</option>
                     <option value='7mo'>7 mo</option>
                  </select>

                  <label htmlFor="divicion">Divicion</label>
                  <select name="divicion" id="divicion" required>
                     <option value='primera'>Primera</option>
                     <option value='segunda'>Segunda</option>
                     <option value='tercera'>Tercera</option>
                     <option value='cuarta'>Cuarta</option>
                     <option value='quinta'>Quinta</option>
                     <option value='sexta'>Sexta</option>
                     <option value='septima'>Septima</option>
                  </select>

                  {/*Button*/}
                  <input type="submit" value="Realizar Pedido" />
                  {/* Libros */}
                  <div className={styles.libros}></div>
               </form>


               <section className={styles.librosStock}>
                  {
                     libros.length > 0 ?
                        libros.map(libro => <LibroItem key={libro._id} libro={libro} />)
                        :
                        <div>No hay libros aun</div>
                  }
               </section>

            </div>
         </div>
      </>
   )
}

export default libros
