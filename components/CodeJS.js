import { useEffect } from 'react'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const CodeJS = (props) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <div className="bg-[#0d1117] mt-8 overflow-x-scroll p-4 rounded-xl">
        <pre>
          <code>{props.children}</code>
        </pre>
      </div>
    </>
  )
}

export default CodeJS
