import { useState } from 'react'
import Form from './Form'
import { Route, Routes } from 'react-router-dom'
import Result from './Result'
import { Member } from '../../common/member'

const App = () => {
  const [group, setGroup] = useState(0)
  const [iterations, setIterations] = useState(0)
  const [members, setMembers] = useState([] as Member[])

  const dataSetter = (groups: number, iters: number, membs: Member[]): void => {
    setGroup(groups)
    setIterations(iters)
    setMembers(membs)
  }

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
      </Routes>
    </>
  )
}

export default App
