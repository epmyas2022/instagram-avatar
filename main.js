import Server from "./config/server.js";

const server = new Server();

server.middleware();
server.start();