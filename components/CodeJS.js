import { useEffect } from 'react'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const CodeJS = (props) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <pre className="bg-[#0d1117] mt-8 rounded-xl">
        <code>{props.children}</code>
      </pre>
    </>
  )
}

export default CodeJS
