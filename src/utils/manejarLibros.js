import {
  crearLibroRequest,
  deleteLibroRequest,
  getLibroRequest,
  getLibrosRequest,
  updateLibroRequest,
} from "../api/libro";

// ---------------------------------------------------------------
//obtiene todos los libros
export const getLibros = async (setLibros) => {
  try {
    const res = await getLibrosRequest();
    setLibros(res.data);
  } catch (error) {
    console.error(error);
  }
};
// ---------------------------------------------------------------
export const createLibro = async (task) => {
  try {
    const res = await crearLibroRequest(task);
  } catch (error) {
    console.error(error);
  }
};
// ---------------------------------------------------------------

export const deleteLibro = async (id, setLibros, libros) => {
  try {
    const res = await deleteLibroRequest(id);
    if (res.status === 200) setLibros(libros.filter((task) => task._id !== id));
  } catch (error) {
    console.log(error);
  }
};
// ---------------------------------------------------------------
//obtiene un solo libro por su id
export const getLibro = async (id) => {
  try {
    const res = await getLibroRequest(id);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
// ---------------------------------------------------------------

export const updateLibro = async (id, task) => {
  try {
    const res = await updateLibroRequest(id, task);
  } catch (error) {
    console.log(error);
  }
};
// ---------------------------------------------------------------
