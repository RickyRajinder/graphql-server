import { request } from 'graphql-request';
import {host} from "../constants";
import {User} from "../entity/User";
import {createTypeORMConn} from "../utils/createTypeORMConn";

beforeAll( async () => {
    await createTypeORMConn();
})

const email = "tob@bob.com";
const password = "fdgdfhdsf";

const mutation = `
mutation {
    register(email: "${email}", password: "${password}")
}
`;

test("Register user", async (done) => {
    const response = await request(host, mutation)
    expect(response).toEqual({ register: true })
    const users = await User.find({ where: { email } });
    expect(users).toHaveLength(1);
    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);
    done();
});