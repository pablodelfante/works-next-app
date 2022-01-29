import Layout from "components/template";
import Portada from "components/portada";
import { getWorks } from 'connectors/findWorks';
import Link from 'next/link';
import { CONTENT_PORTADA } from 'utils/contentPortada';

import Head from "next/head";
import Card from "components/Card";

export default function Portfolio({ works }) {
    const { titlePortada, iconPortada, contentPortada } = CONTENT_PORTADA.portfolio;


    return (
        <>
            <Head>
                <title>portfolio | pablodelfante</title>
            </Head>
            <Layout>
                <Portada titlePortada={titlePortada} contentPortada={contentPortada} />

                <ul className='container grid grid-cols-1 xl:grid-cols-2 gap-10'>
                    {/* si no hay works */}
                    {!works ? <p>UPS! no se encontraron trabajos, seguramente estoy en mantenimiento o dejé algo mal, disculpa =(</p> : ''}
                    {works?.map((work) => (
                        <Link href={`/portfolio/${work._id}`} key={work._id}>
                            <a>
                                <Card {...{work}} />
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