import Layout from "../components/template";
import Portada from "../components/portada";
import { getWorks } from '../connectors/findWorks';
import Link from 'next/link';
import { CONTENT_PORTADA } from '../utils/contentPortada';
import Image from 'next/image';
import formatDate from './../helpers/formatDate';


export default function Portfolio({ works }) {
    const { titlePortada, iconPortada, contentPortada } = CONTENT_PORTADA.portfolio;


    return (
        <Layout>
            <Portada titlePortada={titlePortada} iconoPortada={iconPortada} contentPortada={contentPortada} />

            <ul className='container grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* si no hay works */}
                {!works ? <em>UPS! no se encontraron trabajos, seguramente estoy en mantenimiento o dejé algo mal, disculpa =(</em> : ''}
                {works?.map((work) => (
                    <Link href={`/portfolio/${work._id}`} key={work._id}>
                        <a className='md:py-8 rounded lg:shadow-md lg:hover:shadow-xl transition-shadow duration-300'>
                            <li>
                                {/* agregar imagen aca */}
                                <div className='mb-5 opacity-90'>
                                    <Image
                                        src={work?.image ? work.image.formats.medium.url : 'https://blog.aulaformativa.com/wp-content/uploads/2016/08/ventajas-optimizacion-de-codigo-codigo-fuente-limpio.jpg'}
                                        alt=''
                                        layout='responsive'
                                        objectFit="cover"
                                        objectPosition='top'
                                        // 16/9 es el formato de origen de la imagen
                                        width={3}
                                        height={1}
                                        quality={100}
                                    />
                                </div>
                                {/* work.image.formats.small.url */}
                                {/* ------- */}
                                <div className='md:px-8'>
                                    <h3 className='line-clamp-1'> {work?.title} </h3>
                                    <time dateTime={work?.updatedAt} className='text-gray-500 block mb-2 font-light'>Actualizado: {formatDate(work?.updatedAt)}</time>
                                    <p className='line-clamp-3'>{work?.description}</p>
                                </div>
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
    // console.log(res)
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