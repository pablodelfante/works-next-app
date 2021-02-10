import Layout from "../components/template";
import Portada from "../components/portada";
import { getWorks } from '../connectors/findWorks';
import Link from 'next/link';

export default function Portfolio({ works }) {

    // --- valores para la portada ---
    const titlePortada = `Pasa pasa!`;
    const iconPortada = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>;
    const contentPortada = `Esta es mi seeción donde tengo algunos laburos que aprecio mucho y quiero compartirlos con vos!`;
    // ----------------------------


    return (
        <Layout>
            <Portada titlePortada={titlePortada} iconoPortada={iconPortada} contentPortada={contentPortada} />

            <ul>
                {works.map((work) => (
                    <Link href={`/portfolio/${work._id}`}>
                        <a>
                            <li key={work._id} className='mb-10'>
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                                <time dateTime={work.published_at}>Publicado: {work.published_at}</time>
                                <hr />
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
    const works = await JSON.parse(JSON.stringify(res.data));
    return {
        props: {
            works
        }
    }
}