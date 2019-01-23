//import {IResolvers} from "graphql-middleware/dist/types";
import * as bcrypt from 'bcryptjs';
import {ResolverMap} from "./types/graphql-utils";
import {User} from "./entity/User";


export const resolvers: ResolverMap = {
    Query: {
        hello: (_:any, { name }: GQL.IHelloOnQueryArguments) => `Hola ${name || "Mundo"}`,
    },
    Mutation: {
        register: async (_, { email, password}: GQL.IRegisterOnMutationArguments) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = User.create({
                email,
                password: hashedPassword,
            });
            await user.save()
            return true;
        }

    }
};