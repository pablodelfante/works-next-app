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
import { getWorks } from 'connectors/findWorks'
import Works from 'components/Works'

export default function Home({works}) {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.index

    const worksHighlightedReduced = works.filter((work) => work.highlighted).slice(0,2)
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
                            <h2 className="font-bold text-6xl md:text-7xl text-primary dark:text-primary">
                                Welcome!
                            </h2>
                            <div className='md:w-[24em]'>
                                <Terminal init="hello">
                                    In this section I have some works that I would
                                    like to share with you!
                                </Terminal>
                            </div>
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

                <div className="bg-primary/10 py-16">
                    <Container>
                        <h3 className='m-auto w-max mb-16'>Highlighted works</h3>
                        <ul className='grid grid-flow-row md:grid-flow-col gap-2'>
                        {worksHighlightedReduced && <Works works={worksHighlightedReduced} />}
                        </ul>
                    </Container>
                </div>


                <div className="bg-primary py-16">
                    <Container>
                   
                    </Container>
                </div>
                        {/* <AboutSite /> */}
            </Layout>
        </>
    )
}

// get all the posts
export async function getStaticProps() {
    // const works = await getWorks()
    const works = []
    return { props: { works } }
}
