import Link from 'next/link'
import { getWorks } from 'connectors/findWorks'
import Head from 'next/head'
import Layout from 'components/template'
import Container from 'components/layouts/Container'
import MacWindow from 'components/MacWindow'
import Image from 'next/image'
import Overlay from 'components/Overlay'
import Video from 'components/Video'
import Works from 'components/Works'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
    const works = await getWorks()

    return works?.map((work) => ({
        id: work?.id,
    }))
}

export default async function Page({ params }) {
    const { id: workId } = params
    const works = await getWorks()
    const work = works.find(({ id }) => id == workId)

    const {
        id,
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

    const worksForContinueNavigation = getRandonElementFromArray(works)

    return (
        <>
            <Head>
                <title>{title} | Pablo Delfante</title>
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
                                    width={1400}
                                    height={700}
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
                                            <Link href={`/portfolio/${id}/modal?imageUrl=${component.image.url}`}>
                                                <Image
                                                    className="hover:cursor-pointer"
                                                    src={component.image.url}
                                                    width={1400}
                                                    height={700}
                                                    quality={100}
                                                    alt="image component"
                                                />
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
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
