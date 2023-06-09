import { join } from 'node:path'
import express from 'express'

import cors, { CorsOptions } from 'cors'

// Routes:
import members from './routes/members'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1', members)
server.use(cors('*' as CorsOptions))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

export default server
