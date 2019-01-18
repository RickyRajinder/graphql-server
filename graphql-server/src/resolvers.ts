import {IResolvers} from "graphql-middleware/dist/types";


export const resolvers: IResolvers = {
    Query: {
        hello: (_:any, { name }: GQL.IHelloOnQueryArguments) => `Hola ${name || 'Mundo'}`,
    },
};