import axios from 'axios';
import {HOST_BACKEND} from '../utils/constants';

// http://localhost:1337/works

// traer trabajos and especificos
export const getWorks = async (_id) => {
    const QUERY = _id ? `/${_id}` : ''; //si hay query usala sino vacio
    try {
       const response = await axios.get(`${HOST_BACKEND}/works${QUERY}`);
        //data es un array con datos traidos
       //desestructurar
       return response;
    } catch (error) {
        console.log(error)
    }
}