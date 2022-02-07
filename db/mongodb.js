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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
const config_1 = __importDefault(require("config"));
const mongoose_1 = require("mongoose"); // import connect method from mongoose
const MONGO_URI = config_1.default.get('db_url'); // This will get the db_url, that we've declared in config/default.json file
const connectMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, mongoose_1.connect)(MONGO_URI);
        if (res)
            console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log('MongoDB connection error', error);
    }
});
exports.connectMongoDB = connectMongoDB;
