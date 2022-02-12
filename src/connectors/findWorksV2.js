// This can only used on getStatic props is size server only

import { queryGetWorks } from "connectors/queryGetWorks";
import { queryGetWork } from "connectors/queryGetWork";

export const getWorksV2 = async (id) => {
    // to check for see the meaning of import .graphql files
    // https://dev.to/ivanms1/next-js-graphql-typescript-setup-5bog
    console.log('>>>>',id)
    try {
        const query = id ? queryGetWork : queryGetWorks;
        
        const res = await fetch("http://localhost:1337/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
                variables: { id }
            }),
        })
        // Desembarco de query -> data -> works -> data
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

        // data from query
        const { data } = await res.json();
        
        //si hay query...
        if (id) {
            return data.work.data;
        }
        // si no hay query...
        return data.works.data;

    } catch (error) {
        console.log({ 'getWorks dice': error })
        return { works: null }
    }
    /*
    Estructuras que retorna el plugin de graphql 
    data.works[].data[].id||atributes.title etc
    */
}