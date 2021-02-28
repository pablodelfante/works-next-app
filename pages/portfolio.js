import Layout from "../components/template";
import Portada from "../components/portada";
import { getWorks } from '../connectors/findWorks';
import Link from 'next/link';
import { CONTENT_PORTADA } from '../utils/contentPortada';
import moment from 'moment';


export default function Portfolio({ works }) {
    const { titlePortada, iconPortada, contentPortada } = CONTENT_PORTADA.portfolio;

    //fecha local
    const fecha = moment(works?.published_at).locale('es').format('LL');
console.log(works)
    return (
        <Layout>
            <Portada titlePortada={titlePortada} iconoPortada={iconPortada} contentPortada={contentPortada} />

            <ul className='container w-screen max-w-lg'>
                {/* si no hay works */}
                {!works?<em>UPS! no se encontraron trabajos =(</em>:''}
                {works?.map((work) => (
                    <Link href={`/portfolio/${work._id}`} key={work._id}>
                        <a>
                            <li className='mb-10 border-b md:p-8'>
                                <h3>{work.title}</h3>
                                <p className='whitespace-pre overflow-ellipsis overflow-hidden'>{work.description}</p>
                                <time dateTime={fecha} className='text-gray-500 block mb-2 font-light'>Publicado: {fecha}</time>
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
    if (res) {
        const works = await JSON.parse(JSON.stringify(res));
        return {
            props: {
                works
            }
        }
    } else {
        // regreso un objeto res como nullo
        const works = {res}
        return {props: works}
    }

}