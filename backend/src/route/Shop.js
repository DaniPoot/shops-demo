import { insertShopSchema, updateShopSchema, deleteShopSchema, getByIdShema, getShopsSchema } from '../schema/store/index.js'

export default async function (fastify, _opts) {
  fastify.register(async function (fastify) {
    fastify.get('/',
      { schema: getShopsSchema },
      async function (request, reply) {
        return this.shop.get(request.query)
      })

    fastify.post('/create',
      { schema: insertShopSchema },
      async function (request, reply) {
        return this.shop.create(request.body)
      })

    fastify.get('/:storeId',
      { schema: getByIdShema },
      async function (request, reply) {
        const { storeId } = request.params
        return this.shop.getById(storeId)
      })

    fastify.put('/:storeId',
      { schema: updateShopSchema },
      async function (request, reply) {
        const { storeId } = request.params
        return this.shop.update({ id: storeId, shop: request.body })
      })

    fastify.delete('/:storeId',
      { schema: deleteShopSchema },
      async function (request, reply) {
        const { storeId } = request.params
        return this.shop.delete(storeId)
      })
  })
}
