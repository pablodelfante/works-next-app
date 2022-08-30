import { HOST_BACKEND } from "utils/constants";
import { db } from "db/index";

export const getWorks = async (id) => {

    try {
        console.log(db);
        return db;

    } catch (error) {
        console.log({ 'getWorks dice': error })
        return null;
    }
}