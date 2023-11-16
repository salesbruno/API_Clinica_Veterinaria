import mongoose from "mongoose";
import config from "config";

// Logger
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Connected to the database");
  } catch (e) {
    Logger.error("Unable to connect");
    Logger.error(`Erro: ${e}`);
    process.exit(1);
  }
}

export default connect;
