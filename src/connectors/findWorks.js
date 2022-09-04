import { db } from "db/index";

export const getWorks = async (id) => {

    try {
        if (id) {
            const work = db.find((work) => work.id == id)
            return work
        }
        // order db
        const orderedDb = db.sort((a,b)=>{
           if (a.priority && !b.priority) {
             return -1  
           }
           if (!a.priority && b.priority) {
            return 1
           }
           return 0
        })
        return orderedDb;

    } catch (error) {
        console.log({ 'getWorks dice': error })
        return null;
    }
}