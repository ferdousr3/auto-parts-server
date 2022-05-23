const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// app
app.use(cors());
app.use(express.json());

//mongoDB connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@autoparts.lid8x.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// api function
async function run() {
  try {
    await client.connect();
    const ProductsCollection = client.db("autoParts").collection("products");

    //add product
    app.post()
  } finally {
    //here error or something
  }
}
run().catch(console.dir);

// <!-----root app--------->
app.get("/", (req, res) => {
  res.send("Auto Parts");
});

// listing port
app.listen(port, () => {
  console.log(`Auto Parts is Running on ${port}`);
});
