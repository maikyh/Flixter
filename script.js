console.log("Hello")

var submitBtn = document.getElementById("submitBtn");
var gifsDiv = document.getElementById("gifsDiv");
var searchInput = document.getElementById("searchInput"); 
var movieGrid = document.getElementById("movies-grid");
var addMoreMovies = document.getElementById("moreMoviesBtn"); 
var pages = 1;

document.addEventListener("DOMContentLoaded", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)

    // https://api.giphy.com/v1/gifs/search?api_key=PTLDGsZXmsUjYBOZIu74fBgVj3ytAkOo&q="hello"

    try {
        const apiKey = "b00becdd7e29ffe2e96ce18a43b88d3f";
        const searchTerm = searchInput.value;
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;
        console.log(movies)

        movies.forEach(movie => {
            movieGrid.innerHTML += 
            `
            <div class="w-11/12 bg-blue-200 rounded-md shadow-md p-10 mx-auto text-center flex flex-col movie-card mb-5">
                <p class="text-white text-center mb-2 text-lg font-bold movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 mx-auto movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
        
            `
        });

        // Process the data returned from the API
        // console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }

    // Perform your desired action here
    console.log("Button clicked!");
});

addMoreMovies.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)

    // https://api.giphy.com/v1/gifs/search?api_key=PTLDGsZXmsUjYBOZIu74fBgVj3ytAkOo&q="hello"
    pages++;

    try {
        const apiKey = "b00becdd7e29ffe2e96ce18a43b88d3f";
        const searchTerm = searchInput.value;
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pages}`;
    
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;
        console.log(movies)

        movies.forEach(movie => {
            movieGrid.innerHTML += 
            `
            <div class="w-11/12 mx-auto text-center flex flex-col movie-card mb-5">
                <p class="text-white text-center mb-2 text-lg font-bold movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 mx-auto movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
        
            `
        });

        // Process the data returned from the API
        // console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }

    // Perform your desired action here
    console.log("Button clicked!");
});

searchInput.addEventListener("input", (event) => {

    movieGrid.innerHTML = "";

  const userInput = event.target.value;
  console.log("User input:", userInput);
});