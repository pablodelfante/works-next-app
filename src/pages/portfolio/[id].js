import Layout from 'components/template'
import { getWorks } from 'connectors/findWorks'
import Head from 'next/head'
import Image from 'next/image'
import formatDate from 'helpers/formatDate'
import parse from 'html-react-parser'
import { defaultUrlImage } from 'utils/config'

export default function Work({ work }) {
    const {
        title,
        description,
        content,
        tags,
        url_github,
        url_deploy,
        url_image,
        url_video,
        updatedAt,
    } = work
    const dateUpdate = formatDate(updatedAt)
    return (
        <>
            <Head>
                <title>{title} | pablodelfante</title>
            </Head>
            <Layout>
                <article className="py-14 max-w-5xl mx-auto">
                    {/* Titulo descripcion e imagen */}
                    <h2 className="mb-5">{title}</h2>
                    {/* <time className='text-gray-500 block font-light border-b mb-10'>Updated at: {dateUpdate}</time> */}

                    {/* Tecnologias*/}
                    {/* <h4 className=''>Tecnologías usadas</h4> */}
                    {tags && tags.length ? (
                        <ul className="flex flex-wrap lg:gap-x-3 gap-1 mb-0.5">
                            <li className="font-bold">Used tags</li>
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

                    {/* description of page */}
                    <p className="mb-5">{description}</p>

                    {/* multimedia */}
                    {!url_video && (
                        <div className="mb-5">
                            <Image
                                src={url_image ? url_image : defaultUrlImage}
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

                    {/* video */}
                    {url_video && (
                        // este posicionamiento y padding son para mantener la relacion aspecto del video (16/9)
                        <>
                            <div
                                className="my-5"
                                style={{ aspectRatio: '16/9' }}
                            >
                                <iframe
                                    className="w-full h-full"
                                    src={url_video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-sm">
                                If you can't watch the video:{' '}
                                <a
                                    className="underline text-primary"
                                    href={url_video}
                                    target="_blank"
                                >
                                    watch on youtube
                                </a>
                            </p>
                        </>
                    )}

                    {/* MARKDOWN */}
                    {/* este es un campo extra cuando desee agregar contenido */}
                    {content ? (
                        <section className="py-3"> {parse(content)} </section>
                    ) : (
                        ''
                    )}

                    {/* Link github */}
                    {url_github ? (
                        <a
                            href={url_github}
                            target="_blank"
                            rel="noopener"
                            className="underline"
                        >
                            see project on github
                        </a>
                    ) : (
                        ''
                    )}
                    <br />
                    <br />

                    {/* Link deploy */}
                    {url_deploy ? (
                        <a
                            href={url_deploy}
                            target="_blank"
                            rel="noopener"
                            className="underline"
                        >
                            see deploy
                        </a>
                    ) : (
                        ''
                    )}
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
    const work = await getWorks(id)
    return { props: { work } }
}
