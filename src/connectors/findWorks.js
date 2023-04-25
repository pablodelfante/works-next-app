import { mock } from 'db/mock'
import { IS_BACKEND_MOCKED } from 'utils/constants'

async function fetchWorks() {
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
            ... on Image {
              image {
                url
              }
            }
          }
        }
      }
    `

    try {
        const response = await fetch(process.env.HOST_BACKEND, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
export const fetchWorksMock = () => mock
export const getWorks = async () => {
    try {
        if (IS_BACKEND_MOCKED) return fetchWorksMock()
        const response = await fetchWorks()
        const works = response.data.works
        return works
    } catch (error) {
        console.error({ getWorksIds: error })
        throw new Error(error)
    }
}
