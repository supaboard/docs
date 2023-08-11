import '@/styles/globals.css'
import Head from 'next/head'
import { HeroPattern } from "../components/HeroPattern"



export default function App({ Component, pageProps }) {
    return (
        <>
          <Head>
              <title>Supaboard documentation</title>
              <meta property="og:site_name" content="Supaboard.co" />
              <meta property="og:locale" content="en_US" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://supaboard.co" />
              <meta property="og:title" content="Supaboard documentation" />
              <meta property="og:description" content="Create reporting dashboards on top of Supabase with ease" />
          </Head>
          <HeroPattern className="h-64 w-full" />
          <Component {...pageProps} />
      </>
  )
}
