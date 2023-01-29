import express, { Express, Request, Response } from "express";
import {vendorRouter} from "./routes/vendor";
const app = express();

const port = 4000;

app.use(express.json());
app.use("/vendor", vendorRouter)

app.get('/', (req: Request, res: Response) => {
  res.send("Hi")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
