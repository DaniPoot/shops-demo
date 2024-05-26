import { Shop } from '../model/index.js'
import { isValidObjectId } from '../utils/mongoose.js'

export default class ShopController {
  create (shop = {}) {
    return Shop.create(shop)
  }

  async get ({ limit = 10, page = 1 } = {}) {
    const shops = await Shop.find().limit(limit).skip((page - 1) * limit)

    return {
      data: shops,
      page,
      limit,
      total: await Shop.countDocuments()
    }
  }

  async getById (id) {
    if (!isValidObjectId(id)) {
      throw new Error('invalid_id')
    }
    const shop = await Shop.findById(id)

    if (!shop) throw new Error('shop_not_found')

    return shop
  }

  async update ({ id, shop = {} } = {}) {
    if (!isValidObjectId(id)) {
      throw new Error('invalid_id')
    }

    const shopUpdated = await Shop.findByIdAndUpdate(id, shop)
    if (!shopUpdated) throw new Error('shop_not_found')

    return shopUpdated
  }

  async delete (id) {
    if (!isValidObjectId(id)) {
      throw new Error('invalid_id')
    }

    const shop = await Shop.findByIdAndDelete(id)
    console.log({ shop })

    if (!shop) throw new Error('shop_not_found')

    return { ok: true, message: 'shop_deleted' }
  }
}
