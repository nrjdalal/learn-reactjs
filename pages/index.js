import Link from 'next/link'

const index = () => {
  return (
    <>
      <h1 className="font-mono">useState</h1>

      <Link href="/useState/basics">
        <a className="pl-7 font-mono">basics</a>
      </Link>
      <br />
      <Link href="/useState/array">
        <a className="pl-7 font-mono">array</a>
      </Link>
      <br />
      <Link href="/useState/object">
        <a className="pl-7 font-mono">object</a>
      </Link>
      <br />
      <Link href="/useState/counter">
        <a className="pl-7 font-mono">counter</a>
      </Link>
      <br />
    </>
  )
}

export default index
