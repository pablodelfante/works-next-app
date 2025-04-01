import { mock } from 'db/mock'
import { IS_BACKEND_MOCKED } from 'utils/constants'

interface Image {
    url: string;
}

interface Video {
    videoUrl: string;
}

interface Markdown {
    markdown: string;
}

interface ImageComponent {
    image: Image;
}

type Component = Video | Markdown | ImageComponent;

interface Work {
    id: string;
    title: string;
    description: string;
    stage: string;
    highlighted: boolean;
    githubUrl?: string;
    deployUrl?: string;
    image?: Image;
    tags: string[];
    components: Component[];
}

interface GraphQLResponse {
    data: {
        works: Work[];
    };
}

async function fetchWorks(): Promise<GraphQLResponse> {
    const query = `
      query Works {
        works(orderBy: highlighted_DESC, first: 20, stage: PUBLISHED) {
          id
          title
          description
          stage
          highlighted
          githubUrl
          deployUrl
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
        const response = await fetch(process.env.HOST_BACKEND!, {
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
        throw new Error(error instanceof Error ? error.message : 'Unknown error')
    }
}

export const fetchWorksMock = (): Work[] => mock

export const getWorks = async (): Promise<Work[]> => {
    try {
        if (IS_BACKEND_MOCKED) return fetchWorksMock()
        const response = await fetchWorks()
        const works = response.data.works
        return works
    } catch (error) {
        console.error({ getWorksIds: error })
        throw new Error(error instanceof Error ? error.message : 'Unknown error')
    }
} 