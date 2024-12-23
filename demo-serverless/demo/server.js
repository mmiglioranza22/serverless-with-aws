const express = require("express");
const serverless = require("serverless-http");

const app = express();

// state managed here while the container is used and lambda is hot is cached/closure (for side effects / bug prompt)

app.get("/", (req, res) => {
  console.log({ req });
  res.send({
    statusCode: 200,
    body: JSON.stringify({
      message: `Path parameters: ${JSON.stringify(req.params)}
			Query string parameters: ${JSON.stringify(req.query)}`,
    }),
  });
});
app.get("/:params", (req, res) => {
  console.log({ req });
  res.send({
    statusCode: 200,
    body: JSON.stringify({
      message: `Path parameters: ${JSON.stringify(req.params)}
      Query string parameters: ${JSON.stringify(req.params)}`,
    }),
  });
});

module.exports.handler = serverless(app);
