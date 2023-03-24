import { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient'
import Form from './Form'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Result from './Result'
import AddMember from './AddMember'

const App = () => {
  // const [greeting, setGreeting] = useState('')
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
    // getGreeting()
    //   .then((greeting) => {
    //     console.log(greeting)
    //     setGreeting(greeting)
    //     setIsError(false)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     setIsError(true)
    //   })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Form groupos={dataSetter} />}></Route>
        <Route
          path="/result"
          element={<Result numGroups={group} numIters={iterations} />}
        ></Route>
        <Route path="/add" element={<AddMember />} />
      </Routes>
      <footer>
        {/* <Link to="/">Home</Link>
        <Link to="/add">Add Member</Link> */}
      </footer>
    </>
  )
}

export default App
