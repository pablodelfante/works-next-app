import Head from 'next/head'
import Image from 'next/image'
import Layout from 'components/template'
import Terminal from 'components/Terminal'
import Intro from 'components/template/Intro'
import BlobV2 from 'components/BlobV2'
import Container from 'components/layouts/Container'
import { getWorks } from 'connectors/findWorks'
import Works from 'components/Works'
import WhoIam from 'components/pages/home/aboutMe/WhoIam'
import Projections from 'components/pages/home/aboutMe/Projections'
import TypeAnimation from 'components/TypeAnimation'

export default async function Home() {
    const works = await getWorks()
    const worksHighlighted = works.filter((work) => work.highlighted)
    const sectionPadding = 'py-40'
    const sectionColorizedClass = `bg-slate-50 dark:bg-slate-800 [ ${sectionPadding} ]`
    return (
        <>
            <Head>
                <title>Pablo Delfante</title>
            </Head>
            <Layout>
                <section>
                    <Container>
                        <Intro>
                            <div className="grid gap-4 pb-16">
                                <h1 className="font-bold text-[10rem]">Hi</h1>
                                <TypeAnimation
                                    className="font-bold text-primary text-4xl md:text-5xl xl:text-6xl dark:text-primary"
                                    sequence={['Welcome!', 2500, 'new Wel...', 1000, 'new Welcome();', 1000, '<Welcome/>', 1500]}
                                    wrapper="h2"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                                <div className="md:w-[24em]">
                                    <Terminal init="hello">In this section I have some works that I would like to share with you!</Terminal>
                                </div>
                            </div>
                            <div className="hidden lg:grid">
                                <div className="grid justify-center col-span-full row-span-full">
                                    <BlobV2
                                        blobConfig={{
                                            color: 'hwb(243deg 30% 1%)',
                                        }}
                                        canvasStyles={{ width: '400px' }}
                                    />
                                </div>
                                <figure className="[ figure-home ] grid justify-center items-end col-span-full row-span-full">
                                    <Image
                                        src="/img/home/[removed_ai]serious.png"
                                        alt="image on home page"
                                        width={350}
                                        height={600}
                                        priority={true}
                                        quality={100}
                                        className="drop-shadow-[0_0px_40px_rgba(0,0,0,0.30)]"
                                    />
                                </figure>
                            </div>
                        </Intro>
                    </Container>
                </section>

                <section className={`${sectionColorizedClass}`}>
                    <Container>
                        <h3 className="m-auto w-max mb-16">Highlighted works</h3>
                        <ul className="grid grid-flow-row md:grid-flow-col gap-2">{worksHighlighted && <Works works={worksHighlighted} />}</ul>
                    </Container>
                </section>

                <section className={sectionPadding}>
                    <Container>
                        <WhoIam />
                    </Container>
                </section>

                <section className={`${sectionColorizedClass}`}>
                    <Container>
                        <Projections />
                    </Container>
                </section>
            </Layout>
        </>
    )
}
