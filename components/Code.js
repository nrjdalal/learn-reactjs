import { useEffect } from 'react'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

/*
import CodeJavascript from '../../components/Code.js'
<CodeJavascript>
        {`

        `}
</CodeJavascript>
*/

const CodeJavascript = (props) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <br />
      <br />
      <div className="bg-[#0d1117] p-4 overflow-x-scroll rounded-xl">
        <pre>
          <code>{props.children}</code>
        </pre>
      </div>
    </>
  )
}

export default CodeJavascript
