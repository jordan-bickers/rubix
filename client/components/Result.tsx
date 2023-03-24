import { useState } from 'react'
import { getAllMembers } from '../apiClient'
import { Member } from '../../common/member'
import createRandomizedGroups from '../sorting-algorithm'

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
        return iteration.map((group, indexGr) => {
          console.log(group)
          return group.map((memb) => {
            console.log(memb.id)
            return (
              <>
                <h2>Group: {indexGr + 1}</h2>
                <h3>Iteration: {indexIt + 1}</h3>
                <p>
                  {memb.id} {memb.name}
                </p>
              </>
            )
          })
        })
      })}
    </>
  )
}

export default Result
