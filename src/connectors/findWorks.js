import axios from 'axios';
import { HOST_BACKEND } from '../utils/constants';
export {getWorksV2} from 'connectors/findWorksV2';

// http://localhost:1337/works

// traer trabajos and especificos
export const getWorks = async (_id) => {

    // si hay id usalo, sino ordename los trabajos ASC y priority
    const QUERY = _id ? `/${_id}` : '?_sort=updatedAt:DESC,priority:DESC';

    try {
        //de la response tomo data con datos devueltos
        const { data } = await axios.get(`${HOST_BACKEND}/works${QUERY}`);
        //dependiendo el caso es un array de datos o un objeto con dato especifico
        return data;
    } catch (error) {
        //retornar esto falso me sirve para pruebas mias cuando no tengo conexion
        console.log({ getWorks_dice: error.message })
        return null
    }
}