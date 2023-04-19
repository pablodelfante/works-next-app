import Head from 'next/head'
import Layout from 'components/template'
import TitlePage from 'components/titlePage'
import AboutSite from 'components/aboutSite'
import AboutMe from 'components/aboutMe'
import { CONTENT_PORTADA } from 'utils/dataSite'
import Terminal from 'components/Terminal'
import Intro from 'components/template/Intro'
import BlobV2 from 'components/BlobV2'
import Container from 'components/layouts/Container'

export default function Home() {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.index

    return (
        <>
            <Head>
                <title>pablodelfante</title>
            </Head>
            <Layout>
                <Container>
                    <Intro>
                        <div className="grid gap-4 pb-16">
                            <h1 className="font-bold text-9xl">Hi</h1>
                            <h2 className="font-bold text-7xl text-primary dark:text-primary">
                                Welcome!
                            </h2>
                            <Terminal init="hello">
                                In this section I have some works that I would
                                like to share with you!
                            </Terminal>
                        </div>
                        <div className="hidden lg:grid">
                            <div className="grid justify-center col-span-full row-span-full">
                                <BlobV2
                                    blobConfig={{ color: 'hwb(243deg 30% 1%)' }}
                                    canvasStyles={{ width: '400px' }}
                                />
                            </div>
                            <figure className="grid justify-center items-end col-span-full row-span-full">
                                <img
                                    className="w-80 drop-shadow-[0_0px_40px_rgba(0,0,0,0.30)]"
                                    src="/img/home/serious.png"
                                    alt=""
                                />
                            </figure>
                        </div>
                    </Intro>
                </Container>

                <div className="bg-primary py-16">
                    <Container>
                        <AboutSite />
                    </Container>
                </div>
            </Layout>
        </>
    )
}
