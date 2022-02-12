
export const queryGetWorks = `

{
    works(sort: ["priority:desc"]) {
      data {
        id
        attributes {
          title
          description
          content
          priority
          technologies
          image{
            data{
              id
              attributes{
                url
              }
            }
          }
        }
      }
      
    }
  }

`;