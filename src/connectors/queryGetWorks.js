
export const queryGetWorks = `

{
    works {
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