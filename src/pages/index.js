import Layout from 'components/template'
import TitlePage from 'components/titlePage'
import AboutSite from 'components/aboutSite'
import AboutMe from 'components/aboutMe'
import { CONTENT_PORTADA } from 'utils/dataSite'
import Head from 'next/head'
import { getWorks } from 'connectors/findWorks'

export default function Home() {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.index
    // getWorks()
    return (
        <>
            <Head>
                <title>pablodelfante</title>
            </Head>
            <Layout>
                <TitlePage title={titlePortada} content={contentPortada} />
                <div className="border-t"></div>
                <AboutSite />
                <AboutMe />
            </Layout>
        </>
    )
}
