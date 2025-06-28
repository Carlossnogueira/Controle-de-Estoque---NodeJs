import { FastifyInstance } from "fastify";

export default async function routes(fastify: FastifyInstance) {

  // VIEW ROUTES

  fastify.get('/home', async (request, reply) => {
    return reply.view('userHome', { username: 'Undefined' })
  })

  fastify.get('/login', async (request, reply) => {
    return reply.view('login')
  })

  fastify.get('/admin-panel', async(request,reply) =>{
    return reply.view('adminPanel', { username: 'Undefined'})
  })

  // FUNCTION ROUTES

  
}