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

const books = []

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

app.post("/api/book", (req, res) => {
  const {newBook} = req.body

  books.push(newBook)

  res.status(200).send(books)
})

app.delete("/api/delete/:index", (req, res) => {
  console.log(req.params)

  if(+req.params.index) {
    books.splice(req.params.index, 1)
    res.status(200).send(books)
  } else {
    res.status(400).send("no book at this index")
  }
})

app.put("/api/edit/:id", (req, res) => {
  console.log(req.params)
  console.log(req.body)

  const {bookChange} = req.body
  const editIndex = +req.params.id

  books[editIndex] = bookChange
  
  res.status(200).send(books)
})



app.listen(4000, () => console.log("Server running on 4000"));


