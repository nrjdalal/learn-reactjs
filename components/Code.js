import { useEffect } from 'react'

import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

/*
import CodeJavascript from '../../components/Code.js'
<CodeJavascript>
        {`

        `}
</CodeJavascript>
*/

const CodeJavascript = (props) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <br />
      <br />
      <pre>
        <code className="language-javascript">{props.children}</code>
      </pre>
    </>
  )
}

export default CodeJavascript
