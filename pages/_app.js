import "tailwindcss/tailwind.css";
import '../styles/globals.scss'
import DarkProvider from '../contexts/darkMode/DarkProvider';

function MyApp({ Component, pageProps }) {
  return <>
    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>
  </>
}

export default MyApp
