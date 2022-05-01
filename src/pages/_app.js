import "tailwindcss/tailwind.css";
import 'styles/globals.css'
import DarkProvider from 'contexts/darkMode/DarkProvider';
import GAnalytics from "components/GAnalytics";

function MyApp({ Component, pageProps }) {
  // check Google analytics
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    console.log('>>>NEXT_PUBLIC_VERCEL_ENV is on production enviroment')
  }
  /* console.log("VERCEL_ENV",process.env.VERCEL_ENV)
  console.log("NEXT_PUBLIC_VERCEL_ENV",process.env.NEXT_PUBLIC_VERCEL_ENV) */
  return <>

    {/* <GAnalytics/> alone in production enviroment */}
    {(process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') && <GAnalytics />}
    
    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>
  </>
}

export default MyApp
