import request from 'superagent'
import { Member } from '../common/member'

export function getGreeting(): Promise<string> {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getAllMembers(): Promise<Member> {
  return request.get('/').then((res) => res.body)
}
