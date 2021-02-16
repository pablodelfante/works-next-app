import Layout from '../components/template';
import Portada from '../components/portada';
import About from '../components/about';
import { CONTENT_PORTADA } from '../utils/contentPortada';

export default function Home() {
  const { titlePortada, iconPortada, contentPortada } = CONTENT_PORTADA.index;

  return (
    <>
      <Layout>
        <Portada titlePortada={titlePortada} iconoPortada={iconPortada} contentPortada={contentPortada} />
        <About></About>
      </Layout>
    </>
  )
}
