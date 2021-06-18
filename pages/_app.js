import Image from 'next/image'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-4 w-screen">
      <div className="flex justify-center mb-8">
        <Link href="/">
          <a>
            <Image alt="" src="/logo.svg" height="48" width="48" />
          </a>
        </Link>
      </div>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
