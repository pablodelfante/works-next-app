import Layout from "../components/template";
import Portada from "../components/portada";
import { getWorks } from '../connectors/findWorks';
import Link from 'next/link';
import { CONTENT_PORTADA } from '../utils/contentPortada';
import moment from 'moment';


export default function Portfolio({ works }) {
    const { titlePortada, iconPortada, contentPortada } = CONTENT_PORTADA.portfolio;

    //fecha local
    const fecha = moment(works.published_at).locale('es').format('LL');

    return (
        <Layout>
            <Portada titlePortada={titlePortada} iconoPortada={iconPortada} contentPortada={contentPortada} />

            <ul className='container max-w-lg md:w-8/12'>
                {works.map((work) => (
                    <Link href={`/portfolio/${work._id}`} key={work._id}>
                        <a>
                            <li className='mb-10 border border-t-0 border-r-0 md:p-8'>
                                <h3>{work.title}</h3>
                                <p className='whitespace-pre overflow-ellipsis overflow-hidden'>{work.description}</p>
                                <time dateTime={fecha}>Publicado: {fecha}
                                
                                </time>
                            </li>
                        </a>
                    </Link>


                ))}
            </ul>


        </Layout>
    )
}

export async function getStaticProps(context) {

    // getWorks(query); la query es opcional
    const res = await getWorks();
    const works = await JSON.parse(JSON.stringify(res));
    return {
        props: {
            works
        }
    }
}