import mongoose from 'mongoose'

class MongoService {
  constructor ({ uri }) {
    this.uri = uri
  }

  async connect () {
    try {
      return await mongoose.connect(this.uri)
    } catch (err) {
      throw new Error('MongoDB connection error: ' + err.message)
    }
  }

  async disconnect () {
    return mongoose.disconnect()
  }
}

export default MongoService
