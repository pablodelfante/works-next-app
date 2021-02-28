import axios from 'axios';
import {HOST_BACKEND} from '../utils/constants';

// http://localhost:1337/works

// traer trabajos and especificos
export const getWorks = async (_id) => {
    const QUERY = _id ? `/${_id}` : ''; //si hay query usala sino vacio
    try {
        //de la response tomo data con datos devueltos
       const {data} = await axios.get(`${HOST_BACKEND}/works${QUERY}`);
       //dependiendo el caso es un array de datos o un objeto con dato especifico
       return data;
    } catch (error) {
        //retornar esto falso me sirve para pruebas mias cuando no tengo conecion
        console.log({getWorks_dice:error.message})
        return null
    }
}