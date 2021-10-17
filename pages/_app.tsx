import '../styles/globals.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ayu-mirage.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
