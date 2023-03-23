import { Router } from 'express'
const router = Router()

import { getAllMembers } from '../db/db'
// import { Member } from '../../common/member'

router.get('/', (req, res) => {
  getAllMembers()
    .then((members) => {
      res.json(members)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

export default router
