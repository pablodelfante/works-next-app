import Layout from "components/template";
import TitlePage from "components/titlePage";
import { getWorks, getWorksV2 } from 'connectors/findWorks';
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
                        <Link href={`/portfolio/${work.id}`} key={work.id}>
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
    const works = await getWorksV2();
    if (works) {
        return {
            props: {
                works
            }
        }
    } else {
        // regreso un objeto res como nullo
        return { props: { works } }
    }
}