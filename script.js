const apiKey = "b00becdd7e29ffe2e96ce18a43b88d3f";

var pages = 1;
var currentPreUrl = 1; //1 == now Playing, 2 == searching
var userInput = "";
var allMovies = [];
var submitBtn = document.getElementById("submitBtn");
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

            allMovies.push({title: movie.title, desc: movie.overview, id: movie.id});

            movieGrid.innerHTML += 
            `
            <div class="text-center movie-card mb-5">
                <p class="text-white text-center mb-2 font-bold movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
            `;
        });
          
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(movieCard => {
            const moviePoster = movieCard.querySelector('.movie-poster');
            moviePoster.addEventListener('click', async () => {
                const movieTitle = movieCard.querySelector('.movie-title').textContent;
            
                const clickedMovie = allMovies.find(movie => movie.title === movieTitle);
            
                if (clickedMovie) {
                    const urlMovie = `https://api.themoviedb.org/3/movie/${clickedMovie.id}/videos?api_key=b00becdd7e29ffe2e96ce18a43b88d3f`;
    
                    const responseMovie = await fetch(urlMovie);
                    const dataMovie = await responseMovie.json();
                    
                    var popupContent;
                    if(dataMovie.results.length === 0){
                        popupContent = `
                            <h2 class="popup-title">${movieTitle}</h2>
                            <p class="popup-overview">${clickedMovie.desc}</p>
                        `;
                    }
                    else{
                        const movieKey = dataMovie.results[0].key;
                        popupContent = `
                            <h2 class="popup-title">${movieTitle}</h2>
                            <p class="popup-overview">${clickedMovie.desc}</p>
                            <iframe
                                src="https://www.youtube.com/embed/${movieKey}"
                                title="${movieTitle}"
                                class="w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        `;
                    }
                    
                    const popup = document.createElement('div');
                    popup.className = 'popup';
                    popup.innerHTML = popupContent;
                    
                    const popupContainer = document.createElement('div');
                    popupContainer.className = 'popup-container';
                    popupContainer.appendChild(popup);
                
                    document.body.appendChild(popupContainer);
                    
                    const closePopup = () => {
                        document.body.removeChild(popupContainer);
                    };
                    
                    popupContainer.addEventListener('click', closePopup);
                    document.addEventListener('keydown', event => {
                        if (event.key === 'Escape') {
                        closePopup();
                        }
                    });
                }
            });
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

            allMovies.push({title: movie.title, desc: movie.overview, id: movie.id});

            movieGrid.innerHTML += 
            `
            <div class="text-center movie-card mb-5">
                <p class="text-white text-center mb-2 font-bold movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
            `;
        });
          
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(movieCard => {
            const moviePoster = movieCard.querySelector('.movie-poster');
            moviePoster.addEventListener('click', async () => {
                const movieTitle = movieCard.querySelector('.movie-title').textContent;
            
                const clickedMovie = allMovies.find(movie => movie.title === movieTitle);
            
                if (clickedMovie) {
                    const urlMovie = `https://api.themoviedb.org/3/movie/${clickedMovie.id}/videos?api_key=b00becdd7e29ffe2e96ce18a43b88d3f`;
    
                    const responseMovie = await fetch(urlMovie);
                    const dataMovie = await responseMovie.json();
                    
                    var popupContent;
                    if(dataMovie.results.length === 0){
                        popupContent = `
                            <h2 class="popup-title">${movieTitle}</h2>
                            <p class="popup-overview">${clickedMovie.desc}</p>
                        `;
                    }
                    else{
                        const movieKey = dataMovie.results[0].key;
                        popupContent = `
                            <h2 class="popup-title">${movieTitle}</h2>
                            <p class="popup-overview">${clickedMovie.desc}</p>
                            <iframe
                                src="https://www.youtube.com/embed/${movieKey}"
                                title="${movieTitle}"
                                class="w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        `;
                    }
                    
                    const popup = document.createElement('div');
                    popup.className = 'popup';
                    popup.innerHTML = popupContent;
                    
                    const popupContainer = document.createElement('div');
                    popupContainer.className = 'popup-container';
                    popupContainer.appendChild(popup);
                
                    document.body.appendChild(popupContainer);
                    
                    const closePopup = () => {
                        document.body.removeChild(popupContainer);
                    };
                    
                    popupContainer.addEventListener('click', closePopup);
                    document.addEventListener('keydown', event => {
                        if (event.key === 'Escape') {
                        closePopup();
                        }
                    });
                }
            });
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

            allMovies.push({title: movie.title, desc: movie.overview, id: movie.id});

            movieGrid.innerHTML += 
            `
            <div class="text-center movie-card mb-5">
                <p class="text-white text-center mb-2 font-bold movie-title">${movie.title}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-100 movie-poster">
                <p class="text-white my-2 text-center movie-votes">Votes: ${movie.vote_average} ⭐️</p>
            </div>
            `;
        });
          
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(movieCard => {
            const moviePoster = movieCard.querySelector('.movie-poster');
            moviePoster.addEventListener('click', async () => {
                const movieTitle = movieCard.querySelector('.movie-title').textContent;
            
                const clickedMovie = allMovies.find(movie => movie.title === movieTitle);
            
                if (clickedMovie) {
                    const urlMovie = `https://api.themoviedb.org/3/movie/${clickedMovie.id}/videos?api_key=b00becdd7e29ffe2e96ce18a43b88d3f`;
    
                    const responseMovie = await fetch(urlMovie);
                    const dataMovie = await responseMovie.json();
                    
                    var popupContent;
                    if(dataMovie.results.length === 0){
                        popupContent = `
                            <h2 class="popup-title">${movieTitle}</h2>
                            <p class="popup-overview">${clickedMovie.desc}</p>
                        `;
                    }
                    else{
                        const movieKey = dataMovie.results[0].key;
                        popupContent = `
                            <h2 class="popup-title">${movieTitle}</h2>
                            <p class="popup-overview">${clickedMovie.desc}</p>
                            <iframe
                                src="https://www.youtube.com/embed/${movieKey}"
                                title="${movieTitle}"
                                class="w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        `;
                    }
                    
                    const popup = document.createElement('div');
                    popup.className = 'popup';
                    popup.innerHTML = popupContent;
                    
                    const popupContainer = document.createElement('div');
                    popupContainer.className = 'popup-container';
                    popupContainer.appendChild(popup);
                
                    document.body.appendChild(popupContainer);
                    
                    const closePopup = () => {
                        document.body.removeChild(popupContainer);
                    };
                    
                    popupContainer.addEventListener('click', closePopup);
                    document.addEventListener('keydown', event => {
                        if (event.key === 'Escape') {
                        closePopup();
                        }
                    });
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
}

var homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", handleHomeBtn);

function handleHomeBtn(event) {
  event.preventDefault();
  movieGrid.innerHTML = "";
  searchInput.value = "";
  fetchMovies();
}
