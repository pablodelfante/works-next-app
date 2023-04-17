import Layout from 'components/template'
import TitlePage from 'components/titlePage'
import AboutSite from 'components/aboutSite'
import AboutMe from 'components/aboutMe'
import { CONTENT_PORTADA } from 'utils/dataSite'
import Head from 'next/head'

export default function Home() {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.index
    return (
        <>
            <Head>
                <title>pablodelfante</title>
            </Head>
            <Layout>
                <TitlePage title={titlePortada} content={contentPortada} />
                <AboutMe />
                <AboutSite />
            </Layout>
        </>
    )
}
