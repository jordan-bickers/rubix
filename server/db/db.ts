import connection from './connection'
import { Member } from '../../common/member'

export function getAllMembers(db = connection): Promise<Member[]> {
  return db('members').select()
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

export function deleteMember(id: number, db = connection): Promise<number> {
  return db('members').del().where('id', id)
}

export function updateMember(
  id: number,
  updatedMember: Member,
  db = connection
): Promise<Member[]> {
  return db('members')
    .update({ ...updatedMember }, ['id', 'name', 'group'])
    .where('id', id)
}
