import express from "express";

const app = express();
const port = 5678;

app.use("/", (req, res) => {
  res.html({ message: "Yours Charan Goud" });
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
