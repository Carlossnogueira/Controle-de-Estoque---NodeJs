import { FastifyInstance } from "fastify";
import fs from 'fs'
import path from 'path'


export default async function routes(fastify: FastifyInstance) {

  fastify.get('/home', async (request, reply) => {
    return reply.view('userHome', { username: 'Undefined' })
  })

  fastify.get('/login', async (request, reply) => {
    return reply.view('login')
  })

  
}