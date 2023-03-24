import { Member as MemberType } from '../../common/member'
import DisplayMember from './DisplayMember'

interface Props {
  group: MemberType[]
  index: number
}

function Group({ group, index }: Props) {
  return (
    <>
      <h3>Group {index + 1}:</h3>
      {group.map((member) => {
        return <DisplayMember key={member.id} member={member} />
      })}
    </>
  )
}

export default Group
