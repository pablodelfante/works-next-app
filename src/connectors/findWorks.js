import { db } from 'db/index'

export const getWorks = async (id) => {
    try {
        if (id) {
            const work = db.find((work) => work.id == id)
            return work
        }
        // order db
        const orderedDb = db.sort((a, b) => {
            if (a.priority && !b.priority) {
                return -1
            }
            if (!a.priority && b.priority) {
                return 1
            }
            return 0
        })
        return orderedDb
    } catch (error) {
        console.log({ 'getWorks dice': error })
        return null
    }
}
async function fetchWorks() {
    const query = `
      query Works {
        works(orderBy: highlighted_DESC) {
          id
          title
          description
          stage
          highlighted
          githubUrl
          image {
            url
          }
          tags
        }
      }
    `;
    
    try {
      const response = await fetch(process.env.HOST_BACKEND, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
// import { getWorksIds, getWorkById } from 'connectors/findWorks'
export const getWorksV2 = async () => {
    try {
     const response = await fetchWorks();
     const works = response.data.works
     console.log('works', works);
     return works
    } catch (error) {
        console.log({ 'getWorksIds': error })
        return null
    }
}
export const getWorkById = async (workId) => {
    try {
        const response = await fetchWorks();
        const candidate = response.data.works.find(({id})=> id == workId)
        console.log('candidate', candidate);
        return candidate
    } catch (error) {
        console.log({ 'getWorkById': error })
        return null
    }
}


  
