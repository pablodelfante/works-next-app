import Layout from 'components/template';
import { getWorks} from 'connectors/findWorks';
import Head from "next/head";
import style from './id.module.css'
import Image from 'next/image';
import formatDate from 'helpers/formatDate';

import Markdown from 'markdown-to-jsx';

export default function Work({ work: { attributes: work } }) {
    const { title, description, content, technologies, url_github, url_deploy, url_image, url_video, updatedAt, image } = work;
    const dateUpdate = formatDate(updatedAt);
    return (
        <>
            <Head>
                <title>{title} | pablodelfante</title>
            </Head>
            <Layout>
                <article className='py-14 max-w-5xl mx-auto'>
                    {/* Titulo descripcion e imagen */}
                    <h2 className='mb-5'>{title}</h2>
                    <time className='text-gray-500 block font-light border-b mb-10'>Updated at: {dateUpdate}</time>

                    {/* Tecnologias*/}
                    {/* <h4 className=''>Tecnologías usadas</h4> */}
                    <ul className='flex flex-wrap gap-x-3 mb-0.5'>
                        <li className="font-bold">Used technologies</li>
                        {technologies.map((tecnologie, key) => (
                            <li className="text-white text-xs font-medium truncate px-2 py-1 bg-gray-500 rounded-full" key={key}>{tecnologie}</li>
                        ))}
                    </ul>

                    {/* description of page */}
                    <p className='mb-5'>{description}</p>


                    {/* SI existe un video y la imagen está seteada, mostrame SOLO el video */}


                    {/* imagen */}
                    {!url_video ?  //si video no existe intenta mostrarme la imagen

                        // si una de las imagenes existe retornalas
                        (url_image || image) && (
                            <div className='mb-5'>
                                <Image
                                    src={url_image ? url_image : image ? image.data.attributes.url : 'null'}
                                    alt='sin imagen optimizada'
                                    priority={true}
                                    //define como se comporta en el layout
                                    layout="responsive"
                                    //como se comporta la imagen dentro de su propio contenedor
                                    objectFit='contain'
                                    //obligatorios, no hacen mucho cuando layouyt responsive
                                    //en este caso use 16:9 para darle cierta proporción
                                    width={16}
                                    height={9}
                                    quality={100}
                                />
                            </div>
                        )
                        : ''
                    }


                    {/* video */}
                    {url_video && (
                        // este posicionamiento y padding son para mantener la relacion aspecto del video (16/9)
                        <>
                            <div className="my-5" style={{ aspectRatio: "16/9" }}>
                                <iframe className="w-full h-full" src={url_video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <p className="text-sm">If you can't watch the video: <a className="underline text-primary" href={url_video} target="_blank">watch on youtube</a></p>
                        </>
                    )}


                    {/* MARKDOWN */}
                    {/* este es un campo extra cuando desee agregar contenido */}
                    <Markdown className={style.markdown}>
                        {content ? content : ''}
                    </Markdown>


                    {/* Link github */}
                    {url_github ? (<a href={url_github} target="_blank" rel="noopener" className='underline'>see project on github</a>) : ''}
                    <br />
                    <br />

                    {/* Link deploy */}
                    {url_deploy ? (<a href={url_deploy} target="_blank" rel="noopener" className='underline'>see deploy</a>) : ''}



                </article>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {

    // obtener works
    const works = await getWorks();

    // obtener las id para pre renderizar
    // retorna un array[] que contienen objetos asi: {params: {id: id}}
    const paths = works?.map((work) => ({
        params: { id: work?.id },
    }))

    // aqui es obligatorio retornar paths y fallback
    // paths aqui por estar dentro de {} se transforma a paths:[a,b,c...]
    if (paths) {
        return {
            paths, fallback: false
        }
    } else {
        return {
            paths: [], fallback: false
        }
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const work = await getWorks(id);
    return { props: { work } }
}