import Layout from 'components/template';
import TitlePage from 'components/titlePage';
import About from 'components/about';
import Technologies from 'components/technologies';
import { CONTENT_PORTADA } from 'utils/contentPortada';
import Head from "next/head";

export default function Home() {
  const { titlePortada, contentPortada } = CONTENT_PORTADA.index;

  return (
    <>
    <Head>
           <title>pablodelfante</title>
    </Head>
      <Layout>
        
        <TitlePage titlePortada={titlePortada} contentPortada={contentPortada} />
        <div className="border-t"></div>
        <About />
        <Technologies />
      </Layout>
    </>
  )
}
