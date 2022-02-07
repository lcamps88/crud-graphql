"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const user = new mongoose_1.Schema({
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String },
}, { timestamps: true });
exports.userModel = (0, mongoose_1.model)('user', user);
