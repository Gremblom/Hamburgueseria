import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const dbName = "hamburgueseriaDB";

async function connection(){
    await client.connect();
    const db = client.db(dbName);

    return db;
}

export default connection;