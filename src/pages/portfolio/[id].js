import Layout from 'components/template'
import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { defaultUrlImage } from 'utils/config'
import { getWorks, getWorkById } from 'connectors/findWorks'
import Video from 'components/Video'

export default function Work({ work }) {
    const {
        title,
        description,
        tags,
        components,
        githubUrl,
        deployUrl,
        image: {url: imageUrl},
    } = work;
    return (
        <>
            <Head>
                <title>{title} | pablodelfante</title>
            </Head>
            <Layout>
                <article className="py-14 max-w-5xl mx-auto">
                    <h2 className="mb-5">{title}</h2>

                    {tags && tags.length ? (
                        <ul className="flex flex-wrap lg:gap-x-3 gap-1 mb-3">
                            {tags.map((tecnologie, key) => (
                                <li
                                    className="text-white text-xs font-medium truncate px-2 py-1 bg-gray-500 rounded-full"
                                    key={key}
                                >
                                    {tecnologie}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <></>
                    )}

                    <p className="mb-5">{description}</p>

                    {imageUrl && (
                        <div className="mb-5">
                            <Image
                                src={imageUrl ? imageUrl : defaultUrlImage}
                                alt="cant find the image"
                                priority={true}
                                //define como se comporta en el layout
                                layout="responsive"
                                //como se comporta la imagen dentro de su propio contenedor
                                objectFit="contain"
                                width={16}
                                height={9}
                                quality={100}
                            />
                        </div>
                    )}

                    <ul className="my-5">
                        {components && components.length && components.map((component, key) => <li key={key}>
                            {component.__typename === "Video" && <Video src={component.videoUrl}/>}
                            {component.__typename === "Markdown"  &&  <ReactMarkdown children={component.markdown} />}
                        </li>)}
                    </ul>

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener"
                            className="underline"
                        >
                            see project on repository
                        </a>
                    )}
                    <br />
                    <br />

                    {deployUrl && (
                        <a
                            href={deployUrl}
                            target="_blank"
                            rel="noopener"
                            className="underline"
                        >
                            check deploy
                        </a>
                    ) }
                </article>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const works = await getWorks()
    // obtener las id para pre renderizar
    // retorna un array[] que contienen objetos asi: {params: {id: id}}
    const paths = works?.map((work) => ({
        params: { id: work?.id },
    }))
    // aqui es obligatorio retornar paths y fallback
    // paths aqui por estar dentro de {} se transforma a paths:[a,b,c...]
    if (paths) {
        return {
            paths,
            fallback: false,
        }
    } else {
        return {
            paths: [],
            fallback: false,
        }
    }
}

export async function getStaticProps({ params }) {
    const { id } = params
    const work = await getWorkById(id)
    return { props: { work } }
}
