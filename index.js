const app = require("./app");
const debug = require("debug")("personal-portfolio:server");
const http = require("http");

const server = http.createServer(app);
server.listen(3000);
server.on("error", (error) => {
  throw error;
});
server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
});
