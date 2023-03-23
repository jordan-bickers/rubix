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

export function addMember(member: Member): Promise<Member> {
  return request
    .post(`${serverURL}`)
    .send(member)
    .then((res) => {
      return res.body
    })
}

export function deleteMember(memberId: number): Promise<unknown> {
  return request.del(`${serverURL}/${memberId}`).then((res) => res)
}

export function updateMember(
  id: number,
  updatedMember: Member
): Promise<Member> {
  return request
    .patch(`${serverURL}/${id}`)
    .send({ updatedMember })
    .then((res) => {
      return res.body
    })
  // .catch(errorHandler('PATCH', '/v1/comments/:id'))
}

// function errorHandler(method: string, route: string) {
//   return (err: Error) => {
//     if (err.message === 'Not Found') {
//       throw Error(
//         `Error: You need to implement an API route for ${method} ${route}`
//       )
//     } else {
//       throw Error(`${err.message} on ${method} ${route}`)
//     }
//   }
// }
