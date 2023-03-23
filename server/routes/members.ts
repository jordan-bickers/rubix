import { Router } from 'express'
const router = Router()

import { getAllMembers, addMember } from '../db/db'
// import { Member } from '../../common/member'

router.get('/', (req, res) => {
  getAllMembers()
    .then((members) => {
      res.json(members)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

router.post('/', (req, res) => {
  addMember(req.body)
    .then(([addedMember]) => {
      res.json(addedMember)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

export default router
