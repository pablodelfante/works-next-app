import Layout from 'components/template'
import { getWorks } from 'connectors/findWorks'
import Head from 'next/head'
import Works from 'components/Works'
import Container from 'components/layouts/Container'
import BlobV2 from 'components/BlobV2'
import Terminal from 'components/Terminal'

export default async function Portfolio() {
    const works = await getWorks()
    return (
        <>
            <Head>
                <title>portfolio | Pablo Delfante</title>
            </Head>
            <Layout>
                <Container>
                    <section>
                        <section className="my-10 md:my-30 grid lg:grid-cols-[1.5fr_1fr] items-center">
                            <div className={`md:max-w-sm h-min`}>
                                <h1 className="text-primary dark:text-primary font-bold mb-4 lg:w-min text-6xl lg:text-8xl">Nice to see you!!</h1>
                                <Terminal init="portfolio">
                                    Hi!! welcome to my site! Here I'm going to tell you about me, about myself. Go ahead!
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
