import {userModel} from '../models/user'

export const createUserResolver = async (parent: any, args: any, context: any) => {
  let user = await userModel.find({email: args.email}).lean()
  if (user.length) throw new Error('User already exists!')

  user = await userModel.create(args)
  if (!user) throw new Error('User creation failed')
  return user
}