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
        const cardDiv = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardlink = document.createElement("a");
        const cardText = document.createElement("p");
        const genre = document.createElement("p");
        const language = document.createElement("p");
        const movieImg = document.createElement("img");
        const movieData = document.createElement("div");
        const title = document.createElement("h1");
        const summary = document.createElement("p");
        
        const btnWatchNow = document.createElement("button");
        let genreRes = "";
        movie.show.genres.forEach((elementGenre, i) => {
        if (i < movie.show.genres.length - 1) {
            genreRes += elementGenre + ", ";
        } else if (i === movie.show.genres.length - 1) {
            genreRes += elementGenre;
        } else if (movie.show.genres.length === 0) {
            genreRes += "No info"
        }
    });
        genre.innerText = "Genre: " + genreRes;
        cardDiv.className = "card";
        cardDiv.style = "width: 18rem;"
        cardText.className = "card-title";
        cardText.innerText = "Average: " + movie.show.rating.average;
        language.className = "card-title";
        language.innerText = "Language: " + movie.show.language;
        movieImg.src = movie.show.image.medium;
        movieImg.className = "card-img-top";
        cardBody.className = "card-body";
        movieData.setAttribute("class", "show-info");
        title.innerText = movie.show.name;
        summary.innerHTML = movie.show.summary;
        cardlink.href = movie.show.url;

        btnWatchNow.innerText = "Watch";
        btnWatchNow.type = "button";
        btnWatchNow.className = "btn btn-secondary";
        cardlink.appendChild(btnWatchNow);
        cardBody.appendChild(genre);
        cardBody.appendChild(language);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardlink);
        cardDiv.appendChild(movieImg);
        cardDiv.appendChild(cardBody);
        movieData.appendChild(title);
        movieData.appendChild(summary);
        movieElement.appendChild(cardDiv);
        movieElement.appendChild(movieData);
        dataContainer.appendChild(movieElement);
        
    })

}

infoData.addEventListener("submit", (e) => {
    e.preventDefault();
    dataContainer.innerHTML = "";
    getMovies()
})


