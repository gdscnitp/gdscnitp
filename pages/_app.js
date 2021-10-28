import '../styles/globals.css'
import {useEffect} from "react";
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyle = document.querySelector('#jss-server-side');
    if(jssStyles)
    {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    // return () => {
    //   cleanup
    // }
  }, [])
  return <Component {...pageProps} />
}
export default MyApp
