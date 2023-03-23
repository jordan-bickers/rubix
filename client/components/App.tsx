import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import NumGroups from './NumGroups'

const App = () => {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  const [group, setGroup] = useState(0)
  const [iterations, setIterations] = useState(0)

  const dataSetter = (groups: number, iters: number): void => {
    setGroup(groups)
    setIterations(iters)
  }
  console.log('Groups', group)
  console.log('Iterations', iterations)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [])

  return (
    <>
      {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <NumGroups groupos={dataSetter} />

      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
