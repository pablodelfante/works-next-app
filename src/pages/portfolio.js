import Layout from 'components/template'
import TitlePage from 'components/titlePage'
import { getWorks } from 'connectors/findWorks'
import { CONTENT_PORTADA } from 'utils/dataSite'
import Head from 'next/head'
import Works from 'components/Works'
import Container from 'components/layouts/Container'

export default function Portfolio({ works }) {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.portfolio
    return (
        <>
            <Head>
                <title>portfolio | pablodelfante</title>
            </Head>
            <Layout>
                <Container>
                    <TitlePage title={titlePortada} content={contentPortada} />
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
