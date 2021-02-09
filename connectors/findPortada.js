import axios from 'axios';
import {HOST_BACKEND} from '../utils/constants';


// trae portadas getPortadas(page) ej: Portfolio, etc
export const getAlgo = async (page) => {
    const QUERY = `?page=${page}`;
    try {
       const response = await axios.get(`${HOST_BACKEND}/pages${QUERY}`);
       console.log(response)
       const {title, icon, content} = response.data[0].portada;
       const res = {title, icon, content }
       console.log(res)
       return res;
    } catch (error) {
        console.log(error)
    }
}