import request from 'superagent'
import { response } from 'express'
import { Member, ExternalMember } from '../common/member'

const serverURL = 'http://localhost:3000/api/v1'
const externalURL = 'https://randomuser.me/api/'

export function getGreeting(): Promise<string> {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getAllMembers(): Promise<Member[]> {
  return request.get(`${serverURL}`).then((res) => res.body)
}

export function getRandomName(): Promise<ExternalMember> {
  return request
    .get(`${externalURL}`)
    .then((response) => response.body.results[0].name)
}
