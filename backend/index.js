import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//import routes yang kita buat
import ProductRoute from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();

//menambahkan beberapa middware
app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(UserRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`server running into port 800000`);
});
