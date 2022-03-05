//original function
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

//grab element from html

const fortuneBtn = document.getElementById('fortuneButton')

const bookBtn = document.getElementById('bookButton')
const bookInput = document.getElementById('bookInput')

const indexBtn = document.getElementById('indexButton')
const indexInput = document.getElementById('indexInput')

const form = document.querySelector('form')
const newBookInput = document.getElementById('newBookInput')
const newBookIndex = document.getElementById('newBookIndex')
const submitForm = document.getElementById('submitForm')


//write the functionality
function getFortune() {
  axios.get("http://localhost:4000/api/fortune")
    .then((res) => {
      alert(res.data)
    })
}

function createBook() {
  const newBook = bookInput.value

  const body = {
    newBook
  }

  axios.post('http://localhost:4000/api/book', body)
    .then((res) => {
      const book = res.data[res.data.length - 1]
      alert(`you just added ${book} to the list`)
      console.log(res.data)
    })

    bookInput.value = ''
}

function deleteBook() {
  const newIndex = indexInput.value

  axios.delete(`http://localhost:4000/api/delete/${newIndex}`)
        .then((res) => {
            alert("you successfully deleted that bad book")
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

  indexInput.value = ''
}

function editBook() {
  const bookChange = newBookInput.value
  const indexChange = newBookIndex.value

  const body = {
    bookChange
  }

  axios.put(`http://localhost:4000/api/edit/${indexChange}`, body)
    .then((res) => {
      alert(`your book list now contains ${res.data}`)
      console.log(res.data)
    })
    .catch((err) =>
    console.log(err))
    
    newBookIndex.value = ''
    newBookInput.value = ''
}



//add event listener
fortuneBtn.addEventListener("click", getFortune)

bookBtn.addEventListener('click', createBook)

indexBtn.addEventListener('click', deleteBook)

submitForm.addEventListener('click', editBook)
  















  // document.getElementById('fortuneButton').onclick = function () {
  //   axios.get("http://localhost:4000/api/fortune/")
  //       .then(function (response) {
  //         const data = response.data;
  //         alert(data);
  //       });
  // };

  // document.getElementById('colorButton').onclick = function () {
  //   axios.get("http://localhost:4000/api/color/")
  //       .then(function (response) {
  //         const data = response.data;
  //         const colors = document.getElementById('colors')
  //         colors.innerHTML = data
  //       });
  // };
  // const colorInput = document.getElementById('colorInput').value
 

  // const colorInputBtn = document.getElementById('colorInputBtn')

  // function colorAdder() {
  //     axios.post("http://localhost:4000/api/color", colorInput)
  //       .then(function (res){
  //           const data = res.data;
  //           const colors = document.getElementById('colors')
  //           colors.innerHTML = data
  //       })
  // }

  // colorInputBtn.addEventListener('click', colorAdder)

  // document.getElementById('colorInput').submit = function () {
  //   axios.post("http://localhost:4000/api/color/")
  //       .then(function (response) {
  //         const data = response.data;
  //         alert('color added the generator');
  //       });
  // };

  // document.getElementById('hi5Button').onclick = function () {
  //   axios.get("http://localhost:4000/api/hi5/")
  //       .then(function (response) {
  //         const data = response.data;
  //         alert(data);
  //       });
  // };