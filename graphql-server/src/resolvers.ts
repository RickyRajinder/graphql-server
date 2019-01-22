//import {IResolvers} from "graphql-middleware/dist/types";
import {ResolverMap} from "./types/graphql-utils";


export const resolvers: ResolverMap = {
    Query: {
        hello: (_:any, { name }: GQL.IHelloOnQueryArguments) => `Hola ${name || "Mundo"}`,
    },
    Mutation: {
        register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
    }
};