import { User } from "../models/index.ts";

export default async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid data" };
    return;
  }

  const { value: { name, email, password} } = await request.body();

  const data = { "name": name, "email": email, "password": password };

  let result = await User.create(data);
  //   const user=await User.find(lastInsertId);
  response.status = 200;
  response.body = { data: { "message": "User created successfully" } };
};

//     interface DbResponse {
//       data: DbData
//   }

//   interface DbData {
//       affectedRows: number
//       lastInsertId: number
//     }
// interface UserInterface {
//     name: string;
//     email: string;
//     password: string;
//   }
