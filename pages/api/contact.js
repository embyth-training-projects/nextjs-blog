import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: `Invalid input.` });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.kz2sc.mongodb.net/${process.env.mongodb_collection}?retryWrites=true&w=majority`;

    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: `Could not connect to database!` });
      return;
    }

    const db = client.db();

    try {
      await db.collection(`messages`).insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: `Storing message failed!` });
      return;
    }

    client.close();

    res.status(201).json({ message: `Message successfully sent!` });
  }
}

export default handler;
