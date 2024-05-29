import Fastify from 'fastify'
import fp from 'fastify-plugin'
import cors from '@fastify/cors'
import { MongoService } from './service/index.js'
import { Shop as ShopController } from './controller/index.js'
import { Shop as ShopRoute } from './route/index.js'

export const app = Fastify({
  logger: true
})

async function decorateFastifyInstance (fastify, options, done) {
  const mongo = new MongoService({ uri: process.env.MONGODB_URI })
  mongo.connect()

  fastify.decorate('shop', new ShopController())
}

async function autheticateInstance (fastify, opts) {
  fastify.register(import('@fastify/jwt'), {
    secret: process.env.JWT_SECRET
  })

  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

app
  .register(cors, {
    origin: true,
    credentials: true,
    allowedHeaders: 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
  })
  .register(fp(autheticateInstance))
  .register(fp(decorateFastifyInstance))
  .register(ShopRoute, { prefix: '/api/shop' })
