export default ({ response }: { response: any }) => {
  response.status = 404;
  response.body = { data: { message: "404 Resource Not Found" } };
};
