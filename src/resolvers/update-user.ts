import { userModel } from '../models/user'

export const updateUserResolver = async (parent: any, args: any, context: any) => {
    let user = await userModel.findOne({email: args.email}).lean()
    if (!user) throw new Error('User not exists!')
    const updateUser = {email: user.email, ...args}
    user = await userModel
      .findByIdAndUpdate(user._id, updateUser, {new: true})
      .lean()
    return user
  }