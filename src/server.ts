import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database is connected successfully");
    console.log(config.port, "9");

    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}
