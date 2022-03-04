const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
		"Cool shirt!",
		"Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "Long life is in store for you.",
		"Now is the time to try something new.",
		"Soon life will become more interesting.",
    "There is a time for caution, but not for fear.",
    "Welcome change.",
    "Your quick wits will get you out of a tough situation."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

const color = [
  "blue",
  "green",
  "orange",
  "red",
  "yellow",
  "black",
];
app.get("/api/color", (req, res) => {
  res.status(200).send(color);
});

app.post("/api/color", (req, res) => {
  console.log(req.body)
  let newColor = req.body
  color.push(newColor)
  res.status(200).send(color); 
});

app.get("/api/hi5", (req, res) => {
  const tooSlow = "too slow"

  res.status(200).send(tooSlow);
  
});



app.listen(4000, () => console.log("Server running on 4000"));
