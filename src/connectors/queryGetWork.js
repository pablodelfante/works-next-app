export const queryGetWork = `
query getWork($id: ID) {
  work(id: $id){
    data{
      id
      attributes{
        title
        description
        description
        url_image
        url_video
        url_deploy
        url_github
        technologies
        updatedAt
        image{
          data{
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