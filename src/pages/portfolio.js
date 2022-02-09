import Layout from "components/template";
import TitlePage from "components/titlePage";
import { getWorks } from 'connectors/findWorks';
import Link from 'next/link';
import { CONTENT_PORTADA } from 'utils/dataSite';

import Head from "next/head";
import Card from "components/Card";

export default function Portfolio({ works }) {
    const { titlePortada, contentPortada } = CONTENT_PORTADA.portfolio;
    return (
        <>
            <Head>
                <title>portfolio | pablodelfante</title>
            </Head>
            <Layout>
                <TitlePage title={titlePortada} content={contentPortada} />

                <ul className='my-20 lg:my-40 grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch'>
                    {/* si no hay works */}
                    {!works ? <p>oops! I don't find works, sure i am on maintenance or break something, sorry😥. If yu can write me! pablodelfantexp@gmail.com</p> : ''}
                    {works?.map((work, index) => (
                        <Link href={`/portfolio/${work._id}`} key={work._id}>
                            <a className="grid">
                                <Card {...{ work, index }} />
                            </a>
                        </Link>


                    ))}
                </ul>


            </Layout>
        </>
    )
}

export async function getStaticProps(context) {

    // getWorks(query); la query es opcional
    const res = await getWorks();
    if (res) {
        const works = await JSON.parse(JSON.stringify(res));
        return {
            props: {
                works
            }
        }
    } else {
        // regreso un objeto res como nullo
        const works = { res }
        return { props: works }
    }

}