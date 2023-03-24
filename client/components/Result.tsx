import { useState } from 'react'
import { getAllMembers } from '../apiClient'
import { Member } from '../../common/member'
import createRandomizedGroups from '../sorting-algorithm'
import Iteration from './Iteration'

interface Props {
  numGroups: number
  numIters: number
  members: Member[]
}

function Result({ numGroups, numIters, members }: Props) {
  const [groups, setGroups] = useState(0)

  const result = createRandomizedGroups(members, numGroups, numIters)
  //result is an array of iteration arrays which each hold arrays with all the groups

  return (
    <>
      {result.map((iteration, indexIt) => {
        return <Iteration key={indexIt} iteration={iteration} index={indexIt} />
      })}
    </>
  )
}

export default Result
