import { userModel } from '../models/user'

export const deleteUserResolver = async (parent: any, args: any, context: any) => {
    let user = await userModel.findOne({email: args.email})
    if (!user) throw new Error('User not exists!')
    await userModel.findOneAndRemove({_id: user._id})
    return {message: 'User Deleted!'}
  }