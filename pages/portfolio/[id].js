import Layout from '../../components/template';
import { getWorks } from '../../connectors/findWorks';
import moment from 'moment';
//const fecha = moment(work.createdAt).locale('es').format('LLL');// 11 de febrero de 2021 20:47
import style from './id.module.scss'

import Markdown from 'markdown-to-jsx';

export default function Work({ work }) {

    const { title, description, content, tecnologies, url_github, url_deploy, url_image, updatedAt, image } = work;
    const dateUpdate = moment(updatedAt).locale('es').format('LLL');


    return (
        <Layout>
            <article className='py-14'>
                {/* Titulo descripcion e imagen */}
                <h2 className='mb-5'>{title}</h2>
                <time className='text-gray-500 block mb-2 font-light border-b'>Actualizado: {dateUpdate}</time>
                <p className='mb-5'>{description}</p>
                <img src={url_image ? url_image : image ? image.url : 'null'} alt='<- articulo sin imagen'></img>

                {/* MARKDOWN */}
                <Markdown className={style.markdown}>
                    {content}
                </Markdown>

                {/* Tecnologias*/}
                <h4 className='mb-5'>Tecnologías usadas</h4>
                <ul className='list-disc mb-10'>
                    {tecnologies.map((tecnologie, key) => (
                        <li key={key}>{tecnologie}</li>
                    ))}
                </ul>

                {/* Link github */}
                <a href={url_github} target="_blank" className='underline'>LINK github</a>
                <br />
                <br />

                {/* Link deploy */}
                {url_deploy ? (<a href={url_deploy} target="_blank" className='underline'>LINK deploy</a>) : ''}



            </article>
        </Layout>
    )
}

export async function getStaticPaths() {

    const works = await getWorks();

    // obtener las id para pre renderizar
    // retorna un array que contienen objetos asi: {params: {id: id}}
    const paths = works?.map((work) => ({
        params: { id: work?.id },
    }))

    // aqui es obligatorio retornar paths y fallback
    //paths aqui por estar dentro de {} se transforma a paths:[a,b,c...]
    if (paths) {
        return {
            paths, fallback: false
        }
    } else {
        return {
            paths: [], fallback: false
        }
    }
}//fin obtencion de id's

export async function getStaticProps({ params }) {

    const { id } = params;
    // getWorks(query); la query es opcional
    const res = await getWorks(id);
    const work = await JSON.parse(JSON.stringify(res));


    // aca props es requerido retornar
    return {
        props: { work }
    }
}//fin get static props