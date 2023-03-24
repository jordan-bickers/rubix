import { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient'
import Form from './Form'
import { Route, Routes } from 'react-router-dom'
import Result from './Result'
import AddMember from './AddMember'

const App = () => {
  // const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  const [group, setGroup] = useState(0)
  const [iterations, setIterations] = useState(0)
  const [members, setMembers] = useState([] as Member[])

  const dataSetter = (groups: number, iters: number, membs: Member[]): void => {
    setGroup(groups)
    setIterations(iters)
    setMembers(membs)
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
      <h1>RUBIX</h1>
      <Routes>
        <Route path="/" element={<Form groupos={dataSetter} />}></Route>
        <Route
          path="/result"
          element={
            <Result numGroups={group} numIters={iterations} members={members} />
          }
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
