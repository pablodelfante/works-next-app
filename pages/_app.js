import "tailwindcss/tailwind.css";
import '../styles/globals.scss'
import DarkState from '../contexts/darkMode/DarkState';

function MyApp({ Component, pageProps }) {
  return <>
    <DarkState>
      <Component {...pageProps} />
    </DarkState>
  </>
}

export default MyApp
