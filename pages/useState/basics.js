import React, { useState } from 'react'
import CodeJavascript from '../../components/Code.js'

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
      <CodeJavascript>
        {`
import React, { useState } from 'react'

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
        `}
      </CodeJavascript>
    </React.Fragment>
  )
}

export default UseStateBasics
