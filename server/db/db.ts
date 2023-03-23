import connection from './connection'
import { Member } from '../../common/member'

export function getAllMembers(db = connection): Promise<Member[]> {
  return db('members').select('*')
}

export function addMember(
  newMember: Member,
  db = connection
): Promise<Member[]> {
  return db('members').insert(
    {
      ...newMember,
    },
    '*'
  )
}
