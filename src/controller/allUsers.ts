import { User } from "../models/index.ts";

export default async ({ response }: { response: any }) => {
  const users = await User.all();

  response.status = 200;
  response.body = { data: { users } };
};
