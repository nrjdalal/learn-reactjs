import Link from 'next/link'

const index = () => {
  return (
    <>
      <h1>useState</h1>

      <Link href="/useState/01">
        <a className="pl-7 font-mono">change the text field</a>
      </Link>
      <br />
      <Link href="/useState/02">
        <a className="pl-7 font-mono">add or remove the array items</a>
      </Link>
      <br />
      <Link href="/useState/03">
        <a className="pl-7 font-mono">change property of an object</a>
      </Link>
      <br />
      <Link href="/useState/04">
        <a className="pl-7 font-mono">implement basic / timeout based counter</a>
      </Link>
      <br />
    </>
  )
}

export default index
