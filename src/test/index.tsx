import React from 'react'
import { useMount, useArray } from '../utils'

const TsReactTest: React.FC = () => {
  const persons: { name: string; name: number }[] = [
    { name: 'jack', age: 25 },
    { name: 'ma', age: 22 },
  ]
  const { value, clear, removeIndex, add } = useArray(persons)
  useMount(() => {
    console.log('111')
  })
  return (
    <div>
      <button onClick={() => add({ name: 'join', age: 22 })}>add join</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()} style={{ marginBottom: '30px' }}>
        clears
      </button>
      {value.map((person, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <span style={{ color: 'red' }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  )
}

export default TsReactTest
