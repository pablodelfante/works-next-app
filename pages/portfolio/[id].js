import Layout from '../../components/template';
import { getWorks } from '../../connectors/findWorks';

export default function Work({work}) {
    
    const {title, description, content, technologies, } = work;

    return (
        <Layout>
            <h2>{title}</h2>
            <em>{description}</em>
            <div>{content}</div>
            <ul>{technologies}</ul>
        </Layout>
    )
}

export async function getStaticPaths() {

    const response = await getWorks();
    const { data } = response;
    const works = data;

    // obtener las id para pre renderizar
    const paths = works.map((work) => ({
        params: { id: work.id },
    }))

    return {
        paths:
            paths, fallback: false
    }
}//fin obtencion de id's

export async function getStaticProps({ params }) {

    const {id} = params;
    // getWorks(query); la query es opcional
    const res = await getWorks(id);
    const work = await JSON.parse(JSON.stringify(res.data));
    console.log(work)
    return {
        props: {work}
    }
}//fin get static props