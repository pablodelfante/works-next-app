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
export const getWorks = async () => {
    try {
     const response = await fetchWorks();
     const works = response.data.works
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
        return candidate
    } catch (error) {
        console.log({ 'getWorkById': error })
        return null
    }
}


  
