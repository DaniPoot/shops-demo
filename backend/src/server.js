import Fastify from 'fastify'
import fp from 'fastify-plugin'
import { MongoService } from './service/index.js'

export const app = Fastify({
  logger: true
})

async function decorateFastifyInstance (fastify, options, done) {
  const mongo = new MongoService({ uri: process.env.MONGODB_URI })
  mongo.connect()
}

app
  .register(fp(decorateFastifyInstance))

app.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})
