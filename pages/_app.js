import "tailwindcss/tailwind.css";
import 'styles/globals.scss'
import DarkProvider from 'contexts/darkMode/DarkProvider';
import GAnalytics from "components/GAnalytics";

function MyApp({ Component, pageProps }) {
  // check Google analytics
  /* if (process.env.NODE_ENV === 'production') {
    console.log('>>>Proyect is on production enviroment')
  } */
  console.log(process.env.NODE_ENV)
  return <>

    {/* <GAnalytics/> alone in production enviroment */}
    {(process.env.NODE_ENV === 'production') && <GAnalytics />}
    
    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>
  </>
}

export default MyApp
