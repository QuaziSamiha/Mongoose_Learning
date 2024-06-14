// 14 June, 2024
import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

console.log(process.cwd());
// G:\7.Backend\Module-8\project2\.env
