import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { defaultUrlImage } from 'utils/config'
import { getWorks } from 'connectors/findWorks'
import Layout from 'components/template'
import Video from 'components/Video'
import Works from 'components/Works'
import MacWindow from 'components/MacWindow'
import Container from 'components/layouts/Container'
import Overlay from 'components/Overlay'

export default function Work({ work, works }) {
    const [overlayContent, setOverlayContent] = useState(null)

    const {
        title,
        description,
        tags,
        components,
        githubUrl,
        deployUrl,
        image: { url: imageUrl },
    } = work

    function getRandonElementFromArray(array) {
        return array.sort(() => Math.random() - 0.5).slice(0, 4)
    }

    const handleClickImage = (url) => {
        setOverlayContent(
            <>
                <p>note: click somwhere to close overlay</p>
                <Image
                    src={url}
                    width={1920}
                    height={1080}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    quality={100}
                    alt="image component"
                    objectFit="contain"
                />
            </>
        )
    }

    const worksForContinueNavigation = getRandonElementFromArray(works)
    return (
        <>
            <Head>
                <title>{title} | pablodelfante</title>
            </Head>
            <Layout>
                <Container>
                    <article className="py-14 max-w-5xl mx-auto grid gap-6">
                        <h2>{title}</h2>

                        {tags && tags.length ? (
                            <ul className="flex flex-wrap lg:gap-x-3 gap-1">
                                {tags.map((tecnologie, key) => (
                                    <li className="text-white text-xs font-medium truncate px-2 py-1 bg-gray-500 rounded-full" key={key}>
                                        {tecnologie}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <></>
                        )}

                        <p>{description}</p>

                        {imageUrl && (
                            <MacWindow>
                                <Image
                                    src={imageUrl ? imageUrl : defaultUrlImage}
                                    alt="main image on work"
                                    priority={true}
                                    layout="responsive"
                                    objectFit="contain"
                                    width={16}
                                    height={9}
                                    quality={100}
                                />
                            </MacWindow>
                        )}

                        {Boolean(components.length) && (
                            <ul className="grid gap-1">
                                {components.map((component, key) => (
                                    <li key={key}>
                                        {component.__typename === 'Video' && <Video src={component.videoUrl} />}
                                        {component.__typename === 'Markdown' && <ReactMarkdown children={component.markdown} />}
                                        {component.__typename === 'Image' && (
                                            <Image
                                                onClick={() => handleClickImage(component.image.url)}
                                                src={component.image.url}
                                                width={16}
                                                height={9}
                                                quality={100}
                                                alt="image component"
                                                objectFit="contain"
                                                layout="responsive"
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* testing overlay */}
                        {overlayContent && (
                            <Overlay onClose={() => setOverlayContent(null)}>
                                <p className="bg-red-100 text-slate-800">{overlayContent}</p>
                            </Overlay>
                        )}

                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener" className="underline">
                                see project on repository
                            </a>
                        )}

                        {deployUrl && (
                            <a href={deployUrl} target="_blank" rel="noopener" className="underline">
                                check deploy
                            </a>
                        )}

                        <hr className="my-24" />

                        <section className="grid gap-2">
                            <h4>More to check</h4>
                            <Works works={worksForContinueNavigation} />
                        </section>
                    </article>
                </Container>
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
    const { id: workId } = params
    const works = await getWorks()
    const work = works.find(({ id }) => id == workId)
    return { props: { work, works } }
}
