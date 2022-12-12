const express = require("express");
const app = express();

app.use(express.json());
app.get("/test_get_method", (req, res) => {
  console.log("get\nquery: ");
  console.log(req.query);
  res.status(200).send("45t5y6-y6y-6y6-u7i75t5-5t5t");
});

app.post("/test_post_method", (req, res) => {
  console.log("\npost\nbody: ");
  console.log(req.body);
  res.status(201).send({ message: "1q1-3ww-2-s2–ee-ss-d" });
});

app.put("/test_put_method", (req, res) => {
  console.log("\nput\nquery: ");
  console.log(req.query);
  console.log("\nbody: ");
  console.log(req.body);
  res.status(201).send({ message: "hhfg7rt5-t5–grn-h-j7-6ygr" });
});

app.delete("/test_delete_method", (req, res) => {
  console.log("\ndelete\nquery: ");
  console.log(req.query);
  res.status(201).send({ message: "response from delete" });
});

const server = app.listen(8989, () => {
  console.log("Server listening on port 8989...\n");
});
