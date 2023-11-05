import axios from "./axios";
//obtener todos los libros
export const getLibrosRequest = ()=> axios.get(`/libros`);
//obtener un libro en especifico por su id
export const getLibroRequest = (id)=> axios.get(`/libros/${id}`);
//crear un libro
export const crearLibroRequest = (libro)=> axios.post(`/libros`, libro);
//actualizar un libro
export const updateLibroRequest = (id, libro)=> axios.put(`/libros/${id}`,libro);
//borrar un libro
export const deleteLibroRequest = (id)=> axios.delete(`/libros/${id}`);