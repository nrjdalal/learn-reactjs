import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className="flex flex-col items-center font-mono">
        <h4 className="pb-4">useState</h4>

        <Link href="/useState/01">
          <a className="pb-2">change the text field</a>
        </Link>
        <br />
        <Link href="/useState/02">
          <a className="pb-2">add or remove the array items</a>
        </Link>
        <br />
        <Link href="/useState/03">
          <a className="pb-2">change property of an object</a>
        </Link>
        <br />
        <Link href="/useState/04">
          <a className="pb-2">implement basic / timeout based counter</a>
        </Link>
        <br />
      </div>
    </>
  )
}

export default index
