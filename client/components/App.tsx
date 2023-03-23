import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import NumGroups from './NumGroups'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Result from './Result'

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
      <Routes>
        <Route path="/" element={<NumGroups groupos={dataSetter} />}></Route>
        <Route
          path="/result"
          element={<Result numGroups={group} numIters={iterations} />}
        ></Route>
      </Routes>
    </>
  )
}

export default App
