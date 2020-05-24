import { User } from "../models/index.ts";

export default async (
  { params, request, response }: { params: any; request: any; response: any },
) => {
  const userId = params.id;
  const user = await User.find(userId);

  response.status = 200;
  response.body = { data: { user } };
};
