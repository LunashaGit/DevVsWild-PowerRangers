const Signal = require("../models/signalModel");
const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;

dotenv.config({
  path: ".env",
});

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;

const client = new MongoClient(
  `mongodb+srv://${USER}:${PASSWORD}@power-rangers.9psnhuv.mongodb.net/database`,
  {
    useNewUrlParser: true,
  }
);

const typeArray = [
  "poisonous",
  "slippery",
  "block",
  "snow",
  "animal",
  "insect",
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function seedDB() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const collection = client.db("database").collection("signals");

    collection.drop();

    const signalEntry = [];

    for (let i = 0; i < 20; i++) {
      signalEntry.push(
        new Signal({
          type: `${typeArray[getRandomInt(0, 5)]}`,
          lon: getRandom(3.9691265701222145, 3.9729994667246955),
          lat: getRandom(50.44324126829621, 50.44554678286317),
        })
      );
    }

    collection.insertMany(signalEntry);

    console.log("Database seeded! :)");
  } catch (err) {
    console.log(err.stack);
  }
}
seedDB();
