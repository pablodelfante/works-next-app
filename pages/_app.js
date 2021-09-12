import "tailwindcss/tailwind.css";
import '../styles/globals.scss'
import DarkProvider from '../contexts/darkMode/DarkProvider';
import GAnalytics from "./../components/GAnalytics";

function MyApp({ Component, pageProps }) {
  return <>

    {/* === GOOGLE ANALYTICS ==== */}
    <GAnalytics/>
    {/* ======================= */}
    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>
  </>
}

export default MyApp
