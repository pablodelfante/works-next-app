import { HOST_BACKEND } from "utils/constants";
import { db } from "db/index";

export const getWorks = async (id) => {

    try {
        // img transformation
       /*  const copyDb =  db.map((work) => work)
        console.log(db === copyDb);
        
        const works = copyDb.map((work) => {
            work.url_image = work.url_image && `/img/${work.url_image}`;
            return work;
        }) */
        // console.log('original db', works);

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