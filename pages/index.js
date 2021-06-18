import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className="font-mono text-sm">
        <h4 className="pb-4">useState</h4>

        <ul>
          <li>
            <Link href="/useState/01">
              <a>change the text field</a>
            </Link>
          </li>
          <li>
            <Link href="/useState/02">
              <a>add or remove the array items</a>
            </Link>
          </li>
          <li>
            <Link href="/useState/03">
              <a>change property of an object</a>
            </Link>
          </li>
          <li>
            <Link href="/useState/04">
              <a>implement basic / timeout based counter</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default index
