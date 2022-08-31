import { HOST_BACKEND } from "utils/constants";
import { db } from "db/index";

export const getWorks = async (id) => {

    try {
        if (id) {
            const work = db.find((work) => work.id == id)
            return work
        }
        return db;

    } catch (error) {
        console.log({ 'getWorks dice': error })
        return null;
    }
}