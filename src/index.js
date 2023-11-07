import connectDB from "./db/index.js";
//require("dotenv").config({path:"./env"});
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

// One Approach
/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(
        "The application is not able to talk to the Data Base",
        error
      );
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is running on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
*/
