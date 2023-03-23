import connection from './connection'
// Routes + Interfaces go here
import { Member } from '../../common/member'

export function getAllMembers(db = connection): Promise<Member[]> {
  return db('members').select('*')
}
