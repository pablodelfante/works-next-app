import Layout from 'components/template'
import TitlePage from 'components/titlePage'
import { getWorks } from 'connectors/findWorks'
import Link from 'next/link'
import { CONTENT_PORTADA } from 'utils/dataSite'

import Head from 'next/head'
import Card from 'components/Card'

export default function Portfolio({ works }) {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.portfolio
    const draftControl = (draft) =>
        process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' || !draft

    return (
        <>
            <Head>
                <title>portfolio | pablodelfante</title>
            </Head>
            <Layout>
                <TitlePage title={titlePortada} content={contentPortada} />

                <ul className="my-20 lg:my-40 grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
                    {/* si no hay works */}

                    {!works && (
                        <p>
                            oops! I don't find works, sure i am on maintenance
                            or break something, sorry😥. If yu can write me!
                            pablodelfantexp@gmail.com
                        </p>
                    )}

                    {works &&
                        works?.map(
                            ({
                                draft,
                                id,
                                url_image,
                                title,
                                description,
                                tags,
                            }) => (
                                <>
                                    {draftControl(draft) && (
                                        <Link
                                            href={`/portfolio/${id}`}
                                            key={id}
                                        >
                                            <a className="grid">
                                                <Card
                                                    imageSrc={url_image}
                                                    title={title}
                                                    tags={tags}
                                                    description={description}
                                                />
                                            </a>
                                        </Link>
                                    )}
                                </>
                            )
                        )}
                </ul>
            </Layout>
        </>
    )
}

export async function getStaticProps(context) {
    const works = await getWorks()
    return { props: { works } }
}
