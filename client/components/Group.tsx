import { Member } from '../../common/member'

interface Props {
  group: Member[]
  index: number
}

function Group({ group, index }: Props) {
  return (
    <>
      <h3>Group {index + 1}:</h3>
      {group.map((member) => {
        return (
          <p key={member.id}>
            {member.name}, {member.id}
          </p>
        )
      })}
    </>
  )
}

export default Group
