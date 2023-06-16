const apiKey = "b00becdd7e29ffe2e96ce18a43b88d3f";

var pages = 1;
var currentPreUrl = 1; //1 == now Playing, 2 == searching
var userInput = "";
var submitBtn = document.getElementById("submitBtn");
var gifsDiv = document.getElementById("gifsDiv");
var searchInput = document.getElementById("searchInput"); 
var movieGrid = document.getElementById("movies-grid");
var addMoreMovies = document.getElementById("load-more-movies-btn"); 

document.addEventListener("DOMContentLoaded", handleDocument);

function handleDocument(event) {
    event.preventDefault(); // Prevent form submission (optional)
    currentPreUrl = 1;
    pages = 1;
    fetchMovies();
}

async function fetchMovies() {
    try {
        const searchTerm = searchInput.value;
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;

        movies.forEach(movie => {
            movieGrid.innerHTML += 
            `
            <div class="text-center movie-card mb-5">
                <p class="text-white text-center mb-2 font-bold movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
            `
        });

    } catch (error) {
        console.log(error);
    }
}

searchInput.addEventListener("input", handleSearchInput);

function handleSearchInput(event) {
    event.preventDefault(); // Prevent form submission (optional)
    pages = 1;
    userInput = event.target.value;
    fetchMoviesQuery();
}

async function fetchMoviesQuery(){
    movieGrid.innerHTML = "";
  
    if(userInput.length === 0){
        currentPreUrl = 1;
        fetchMovies();
        return;
    }

    currentPreUrl = 2;
    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${pages}&query=${userInput}&include_adult=false`;
    
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;
    
        movies.forEach(movie => {
            movieGrid.innerHTML += 
            `
            <div class="text-center movie-card mb-5">
                <p class="text-white text-center mb-2 movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 mx-auto movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
            `
        });
    } catch (error) {
        console.log(error);
    }
}

addMoreMovies.addEventListener("click",handleAddMoreMovies);

function handleAddMoreMovies(event) {
    event.preventDefault(); // Prevent form submission (optional)
    pages++;
    fetchMoreMovies();
}

async function fetchMoreMovies(){
    try {
        
        var url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pages}`;
        if(currentPreUrl === 2) url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${pages}&query=${userInput}&include_adult=false`;

        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;

        movies.forEach(movie => {
            movieGrid.innerHTML += 
            `
            <div class="text-center movie-card mb-5">
                <p class="text-white text-center mb-2 movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 mx-auto movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
            `
        });

    } catch (error) {
        console.log(error);
    }
}