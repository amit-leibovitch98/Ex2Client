const express = require("express");
const app = express();

app.get("/test_get_method", (req, res) => {
  console.log("get\n");
  res.status(200).send("response from get");
});

app.post("/test_post_method", (req, res) => {
  console.log("post\n body: " + req.body);
  res.status(201).send({ message: "response from post" });
});

app.put("/test_put_method", (req, res) => {
  console.log("put\n");
  res.status(201).send({ message: "response from put" });
});

app.delete("/test_delete_method", (req, res) => {
  console.log("delete\n");
  res.status(201).send({ message: "response from delete" });
});

const server = app.listen(8989, () => {
  console.log("Server listening on port 8989...\n");
});
