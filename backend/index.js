
import express from "express";
import dotenv from "dotenv";
import connect from "./database/conn.js";
import userRouter from "./router/UserRouter.js";
import postRouter from './router/PostRouter.js'
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter)
app.use("/api/post", postRouter)


const port = 5000;

// connect database first and then run server
connect()
  .then(() => {
    try {
      const server = app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });

    } catch (error) {
      console.log("Can't Connect to the Server...!");
    }
  })
  .catch((error) => {
    console.log("Invalid DataBase Connection...!");
  });



