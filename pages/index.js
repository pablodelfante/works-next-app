import Layout from '../components/template';
import Portada from '../components/portada';
import About from '../components/about';
import Technologies from '../components/technologies';
import { CONTENT_PORTADA } from '../utils/contentPortada';
import Head from "next/head";

export default function Home() {
  const { titlePortada, iconPortada, contentPortada } = CONTENT_PORTADA.index;

  return (
    <>
    <Head>
           <title>pablodelfante | blog</title>
    </Head>
      <Layout>
        <Portada titlePortada={titlePortada} iconoPortada={iconPortada} contentPortada={contentPortada} />
        <hr />
        <About />
        <Technologies />
      </Layout>
    </>
  )
}
