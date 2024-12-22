exports.hello = async (event, ctx) => {
  console.log(ctx);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed dale!",
    }),
  };
};

exports.params = async (event, ctx) => {
  console.log({ event }, { ctx });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Path parameters: ${JSON.stringify(event.pathParameters)}
      Query string parameters: ${JSON.stringify(event.queryStringParameters)}`,
    }),
  };
};
