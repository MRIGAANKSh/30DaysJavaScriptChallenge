let apikey = "9793dd6";
let search = document.getElementById("search");
let srchbtn = document.getElementById("btn");

const getdata = async (moviename) => {
  let fetchdata = await fetch(
    `https://www.omdbapi.com/?&apikey=${apikey}&t="${moviename}"`
  );

  let jsondata = await fetchdata.json();
  console.log(jsondata);
  document.querySelector(".card").innerHTML="";
  search.value=""
  let div = document.createElement("div");
  div.classList.add("moviecard");
  console.log(jsondata.Title);
  div.innerHTML = `  <img src="${jsondata.Poster}" alt="">
        <div class="cardtext">
            <h1>${jsondata.Title}</h1>
            <p class="p1">Ratings:  <span style="color:white">${jsondata.Ratings[0].Value}<span></p>
            <a id="a1"href="#">${jsondata.Genre}</a>
            <p>Released:<span style="color:white">${jsondata.Released}<span></p>
            <p>Runtime:<span style="color:white">${jsondata.Runtime}<span></p>
            <p>Plot:<span style="color:white">${jsondata.Plot}<span></p>
           
        </div>`;
  let card = document.querySelector(".card");
  card.appendChild(div);
};
srchbtn.addEventListener("click", function () {
  let moviename = search.value;
  if (moviename != "") {
    getdata(moviename);
  } else {
    document.querySelector(".card").innerHTML = "<h1>Movie Not found<h1>";
  }
});
