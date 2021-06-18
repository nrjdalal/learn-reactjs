import React, { useState } from 'react'
import CodeJS from '../../components/CodeJS'

const Snippet = () => {
  const [text, setText] = useState('press the button')

  const handleClick = () => {
    if (text === 'press the button') {
      setText('press the button again')
    } else {
      setText('press the button')
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h4>{text}</h4>
        <button className="mt-4 text-white" onClick={handleClick}>
          button
        </button>
      </div>
      <CodeJS>
        {`
import React, { useState } from 'react'

const Snippet = () => {
  const [text, setText] = useState('press the button')

  const handleClick = () => {
    if (text === 'press the button') {
      setText('press the button again')
    } else {
      setText('press the button')
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h4>{text}</h4>
        <button className="mt-4 text-white" onClick={handleClick}>
          button text
        </button>
      </div>
    </>
  )
}

export default Snippet
        `}
      </CodeJS>
    </>
  )
}

export default Snippet
