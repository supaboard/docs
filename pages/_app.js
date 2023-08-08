import '@/styles/globals.css'
import {HeroPattern} from "../components/HeroPattern"



export default function App({ Component, pageProps }) {
    return (
        <>
            <HeroPattern className="h-64 w-full" />
            <Component {...pageProps} />
        </>
    )
}
