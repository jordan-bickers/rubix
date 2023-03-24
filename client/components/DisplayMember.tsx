import { Member } from '../../common/member'

interface Props {
  member: Member
}

function DisplayMember({ member }: Props) {
  return (
    <>
      <p key={member.id}>
        {member.name}, ID: {member.id}
      </p>
    </>
  )
}

export default DisplayMember
