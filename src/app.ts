import fastify from 'fastify'
import view from '@fastify/view'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'
import fastifyStatic from '@fastify/static'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const app = fastify()

app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

app.register(view, {
  engine: { ejs },
  root: path.join(__dirname, 'views'),
})

app.get('/', (req, reply) => {
  return reply.view('LoginPage.ejs') 
})