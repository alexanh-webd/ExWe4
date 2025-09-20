const dataContainer = document.getElementById("show-list");
const infoData = document.getElementById("info-data");
const inputShow = document.getElementById("input-show");
const submitBtn = document.getElementById("submit-data");



async function getMovies() {
    const movieUrl =  "https://api.tvmaze.com/search/shows?q=" + inputShow.value.trim();
    const moviePromise = await fetch(movieUrl);
    const movieJson = await moviePromise.json();
    console.log(movieJson);
    movieJson.forEach((movie) =>{
        const movieElement = document.createElement("div");
        movieElement.setAttribute("class", "show-data")
        const movieImg = document.createElement("img");
        const movieData = document.createElement("div");
        const title = document.createElement("h1");
        const summary = document.createElement("p");
        //console.log(movie.show.image.medium)
        movieImg.src = movie.show.image.medium;
        movieData.setAttribute("class", "show-info");
        title.innerText = movie.show.name;
        summary.innerHTML = movie.show.summary;
        movieData.appendChild(title);
        movieData.appendChild(summary);
        movieElement.appendChild(movieImg);
        movieElement.appendChild(movieData);
        dataContainer.appendChild(movieElement);
    })

}

infoData.addEventListener("submit", (e) => {
    e.preventDefault();
    dataContainer.innerHTML = "";
    getMovies()
})


