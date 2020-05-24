import { User } from "../models/index.ts";

export default async (
  { params, request, response }: { params: any; request: any; response: any },
) => {
  const userId = params.id;
  const user = await User.deleteById(userId);

  response.status = 200;
  response.body = { data: { message: "Deleted successfully", user } };
};
