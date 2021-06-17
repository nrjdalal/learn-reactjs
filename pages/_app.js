import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-12">
      <div className="pb-6">
        <Link href="/">
          <a className="font-bold italic text-blue-500">HOME</a>
        </Link>
      </div>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
