

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById('fortuneButton').onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById('colorButton').onclick = function () {
    axios.get("http://localhost:4000/api/color/")
        .then(function (response) {
          const data = response.data;
          const colors = document.getElementById('colors')
          colors.innerHTML = data
        });
  };
  const colorInput = document.getElementById('colorInput').value
 

  const colorInputBtn = document.getElementById('colorInputBtn')

  function colorAdder() {
      axios.post("http://localhost:4000/api/color", colorInput)
        .then(function (res){
            const data = res.data;
            const colors = document.getElementById('colors')
            colors.innerHTML = data
        })
  }

  colorInputBtn.addEventListener('click', colorAdder)

  document.getElementById('colorInput').submit = function () {
    axios.post("http://localhost:4000/api/color/")
        .then(function (response) {
          const data = response.data;
          alert('color added the generator');
        });
  };

  document.getElementById('hi5Button').onclick = function () {
    axios.get("http://localhost:4000/api/hi5/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };