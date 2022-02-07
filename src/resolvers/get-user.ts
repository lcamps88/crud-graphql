import { userModel } from '../models/user';

export const getUserByIdResolver = async (parent: any, args: any, context: any) => {
  const user = await userModel.findOne({_id: args.id}).lean()
  if (!user) throw new Error('No user exists!')
  return user
}