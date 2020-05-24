import { db, User } from "../models/index.ts";

export default async ({ response }: { response: any }) => {
  await db.sync({ drop: true });
  await User.create([
    {
      name: "Tokyo",
      password: "Tokyo",
      email: "Tokyo@tokyo.com",
    },
    {
      name: "Berlin",
      password: "Berlin",
      email: "Berlin@berlin.com",
    },
  ]);

  response.status = 500;
  response.body = { data: { message: "Migration completed" } };
};
