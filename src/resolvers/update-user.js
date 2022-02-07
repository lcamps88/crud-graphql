"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserResolver = void 0;
const user_1 = require("../models/user");
const updateUserResolver = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield user_1.userModel.findOne({ email: args.email }).lean();
    if (!user)
        throw new Error('User not exists!');
    const updateUser = Object.assign({ email: user.email }, args);
    user = yield user_1.userModel
        .findByIdAndUpdate(user._id, updateUser, { new: true })
        .lean();
    return user;
});
exports.updateUserResolver = updateUserResolver;
