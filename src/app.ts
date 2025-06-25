import Fastify from 'fastify'
import path from 'path'
import { fileURLToPath } from 'url'
import ejs from 'ejs'
import view from '@fastify/view'
import routes from './http/routes'
import { fastifyStatic } from '@fastify/static'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export const app = Fastify()

app.register(view, {
  engine: { ejs },
  root: path.join(__dirname, 'views'),
  viewExt: 'ejs',
})

app.register(fastifyStatic, {
  root: path.join(__dirname, '../public'), 
  prefix: '/public/', 
})

app.register(routes)

