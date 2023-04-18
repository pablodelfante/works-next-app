import Head from 'next/head'
import Layout from 'components/template'
import TitlePage from 'components/titlePage'
import AboutSite from 'components/aboutSite'
import AboutMe from 'components/aboutMe'
import { CONTENT_PORTADA } from 'utils/dataSite'
import Terminal from 'components/Terminal'
import Intro from 'components/template/Intro'
import BlobV2 from 'components/BlobV2'

export default function Home() {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.index

    return (
        <>
            <Head>
                <title>pablodelfante</title>
            </Head>
            <Layout>
                <Intro>
                    <div className="grid gap-4">
                        <h1 className="font-bold text-9xl">Hi</h1>
                        <h2 className="font-bold text-7xl text-primary dark:text-primary">
                            Welcome!
                        </h2>
                        <Terminal init="hello">
                            In this section I have some works that I would like
                            to share with you!
                        </Terminal>
                    </div>
                    <div className="grid">
                        <div className="grid justify-center col-span-full row-span-full">
                            <BlobV2
                                blobConfig={{ color: 'hwb(243deg 30% 1%)' }}
                                canvasStyles={{ width: '300px' }}
                            />
                        </div>
                        <figure className="grid justify-center col-span-full row-span-full w-48">
                            <img
                                className="w-60"
                                src="/img/home/serious.png"
                                alt=""
                            />
                        </figure>
                    </div>
                </Intro>
                {/* <AboutMe /> */}
                <AboutSite />
            </Layout>
        </>
    )
}
