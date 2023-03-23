import { Router } from 'express'
const router = Router()

import { getAllMembers, addMember, deleteMember, updateMember } from '../db/db'
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

router.delete('/:id', (req, res) => {
  deleteMember(Number(req.params.id))
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

router.patch('/:id', (req, res) => {
  updateMember(Number(req.params.id), req.body)
    .then((returned) => {
      res.json(returned[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
