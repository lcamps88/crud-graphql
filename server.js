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
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const config_1 = __importDefault(require("config"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongodb_1 = require("./db/mongodb");
const schema_loader_1 = require("./src/schema-loader"); // will create in next steps, skip for now
const port = config_1.default.get('port') || 5000;
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const formatError = (error) => {
    console.log(error);
    const apiError = error.originalError;
    return {
        message: apiError.message,
        status: 500
    };
};
const server = new apollo_server_express_1.ApolloServer({
    schema: schema_loader_1.mainSchema,
    context: () => {
        return { message: 'This is context used by all resolvers' };
    },
    formatError,
    plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })]
});
const startApolloServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    server.applyMiddleware({ app });
    httpServer.listen({ port });
    (0, mongodb_1.connectMongoDB)();
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
});
startApolloServer();
