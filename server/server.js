const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://AliMusa04:sGSZqg0CxSPG6y2z@cluster0.tfsnsqn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected database"));
const flowerSchema = mongoose.Schema({
  img: String,
  name: String,
  price: Number,
});

const flowerModel = mongoose.model("flowers2", flowerSchema);

app.get("/flowers", (req, res) => {
  flowerModel.find(null, (err, data) => {
    if (err) return res.status(500).send({ err });

    res.send(data);
  });
});

app.post("/flowers", (req, res) => {
  let newFlower = new flowerModel({
    ...req.body,
  });
  newFlower.save();
  res.status(200).send({ message: "created flower", newFlower });
});

app.get("/flowers/:id", (req, res) => {
  flowerModel.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.status(500).send({ err });

    res.send(data);
  });
});

app.delete("/flowers/:id", (req, res) => {
  flowerModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    if (err) return res.status(500).send({ err });
    res.send(data);
  });
});
app.listen(PORT);
