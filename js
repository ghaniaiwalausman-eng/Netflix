// script.js

// Movie Database with Video URLs
const moviesDB = [
    // Trending Movies
    {
        id: 1,
        title: 'Cyber Storm',
        year: 2024,
        rating: 'TV-MA',
        duration: '2h 15m',
        description: 'A elite hacker discovers a conspiracy that threatens to bring down the entire city\'s infrastructure.',
        poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300',
        backdrop: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        category: 'trending',
        type: 'movie',
        cast: ['John Doe', 'Jane Smith', 'Bob Johnson'],
        director: 'James Cameron'
    },
    {
        id: 2,
        title: 'Jungle Expedition',
        year: 2023,
        rating: 'PG-13',
        duration: '1h 58m',
        description: 'A team of explorers venture deep into the Amazon rainforest to find a lost city.',
        poster: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300',
        backdrop: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        category: 'trending',
        type: 'movie',
        cast: ['Sarah Wilson', 'Tom Hardy', 'Emma Stone'],
        director: 'Christopher Nolan'
    },
    {
        id: 3,
        title: 'Space Odyssey',
        year: 2024,
        rating: 'PG-13',
        duration: '2h 45m',
        description: 'Astronauts embark on a mission to colonize a distant planet.',
        poster: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300',
        backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        category: 'trending',
        type: 'movie',
        cast: ['Matt Damon', 'Jessica Chastain', 'Michael Caine'],
        director: 'Ridley Scott'
    },
    {
        id: 4,
        title: 'The Last Kingdom',
        year: 2023,
        rating: 'TV-MA',
        duration: '3 Seasons',
        description: 'A warrior raised by Vikings fights to reclaim his birthright.',
        poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300',
        backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        category: 'trending',
        type: 'series',
        cast: ['Alexander Dreymon', 'Emily Cox', 'David Dawson'],
        director: 'Various'
    },
    {
        id: 5,
        title: 'Mind Heist',
        year: 2023,
        rating: 'PG-13',
        duration: '2h 28m',
        description: 'A thief who steals secrets from people\'s dreams is hired to plant an idea.',
        poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300',
        backdrop: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        category: 'trending',
        type: 'movie',
        cast: ['Leonardo DiCaprio', 'Ellen Page', 'Tom Hardy'],
        director: 'Christopher Nolan'
    },
    // Action Movies
    {
        id: 6,
        title: 'Dark Knight Rises',
        year: 2024,
        rating: 'PG-13',
        duration: '2h 45m',
        description: 'The epic conclusion to the Batman saga.',
        poster: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=300',
        backdrop: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        category: 'action',
        type: 'movie',
        cast: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway'],
        director: 'Christopher Nolan'
    },
    {
        id: 7,
        title: 'Fast & Furious',
        year: 2024,
        rating: 'PG-13',
        duration: '2h 20m',
        description: 'High-octane action with street racers.',
        poster: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=300',
        backdrop: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        category: 'action',
        type: 'movie',
        cast: ['Vin Diesel', 'Paul Walker', 'Dwayne Johnson'],
        director: 'Justin Lin'
    },
    {
        id: 8,
        title: 'Mission Impossible',
        year: 2023,
        rating: 'PG-13',
        duration: '2h 43m',
        description: 'Ethan Hunt takes on his most impossible mission yet.',
        poster: 'https://images.unsplash.com/photo-160035459?w=300',
        backdrop: 'https://images.unsplash.com/photo-160035459?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        category: 'action',
        type: 'movie',
        cast: ['Tom Cruise', 'Simon Pegg', 'Rebecca Ferguson'],
        director: 'Christopher McQuarrie'
    },
    // Comedy Movies
    {
        id: 9,
        title: 'Funny Bones',
        year: 2024,
        rating: 'PG-13',
        duration: '1h 45m',
        description: 'A stand-up comedian finds himself in hilarious situations.',
        poster: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=300',
        backdrop: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        category: 'comedy',
        type: 'movie',
        cast: ['Kevin Hart', 'Dwayne Johnson', 'Jack Black'],
        director: 'Peter Farrelly'
    },
    {
        id: 10,
        title: 'Wedding Crashers',
        year: 2023,
        rating: 'R',
        duration: '1h 58m',
        description: 'Two friends crash weddings for fun until one falls in love.',
        poster: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=300',
        backdrop: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        category: 'comedy',
        type: 'movie',
        cast: ['Owen Wilson', 'Vince Vaughn', 'Rachel McAdams'],
        director: 'David Dobkin'
    },
    // Drama Movies
    {
        id: 11,
        title: 'The Pursuit',
        year: 2024,
        rating: 'PG-13',
        duration: '2h 10m',
        description: 'A father struggles to build a better life for his son.',
        poster: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300',
        backdrop: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        category: 'drama',
        type: 'movie',
        cast: ['Will Smith', 'Jaden Smith', 'Thandie Newton'],
        director: 'Gabriele Muccino'
    },
    {
        id: 12,
        title: 'Beautiful Mind',
        year: 2023,
        rating: 'PG-13',
        duration: '2h 15m',
        description: 'The story of a brilliant mathematician.',
        poster: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300',
        backdrop: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        category: 'drama',
        type: 'movie',
        cast: ['Russell Crowe', 'Jennifer Connelly', 'Ed Harris'],
        director: 'Ron Howard'
    },
    // Sci-Fi Movies
    {
        id: 13,
        title: 'Blade Runner',
        year: 2024,
        rating: 'R',
        duration: '2h 43m',
        description: 'A blade runner must pursue replicants in a dystopian future.',
        poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300',
        backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
        category: 'scifi',
        type: 'movie',
        cast: ['Harrison Ford', 'Ryan Gosling', 'Ana de Armas'],
        director: 'Denis Villeneuve'
    },
    {
        id: 14,
        title: 'Interstellar',
        year: 2023,
        rating: 'PG-13',
        duration: '2h 49m',
        description: 'Explorers travel through a wormhole in space.',
        poster: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300',
        backdrop: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        category: 'scifi',
        type: 'movie',
        cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        director: 'Christopher Nolan'
    },
    {
        id: 15,
        title: 'The Martian',
        year: 2023,
        rating: 'PG-13',
        duration: '2h 24m',
        description: 'An astronaut is stranded on Mars.',
        poster: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300',
        backdrop: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        category: 'scifi',
        type: 'movie',
        cast: ['Matt Damon', 'Jessica Chastain', 'Jeff Daniels'],
        director: 'Ridley Scott'
    }
];

// User authentication state
let currentUser = JSON.parse(localStorage.getItem('netflix_user')) || null;
let myList = JSON.parse(localStorage.getItem('netflix_mylist')) || [];
let watchHistory = JSON.parse(localStorage.getItem('netflix_watch_history')) || [];
let likedMovies = JSON.parse(localStorage.getItem('netflix_liked')) || [];
let currentPlayingMovie = null;
let currentSearchResults = [];
let currentFilter = 'all';
let currentSort = 'relevance';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
    setupEventListeners();
    updateAuthUI();
    loadContinueWatching();
    setupSearch();
});

// Load content into sliders
function loadContent() {
    loadSlider('trending', getMoviesByCategory('trending'));
    loadSlider('action', getMoviesByCategory('action'));
    loadSlider('comedy', getMoviesByCategory('comedy'));
    loadSlider('drama', getMoviesByCategory('drama'));
    loadSlider('scifi', getMoviesByCategory('scifi'));
    
    if (myList.length > 0) {
        loadMyList();
    }
}

// Get movies by category
function getMoviesByCategory(category) {
    return moviesDB.filter(movie => movie.category === category);
}

// Load slider with movies
function loadSlider(sliderId, movies) {
    const slider = document.getElementById(`slider-${sliderId}`);
    if (!slider) return;
    
    slider.innerHTML = '';
    movies.forEach(movie => {
        const inMyList = myList.includes(movie.id);
        const watchProgress = getWatchProgress(movie.id);
        const card = createMovieCard(movie, inMyList, watchProgress);
        slider.appendChild(card);
    });
}

// Create movie card element
function createMovieCard(movie, inMyList, progress = 0) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = movie.id;
    
    card.innerHTML = `
        <img class="card-img" src="${movie.poster}" alt="${movie.title}" loading="lazy">
        <div class="card-body">
            <div class="card-title">${movie.title}</div>
            <div class="card-meta">
                <span>${movie.year}</span>
                <span class="card-badge">${movie.rating}</span>
            </div>
            <div class="card-actions">
                <i class="fas fa-play play-icon" onclick="playContent(${movie.id})" title="Play"></i>
                <i class="fas fa-info-circle info-icon" onclick="showTrailer(${movie.id})" title="More Info"></i>
                <i class="fas ${inMyList ? 'fa-check-circle' : 'fa-plus-circle'} mylist-icon" 
                   onclick="toggleMyList(${movie.id}, event)" 
                   data-id="${movie.id}" 
                   title="${inMyList ? 'Remove from' : 'Add to'} My List"></i>
            </div>
        </div>
        ${progress > 0 ? `
            <div class="card-progress">
                <div class="card-progress-fill" style="width: ${progress}%"></div>
            </div>
        ` : ''}
    `;
    
    return card;
}

// Get watch progress
function getWatchProgress(contentId) {
    const history = watchHistory.find(h => h.contentId === contentId);
    return history ? history.progress : 0;
}

// Load My List
function loadMyList() {
    const myListRow = document.getElementById('myListRow');
    const myListSlider = document.getElementById('slider-mylist');
    
    if (!myListRow || !myListSlider) return;
    
    const myListMovies = moviesDB.filter(movie => myList.includes(movie.id));
    
    if (myListMovies.length > 0) {
        myListRow.style.display = 'block';
        myListSlider.innerHTML = '';
        myListMovies.forEach(movie => {
            const watchProgress = getWatchProgress(movie.id);
            const card = createMovieCard(movie, true, watchProgress);
            myListSlider.appendChild(card);
        });
    } else {
        myListRow.style.display = 'none';
    }
}

// Load Continue Watching
function loadContinueWatching() {
    const continueRow = document.getElementById('continueWatchingRow');
    const continueSlider = document.getElementById('slider-continue');
    
    if (!continueRow || !continueSlider) return;
    
    const continueMovies = watchHistory
        .filter(h => h.progress > 0 && h.progress < 95)
        .map(h => moviesDB.find(m => m.id === h.contentId))
        .filter(m => m);
    
    if (continueMovies.length > 0) {
        continueRow.style.display = 'block';
        continueSlider.innerHTML = '';
        continueMovies.forEach(movie => {
            const progress = getWatchProgress(movie.id);
            const card = createMovieCard(movie, myList.includes(movie.id), progress);
            continueSlider.appendChild(card);
        });
    } else {
        continueRow.style.display = 'none';
    }
}

// Toggle My List
function toggleMyList(movieId, event) {
    if (event) {
        event.stopPropagation();
    }
    
    if (!currentUser) {
        showNotification('Please sign in to add to My List');
        showLoginModal();
        return;
    }
    
    const index = myList.indexOf(movieId);
    
    if (index === -1) {
        myList.push(movieId);
        showNotification('Added to My List');
    } else {
        myList.splice(index, 1);
        showNotification('Removed from My List');
    }
    
    localStorage.setItem('netflix_mylist', JSON.stringify(myList));
    
    // Refresh all sliders to update icons
    refreshAllSliders();
}

// Refresh all sliders
function refreshAllSliders() {
    loadContent();
    loadMyList();
    loadContinueWatching();
}

// Play content (full video)
function playContent(movieId) {
    const movie = moviesDB.find(m => m.id === movieId);
    if (!movie) return;
    
    currentPlayingMovie = movie;
    
    const modal = document.getElementById('videoPlayerModal');
    const videoPlayer = document.getElementById('mainVideoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoDetails = document.getElementById('videoDetails');
    
    videoTitle.textContent = movie.title;
    videoDetails.innerHTML = `
        <span>${movie.year}</span> • <span>${movie.rating}</span> • <span>${movie.duration}</span>
    `;
    
    videoPlayer.src = movie.videoUrl;
    videoPlayer.load();
    
    // Try to resume from watch history
    const history = watchHistory.find(h => h.contentId === movieId);
    if (history && history.progress > 0) {
        videoPlayer.currentTime = (history.progress / 100) * videoPlayer.duration;
    }
    
    // Update like button
    const likeBtn = document.getElementById('likeBtn');
    if (likedMovies.includes(movieId)) {
        likeBtn.innerHTML = '<i class="fas fa-heart" style="color: #e50914;"></i>';
    } else {
        likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    }
    
    // Update my list button in player
    const playerMylistBtn = document.getElementById('playerMylistBtn');
    if (myList.includes(movieId)) {
        playerMylistBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        playerMylistBtn.innerHTML = '<i class="fas fa-plus"></i>';
    }
    
    modal.classList.add('show');
    
    // Setup video event listeners
    setupVideoListeners(videoPlayer, movieId);
}

// Setup video event listeners
function setupVideoListeners(video, movieId) {
    const progressBar = document.getElementById('videoProgress');
    
    video.addEventListener('timeupdate', function() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + '%';
        
        // Save watch history every 10 seconds
        if (Math.floor(video.currentTime) % 10 === 0) {
            saveWatchHistory(movieId, progress);
        }
    });
    
    video.addEventListener('ended', function() {
        showNotification('Playback completed!');
        saveWatchHistory(movieId, 100);
        loadContinueWatching();
    });
    
    // Progress bar seeking
    const progressContainer = document.querySelector('.progress-bar-container');
    progressContainer.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });
}

// Save watch history
function saveWatchHistory(contentId, progress) {
    if (!currentUser) return;
    
    const index = watchHistory.findIndex(h => h.contentId === contentId);
    
    if (index !== -1) {
        watchHistory[index].progress = progress;
        watchHistory[index].lastWatched = new Date().toISOString();
    } else {
        watchHistory.push({
            contentId,
            progress,
            lastWatched: new Date().toISOString()
        });
    }
    
    localStorage.setItem('netflix_watch_history', JSON.stringify(watchHistory));
    loadContinueWatching();
}

// Show trailer
function showTrailer(movieId) {
    const movie = moviesDB.find(m => m.id === movieId);
    if (!movie) return;
    
    document.getElementById('modalTitle').textContent = movie.title + ' - Trailer';
    document.getElementById('modalDesc').textContent = movie.description;
    
    const metaHtml = `
        <p><strong>Release:</strong> ${movie.year}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
    `;
    document.getElementById('modalMeta').innerHTML = metaHtml;
    
    const trailerVideo = document.getElementById('trailerVideo');
    trailerVideo.src = movie.trailerUrl;
    trailerVideo.load();
    
    document.getElementById('trailerModal').classList.add('show');
}

// Close video player
function closeVideoPlayer() {
    const modal = document.getElementById('videoPlayerModal');
    const video = document.getElementById('mainVideoPlayer');
    
    video.pause();
    video.src = '';
    modal.classList.remove('show');
}

// Close trailer modal
function closeTrailerModal() {
    const modal = document.getElementById('trailerModal');
    const video = document.getElementById('trailerVideo');
    
    video.pause();
    video.src = '';
    modal.classList.remove('show');
}

// Toggle like
function toggleLike() {
    if (!currentPlayingMovie) return;
    
    const movieId = currentPlayingMovie.id;
    const likeBtn = document.getElementById('likeBtn');
    
    if (likedMovies.includes(movieId)) {
        likedMovies = likedMovies.filter(id => id !== movieId);
        likeBtn.innerHTML = '<i class="far fa-heart"></i>';
        showNotification('Removed from likes');
    } else {
        likedMovies.push(movieId);
        likeBtn.innerHTML = '<i class="fas fa-heart" style="color: #e50914;"></i>';
        showNotification('Added to likes');
    }
    
    localStorage.setItem('netflix_liked', JSON.stringify(likedMovies));
}

// Add to my list from player
function addToMyListFromPlayer() {
    if (!currentPlayingMovie) return;
    
    toggleMyList(currentPlayingMovie.id, null);
    
    const playerMylistBtn = document.getElementById('playerMylistBtn');
    if (myList.includes(currentPlayingMovie.id)) {
        playerMylistBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        playerMylistBtn.innerHTML = '<i class="fas fa-plus"></i>';
    }
}

// Toggle fullscreen
function toggleFullscreen() {
    const video = document.getElementById('mainVideoPlayer');
    
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

// ============== SEARCH FUNCTIONALITY ==============

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('globalSearchInput');
    const searchDropdown = document.getElementById('searchDropdown');
    
    if (!searchInput) return;
    
    let debounceTimer;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        const query = this.value.trim();
        
        if (query.length < 2) {
            searchDropdown.classList.remove('show');
            return;
        }
        
        debounceTimer = setTimeout(() => {
            performLiveSearch(query);
        }, 300);
    });
    
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            searchDropdown.classList.add('show');
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('show');
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.trim();
            if (query) {
                searchDropdown.classList.remove('show');
                performFullSearch(query);
            }
        }
    });
}

// Perform live search (dropdown)
function performLiveSearch(query) {
    const searchDropdown = document.getElementById('searchDropdown');
    const results = searchMovies(query);
    
    if (results.length === 0) {
        searchDropdown.innerHTML = '<div class="no-results">No results found</div>';
        searchDropdown.classList.add('show');
        return;
    }
    
    // Limit to 5 results for dropdown
    const limitedResults = results.slice(0, 5);
    
    let html = '';
    limitedResults.forEach(movie => {
        const highlightedTitle = highlightText(movie.title, query);
        const highlightedDesc = highlightText(movie.description.substring(0, 50) + '...', query);
        
        html += `
            <div class="search-result-item" onclick="handleSearchResultClick(${movie.id})">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="search-result-info">
                    <div class="search-result-title">${highlightedTitle}</div>
                    <div class="search-result-meta">${movie.year} • ${movie.rating} • ${movie.duration}</div>
                    <div class="search-result-meta">${highlightedDesc}</div>
                </div>
            </div>
        `;
    });
    
    if (results.length > 5) {
        html += `
            <div class="search-result-item" onclick="performFullSearch('${query}')">
                <div style="text-align: center; width: 100%; color: #e50914;">
                    <i class="fas fa-search"></i> View all ${results.length} results
                </div>
            </div>
        `;
    }
    
    searchDropdown.innerHTML = html;
    searchDropdown.classList.add('show');
}

// Handle search result click
function handleSearchResultClick(movieId) {
    document.getElementById('searchDropdown').classList.remove('show');
    document.getElementById('globalSearchInput').value = '';
    showMovieDetails(movieId);
}

// Perform full search (results page)
function performFullSearch(query) {
    document.getElementById('searchDropdown').classList.remove('show');
    document.getElementById('globalSearchInput').value = query;
    
    const results = searchMovies(query);
    currentSearchResults = results;
    
    // Hide home content, show search results
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('searchResultsPage').style.display = 'block';
    document.getElementById('categoryPage').style.display = 'none';
    
    document.getElementById('searchQueryDisplay').innerHTML = `Showing results for: <span>"${query}"</span>`;
    
    displaySearchResults(results);
}

// Display search results
function displaySearchResults(results) {
    const grid = document.getElementById('searchResultsGrid');
    
    if (results.length === 0) {
        grid.innerHTML = `
            <div class="empty-list">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px;"></i>
                <p>No results found for "${document.getElementById('globalSearchInput').value}"</p>
                <p style="font-size: 1rem; margin-top: 10px;">Try different keywords or check your spelling</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = '';
    results.forEach(movie => {
        const inMyList = myList.includes(movie.id);
        const card = createSearchResultCard(movie, inMyList);
        grid.appendChild(card);
    });
}

// Create search result card
function createSearchResultCard(movie, inMyList) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = movie.id;
    
    card.innerHTML = `
        <img class="card-img" src="${movie.poster}" alt="${movie.title}">
        <div class="card-body">
            <div class="card-title">${movie.title}</div>
            <div class="card-meta">
                <span>${movie.year}</span>
                <span class="card-badge">${movie.rating}</span>
            </div>
            <div class="card-meta">
                <span>${movie.type.toUpperCase()}</span>
                <span>${movie.duration}</span>
            </div>
            <div class="card-actions">
                <i class="fas fa-play play-icon" onclick="playContent(${movie.id})" title="Play"></i>
                <i class="fas fa-info-circle info-icon" onclick="showTrailer(${movie.id})" title="More Info"></i>
                <i class="fas ${inMyList ? 'fa-check-circle' : 'fa-plus-circle'} mylist-icon" 
                   onclick="toggleMyList(${movie.id}, event)" 
                   data-id="${movie.id}" 
                   title="${inMyList ? 'Remove from' : 'Add to'} My List"></i>
            </div>
        </div>
    `;
    
    return card;
}

// Filter search results
function filterSearchResults(filter) {
    currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    let filtered = currentSearchResults;
    
    if (filter !== 'all') {
        filtered = currentSearchResults.filter(m => m.type === filter);
    }
    
    filtered = sortResults(filtered, currentSort);
    displaySearchResults(filtered);
}

// Sort search results
function sortSearchResults(sortBy) {
    currentSort = sortBy;
    const filtered = currentFilter === 'all' 
        ? currentSearchResults 
        : currentSearchResults.filter(m => m.type === currentFilter);
    
    const sorted = sortResults(filtered, sortBy);
    displaySearchResults(sorted);
}

// Sort results helper
function sortResults(results, sortBy) {
    switch(sortBy) {
        case 'year':
            return [...results].sort((a, b) => b.year - a.year);
        case 'title':
            return [...results].sort((a, b) => a.title.localeCompare(b.title));
        case 'rating':
            return [...results].sort((a, b) => {
                const ratingOrder = {'TV-MA': 5, 'R': 4, 'PG-13': 3, 'TV-14': 2, 'PG': 1};
                return (ratingOrder[b.rating] || 0) - (ratingOrder[a.rating] || 0);
            });
        default:
            return results;
    }
}

// Search movies function
function searchMovies(query) {
    const lowerQuery = query.toLowerCase().trim();
    
    return moviesDB.filter(movie => {
        return (
            movie.title.toLowerCase().includes(lowerQuery) ||
            movie.description.toLowerCase().includes(lowerQuery) ||
            movie.director.toLowerCase().includes(lowerQuery) ||
            movie.cast.some(actor => actor.toLowerCase().includes(lowerQuery)) ||
            movie.category.toLowerCase().includes(lowerQuery) ||
            movie.type.toLowerCase().includes(lowerQuery) ||
            movie.year.toString().includes(lowerQuery)
        );
    });
}

// Highlight text
function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="search-result-highlight">$1</span>');
}

// Show movie details
function showMovieDetails(movieId) {
    const movie = moviesDB.find(m => m.id === movieId);
    if (movie) {
        showTrailer(movieId);
    }
}

// Show home
function showHome() {
    document.getElementById('homeContent').style.display = 'block';
    document.getElementById('searchResultsPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'none';
    document.getElementById('globalSearchInput').value = '';
    
    // Update active nav
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('.nav-links a[onclick="showHome()"]').classList.add('active');
}

// Show category
function showCategory(category) {
    const categoryMovies = getMoviesByCategory(category);
    const categoryNames = {
        'trending': 'Trending Now',
        'action': 'Action & Adventure',
        'comedy': 'Comedy',
        'drama': 'Drama',
        'scifi': 'Sci-Fi & Fantasy'
    };
    
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('searchResultsPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'block';
    
    document.getElementById('categoryTitle').textContent = categoryNames[category] || category;
    
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    
    categoryMovies.forEach(movie => {
        const inMyList = myList.includes(movie.id);
        const card = createSearchResultCard(movie, inMyList);
        grid.appendChild(card);
    });
}

// Show my list page
function showMyList() {
    const myListMovies = moviesDB.filter(movie => myList.includes(movie.id));
    
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('searchResultsPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'block';
    
    document.getElementById('categoryTitle').textContent = 'My List';
    
    const grid = document.getElementById('categoryGrid');
    
    if (myListMovies.length === 0) {
        grid.innerHTML = `
            <div class="empty-list">
                <i class="fas fa-heart" style="color: #e50914; font-size: 3rem; margin-bottom: 20px;"></i>
                <p>Your list is empty</p>
                <p style="font-size: 1rem; margin-top: 10px;">Add movies and TV shows to your list and they'll appear here.</p>
                <button class="btn btn-primary" onclick="showHome()" style="margin-top: 20px;">Browse Now</button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = '';
    myListMovies.forEach(movie => {
        const card = createSearchResultCard(movie, true);
        grid.appendChild(card);
    });
}

// Filter by type
function filterByType(type) {
    const filteredMovies = moviesDB.filter(m => m.type === type);
    const typeNames = {
        'movie': 'Movies',
        'series': 'TV Shows'
    };
    
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('searchResultsPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'block';
    
    document.getElementById('categoryTitle').textContent = typeNames[type];
    
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    
    filteredMovies.forEach(movie => {
        const inMyList = myList.includes(movie.id);
        const card = createSearchResultCard(movie, inMyList);
        grid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Slider arrows
    document.querySelectorAll('.slider-container').forEach(container => {
        const slider = container.querySelector('.slider');
        const leftArrow = container.querySelector('.arrow-left');
        const rightArrow = container.querySelector('.arrow-right');
        
        if (leftArrow) {
            leftArrow.addEventListener('click', () => {
                slider.scrollBy({ left: -300, behavior: 'smooth' });
            });
        }
        
        if (rightArrow) {
            rightArrow.addEventListener('click', () => {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === ' ' && document.getElementById('videoPlayerModal').classList.contains('show')) {
            e.preventDefault();
            const video = document.getElementById('mainVideoPlayer');
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
        
        if (e.key === 'Escape') {
            closeVideoPlayer();
            closeTrailerModal();
        }
        
        if (e.key === 'f' && document.getElementById('videoPlayerModal').classList.contains('show')) {
            toggleFullscreen();
        }
        
        // Global search shortcut (Ctrl+K)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('globalSearchInput').focus();
        }
    });
}

// Authentication functions
function showLoginModal() {
    document.getElementById('loginModal').classList.add('show');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('show');
}

function showRegisterModal() {
    document.getElementById('registerModal').classList.add('show');
}

function closeRegisterModal() {
    document.getElementById('registerModal').classList.remove('show');
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        const users = JSON.parse(localStorage.getItem('netflix_users')) || [];
        const user = users.find(u => u.email === email && u.password === btoa(password));
        
        if (user) {
            currentUser = { id: user.id, username: user.username, email: user.email };
            localStorage.setItem('netflix_user', JSON.stringify(currentUser));
            showNotification(`Welcome back, ${user.username}!`);
            closeLoginModal();
            updateAuthUI();
            refreshAllSliders();
        } else {
            showNotification('Invalid email or password');
        }
    }
}

// Handle register
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPass = document.getElementById('regConfirmPassword').value;
    
    if (password !== confirmPass) {
        showNotification('Passwords do not match');
        return;
    }
    
    if (username && email && password) {
        const users = JSON.parse(localStorage.getItem('netflix_users')) || [];
        
        if (users.some(u => u.email === email)) {
            showNotification('Email already registered');
            return;
        }
        
        const newUser = {
            id: users.length + 1,
            username,
            email,
            password: btoa(password)
        };
        
        users.push(newUser);
        localStorage.setItem('netflix_users', JSON.stringify(users));
        
        currentUser = { id: newUser.id, username, email };
        localStorage.setItem('netflix_user', JSON.stringify(currentUser));
        
        showNotification(`Welcome, ${username}!`);
        closeRegisterModal();
        updateAuthUI();
        refreshAllSliders();
    }
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('netflix_user');
    myList = [];
    watchHistory = [];
    likedMovies = [];
    localStorage.setItem('netflix_mylist', '[]');
    localStorage.setItem('netflix_watch_history', '[]');
    localStorage.setItem('netflix_liked', '[]');
    showNotification('Logged out successfully');
    updateAuthUI();
    refreshAllSliders();
    showHome();
}

// Update UI based on auth state
function updateAuthUI() {
    const dropdown = document.querySelector('.dropdown-content');
    if (dropdown) {
        if (currentUser) {
            dropdown.innerHTML = `
                <a href="#" onclick="showProfile()">Profile (${currentUser.username})</a>
                <a href="#" onclick="showMyList()">My List</a>
                <a href="#" onclick="logout()">Sign Out</a>
            `;
        } else {
            dropdown.innerHTML = `
                <a href="#" onclick="showLoginModal()">Sign In</a>
                <a href="#" onclick="showRegisterModal()">Sign Up</a>
            `;
        }
    }
    
    // Update avatar with user initial
    if (currentUser) {
        const avatar = document.querySelector('.avatar');
        avatar.style.backgroundImage = `url('https://ui-avatars.com/api/?name=${currentUser.username}&background=e50914&color=fff&size=32')`;
    } else {
        document.querySelector('.avatar').style.backgroundImage = `url('https://i.pravatar.cc/32?u=netflix')`;
    }
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add to My List from hero
function addToMyList(movieId) {
    if (!currentUser) {
        showNotification('Please sign in to add to My List');
        showLoginModal();
        return;
    }
    
    toggleMyList(movieId, null);
}

// Show profile
function showProfile() {
    const stats = `
        Watch History: ${watchHistory.length} items
        My List: ${myList.length} items
        Liked: ${likedMovies.length} items
    `;
    showNotification(stats);
}

// Get random hero movie
function getRandomHeroMovie() {
    const trendingMovies = getMoviesByCategory('trending');
    return trendingMovies[Math.floor(Math.random() * trendingMovies.length)];
}

// Update hero section
function updateHeroSection() {
    const movie = getRandomHeroMovie();
    if (!movie) return;
    
    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `linear-gradient(90deg, #141414 0%, transparent 60%), url('${movie.backdrop}')`;
    document.getElementById('heroTitle').textContent = movie.title;
    document.getElementById('heroDesc').textContent = movie.description;
    
    // Update play button
    const playBtn = document.querySelector('.play-btn');
    playBtn.setAttribute('onclick', `playContent(${movie.id})`);
    
    // Update my list button
    const mylistBtn = document.querySelector('.mylist-btn');
    mylistBtn.setAttribute('onclick', `addToMyList(${movie.id})`);
}

// Call update hero on load
updateHeroSection();
