import { getLibrosRequest } from "../api/libro";
export async function getLibros(setLibros){
    try{
        const {data} = await getLibrosRequest();
        setLibros(data);
    }
    catch(error){
        console.error(error);
    }

}