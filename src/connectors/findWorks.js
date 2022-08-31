import { HOST_BACKEND } from "utils/constants";
import { db } from "db/index";

export const getWorks = async (id) => {

    try {
        // img transformation
        db.forEach((work) => {
            work.url_image = work.url_image && `/img/${work.url_image}`;
        })

        if (id) {
            const work = db.find((work) => work.id == id)
            return work
        }
        // console.log(db);
        return db;

    } catch (error) {
        console.log({ 'getWorks dice': error })
        return null;
    }
}