// 14 June, 2024
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;

console.log(process.cwd());
// G:\7.Backend\Module-8\project2\.env
