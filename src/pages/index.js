import Head from 'next/head'
import Layout from 'components/template'
import TitlePage from 'components/titlePage'
import AboutSite from 'components/aboutSite'
import AboutMe from 'components/aboutMe'
import { CONTENT_PORTADA } from 'utils/dataSite'
import Terminal from "components/Terminal";
import Intro from "components/template/Intro";

export default function Home() {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.index
    return (
        <>
            <Head>
                <title>pablodelfante</title>
            </Head>
            <Layout>
                <Intro>
                    <div>
                        <h1 className='font-bold text-9xl'>Hi</h1>
                        <h2 className='font-bold text-7xl text-primary'>Welcome!</h2>
                        <Terminal init="hello">In this section I have some works that I would like to share with you!</Terminal>
                    </div>
                    <div>
                        side content
                    </div>
                </Intro>
                <AboutMe />
                <AboutSite />
            </Layout>
        </>
    )
}
