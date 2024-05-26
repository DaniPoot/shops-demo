import Fastify from 'fastify'
import fp from 'fastify-plugin'
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

app
  .register(fp(decorateFastifyInstance))
  .register(ShopRoute, { prefix: '/api/shop' })
