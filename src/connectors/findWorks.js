async function fetchWorks() {
  /* revisar documentación sobre first */
    const query = `
      query Works {
        works(orderBy: highlighted_DESC, first: 20) {
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
          components {
            __typename
            ... on Video {
              videoUrl
            }
            ... on Markdown {
              markdown
            }
          }
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
      throw new Error(error)
    }
  }
export const getWorks = async () => {
    try {
     const response = await fetchWorks();
     const works = response.data.works
     return works
    } catch (error) {
        console.log({ 'getWorksIds': error })
        throw new Error(error)
    }
}
export const getWorkById = async (workId) => {
    try {
        const response = await fetchWorks();
        const candidate = response.data.works.find(({id})=> id == workId)
        return candidate
    } catch (error) {
        console.log({ 'getWorkById': error })
       throw new Error(error)
    }
}


  
