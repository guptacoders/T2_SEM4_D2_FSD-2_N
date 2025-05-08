const expr = require("express");
const app = expr();
const api = require("./api")
app.use("/api",api);
app.listen(7899);
