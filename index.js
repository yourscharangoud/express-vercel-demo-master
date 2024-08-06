import express from "express";

const app = express();
const port = 5678;

app.use("/", (req, res) => {
  res.html("<h1>sai</h1>");
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
