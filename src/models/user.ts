import { model, Schema } from 'mongoose'

const user = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
)

export const userModel = model('user', user)
