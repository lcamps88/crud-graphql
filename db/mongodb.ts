import config from 'config'
import {connect} from 'mongoose'  // import connect method from mongoose

const MONGO_URI: string = config.get('db_url')  // This will get the db_url, that we've declared in config/default.json file

export const connectMongoDB = async () => {
  try {
    const res = await connect(MONGO_URI)
    if (res) console.log('Connected to MongoDB')
  } catch (error) {
    console.log('MongoDB connection error', error)
  }
}