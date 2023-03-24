import { Member } from '../../common/member'
import Group from './Group'

interface Props {
  iteration: Array<Member[]>
  index: number
}

function Iteration({ iteration, index }: Props) {
  return (
    <>
      <h2>Iteration {index + 1}</h2>
      {iteration.map((group, indexGr) => {
        return <Group key={index} group={group} index={indexGr} />
      })}
    </>
  )
}

export default Iteration
