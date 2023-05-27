import { useStore } from '@/components/store'
import { GlobalStyle } from '@/const'
import { AppProps } from 'next/app'
import './sanitize.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const isDarkMode = useStore((state) => state.isDarkMode)

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Component {...pageProps} />
    </>
  )
}
