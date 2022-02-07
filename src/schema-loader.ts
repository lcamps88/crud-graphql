import {loadFilesSync} from '@graphql-tools/load-files'
import {mergeTypeDefs} from '@graphql-tools/merge'
import {makeExecutableSchema} from '@graphql-tools/schema'
import * as path from 'path'
import { getUserByIdResolver } from './resolvers/get-user'
import { createUserResolver } from './resolvers/create-user'
import { updateUserResolver } from './resolvers/update-user'
import { deleteUserResolver } from './resolvers/delete-user'

const ROOT_SCHEMA_PATH = loadFilesSync(path.join(__dirname, './schemas'))

const TypeDefinition = mergeTypeDefs(ROOT_SCHEMA_PATH)

const resolvers = () => {
  return {
    Query: {
      getUser: getUserByIdResolver,
    },
    Mutation: {
      createUser: createUserResolver,
      updateUser: updateUserResolver,
      deleteUser: deleteUserResolver,
    }
  }
}

const schema = () =>
  makeExecutableSchema({
    typeDefs: [TypeDefinition],
    resolvers: resolvers()
  })

export const mainSchema = schema()