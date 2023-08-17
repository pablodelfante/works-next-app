import Head from 'next/head'
import Layout from 'components/template'
import Container from 'components/layouts/Container'
import { getWorks } from 'connectors/findWorks'
import Works from 'components/Works'
import WhoIam from 'components/pages/home/aboutMe/WhoIam'
import Projections from 'components/pages/home/aboutMe/Projections'
import Header from 'components/pages/home/Header'

export default async function Home() {
    const works = await getWorks()
    const worksHighlighted = works.filter((work) => work.highlighted)
    return (
        <>
            <Head>
                <title>Pablo Delfante</title>
            </Head>
            <Layout>
                <section>
                    <Container>
                        <Header />
                    </Container>
                </section>

                <section className="bg-slate-50 dark:bg-slate-800 py-40">
                    <Container>
                        <h3 className="m-auto w-max mb-16">Highlighted works</h3>
                        <ul className="grid grid-flow-row md:grid-flow-col gap-2">{worksHighlighted && <Works works={worksHighlighted} />}</ul>
                    </Container>
                </section>

                <section className="py-40">
                    <Container>
                        <WhoIam />
                    </Container>
                </section>

                <section className="bg-slate-50 dark:bg-slate-800 py-40">
                    <Container>
                        <Projections />
                    </Container>
                </section>
            </Layout>
        </>
    )
}
