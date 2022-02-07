"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainSchema = void 0;
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const schema_1 = require("@graphql-tools/schema");
const path = __importStar(require("path"));
const get_user_1 = require("./resolvers/get-user");
const create_user_1 = require("./resolvers/create-user");
const update_user_1 = require("./resolvers/update-user");
const delete_user_1 = require("./resolvers/delete-user");
const ROOT_SCHEMA_PATH = (0, load_files_1.loadFilesSync)(path.join(__dirname, './schemas'));
const TypeDefinition = (0, merge_1.mergeTypeDefs)(ROOT_SCHEMA_PATH);
const resolvers = () => {
    return {
        Query: {
            getUser: get_user_1.getUserByIdResolver,
        },
        Mutation: {
            createUser: create_user_1.createUserResolver,
            updateUser: update_user_1.updateUserResolver,
            deleteUser: delete_user_1.deleteUserResolver,
        }
    };
};
const schema = () => (0, schema_1.makeExecutableSchema)({
    typeDefs: [TypeDefinition],
    resolvers: resolvers()
});
exports.mainSchema = schema();
