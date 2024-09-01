require("dotenv").config();
const http = require("http");
const app = require("./app");
const port = process.env.PORT || 5050;
const env = process.env.NODE_ENV;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`App listening on env ${env}`);
});
