import "tailwindcss/tailwind.css";
import 'styles/globals.scss'
import DarkProvider from 'contexts/darkMode/DarkProvider';
import GAnalytics from "components/GAnalytics";

function MyApp({ Component, pageProps }) {
  return <>

    {/* <GAnalytics/> alone in production enviroment */}
    {process.env.NODE_ENV === 'production' && <GAnalytics />}

    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>
  </>
}

export default MyApp
