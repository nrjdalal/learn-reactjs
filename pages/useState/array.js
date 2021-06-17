import React from 'react'
import CodeJavascript from '../../components/Code.js'

const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
]

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button onClick={() => setPeople([])} className="mt-4">
        clear items
      </button>
      <CodeJavascript>
        {`
import React from 'react'

const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
]

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
        `}
      </CodeJavascript>
    </>
  )
}

export default UseStateArray
