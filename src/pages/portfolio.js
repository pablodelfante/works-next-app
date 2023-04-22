import Layout from 'components/template'
import { getWorks } from 'connectors/findWorks'
import Head from 'next/head'
import Works from 'components/Works'
import Container from 'components/layouts/Container'
import BlobV2 from 'components/BlobV2'
import Terminal from 'components/Terminal'

export default function Portfolio({ works }) {
    return (
        <>
            <Head>
                <title>portfolio | pablodelfante</title>
            </Head>
            <Layout>
                <Container>
                    <section>
                        <section className="my-10 md:my-30 grid lg:grid-cols-[1.5fr_1fr] items-center">
                            <div className={`md:max-w-sm h-min`}>
                                <h1 className="text-primary dark:text-primary font-bold mb-4 lg:w-min text-6xl lg:text-8xl">Gusto de verte !!</h1>
                                <Terminal init="portfolio">
                                    <p className="text-xl font-light text-white">
                                        ¡¡Hola!! ¡Bienvenido a mi sitio! Aquí les voy a hablar de mí, de mí. ¡Adelante!
                                    </p>
                                </Terminal>
                            </div>
                            <div className="hidden lg:block">
                                <BlobV2
                                    blobConfig={{
                                        color: 'hwb(243deg 30% 1%)',
                                    }}
                                    canvasStyles={{ width: '400px' }}
                                />
                            </div>
                        </section>
                    </section>
                    <section className="my-20 lg:my-40">
                        <Works works={works} />
                    </section>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const works = await getWorks()
    return { props: { works } }
}
