import { db, User } from "../models/index.ts";

export default async ({ response }: { response: any }) => {
  await db.sync({ drop: true });
  await User.create([
    {
      name: "Nairobi",
      password: "nairobi-Helsinki",
      email: "nairobi@nairobi.com",
    },
    {
      name: "Tokyo",
      password: "tokyo-Río",
      email: "tokyo@tokyo.com",
    },
    {
      name: "Berlin",
      password: "berlin-tatiana",
      email: "berlin@berlin.com",
    },
  ]);

  response.status = 200;
  response.body = { data: { message: "Migration completed" } };
};
