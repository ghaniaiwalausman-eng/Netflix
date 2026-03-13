<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix Clone - Watch Movies & TV Shows</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar" id="navbar">
        <div class="nav-left">
            <div class="logo" onclick="location.reload()">NETFLIX</div>
            <ul class="nav-links">
                <li><a href="#" onclick="showHome()" class="active">Home</a></li>
                <li><a href="#" onclick="filterByType('series')">TV Shows</a></li>
                <li><a href="#" onclick="filterByType('movie')">Movies</a></li>
                <li><a href="#" onclick="showMyList()">My List</a></li>
            </ul>
        </div>
        <div class="nav-right">
            <div class="search-container">
                <i class="fas fa-search search-icon"></i>
                <input type="text" class="search-input" id="globalSearchInput" placeholder="Search for movies, TV shows...">
                <div class="search-results-dropdown" id="searchDropdown"></div>
            </div>
            <i class="fas fa-bell"></i>
            <div class="profile-dropdown">
                <div class="avatar"></div>
                <div class="dropdown-content">
                    <a href="#" onclick="showLoginModal()">Sign In</a>
                    <a href="#" onclick="showRegisterModal()">Sign Up</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content Area -->
    <div id="homeContent">
        <!-- Hero Section -->
        <section class="hero" id="hero">
            <div class="hero-content">
                <h1 class="hero-title" id="heroTitle">Cyber Storm</h1>
                <p class="hero-desc" id="heroDesc">A elite hacker discovers a conspiracy that threatens to bring down the entire city's infrastructure. As chaos unfolds, she must race against time to stop a digital apocalypse.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary play-btn" onclick="playContent(1)">
                        <i class="fas fa-play"></i> Play
                    </button>
                    <button class="btn btn-secondary mylist-btn" onclick="addToMyList(1)">
                        <i class="fas fa-plus"></i> My List
                    </button>
                </div>
            </div>
        </section>

        <!-- Main Content Rows -->
        <main class="main-content">
            <!-- Trending Now Row -->
            <div class="row">
                <div class="row-header">
                    <h2>Trending Now</h2>
                    <a href="#" class="view-all" onclick="showCategory('trending')">View All</a>
                </div>
                <div class="slider-container">
                    <button class="slider-arrow arrow-left"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider" id="slider-trending"></div>
                    <button class="slider-arrow arrow-right"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <!-- Action Movies Row -->
            <div class="row">
                <div class="row-header">
                    <h2>Action & Adventure</h2>
                    <a href="#" class="view-all" onclick="showCategory('action')">View All</a>
                </div>
                <div class="slider-container">
                    <button class="slider-arrow arrow-left"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider" id="slider-action"></div>
                    <button class="slider-arrow arrow-right"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <!-- Comedy Row -->
            <div class="row">
                <div class="row-header">
                    <h2>Comedy</h2>
                    <a href="#" class="view-all" onclick="showCategory('comedy')">View All</a>
                </div>
                <div class="slider-container">
                    <button class="slider-arrow arrow-left"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider" id="slider-comedy"></div>
                    <button class="slider-arrow arrow-right"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <!-- Drama Row -->
            <div class="row">
                <div class="row-header">
                    <h2>Drama</h2>
                    <a href="#" class="view-all" onclick="showCategory('drama')">View All</a>
                </div>
                <div class="slider-container">
                    <button class="slider-arrow arrow-left"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider" id="slider-drama"></div>
                    <button class="slider-arrow arrow-right"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <!-- Sci-Fi Row -->
            <div class="row">
                <div class="row-header">
                    <h2>Sci-Fi & Fantasy</h2>
                    <a href="#" class="view-all" onclick="showCategory('scifi')">View All</a>
                </div>
                <div class="slider-container">
                    <button class="slider-arrow arrow-left"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider" id="slider-scifi"></div>
                    <button class="slider-arrow arrow-right"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <!-- My List Row -->
            <div class="row" id="myListRow" style="display: none;">
                <div class="row-header">
                    <h2>My List</h2>
                    <a href="#" class="view-all" onclick="showMyList()">View All</a>
                </div>
                <div class="slider-container">
                    <button class="slider-arrow arrow-left"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider" id="slider-mylist"></div>
                    <button class="slider-arrow arrow-right"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <!-- Continue Watching Row -->
            <div class="row" id="continueWatchingRow" style="display: none;">
                <div class="row-header">
                    <h2>Continue Watching</h2>
                    <a href="#" class="view-all">View All</a>
                </div>
                <div class="slider-container">
                    <button class="slider-arrow arrow-left"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider" id="slider-continue"></div>
                    <button class="slider-arrow arrow-right"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </main>
    </div>

    <!-- Search Results Page -->
    <div id="searchResultsPage" style="display: none;">
        <div class="search-results-header">
            <h1>Search Results</h1>
            <p id="searchQueryDisplay"></p>
        </div>
        <div class="search-filters">
            <button class="filter-btn active" onclick="filterSearchResults('all')">All</button>
            <button class="filter-btn" onclick="filterSearchResults('movie')">Movies</button>
            <button class="filter-btn" onclick="filterSearchResults('series')">TV Shows</button>
            <select class="sort-select" onchange="sortSearchResults(this.value)">
                <option value="relevance">Sort by: Relevance</option>
                <option value="year">Sort by: Year</option>
                <option value="title">Sort by: Title</option>
                <option value="rating">Sort by: Rating</option>
            </select>
        </div>
        <div class="search-results-grid" id="searchResultsGrid"></div>
    </div>

    <!-- Category Page -->
    <div id="categoryPage" style="display: none;">
        <div class="category-header" id="categoryHeader">
            <h1 id="categoryTitle"></h1>
        </div>
        <div class="category-grid" id="categoryGrid"></div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
        </div>
        <div class="footer-links">
            <div class="footer-column">
                <a href="#">Audio and Subtitles</a>
                <a href="#">Media Center</a>
                <a href="#">Privacy</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="footer-column">
                <a href="#">Audio Description</a>
                <a href="#">Investor Relations</a>
                <a href="#">Legal Notices</a>
            </div>
            <div class="footer-column">
                <a href="#">Help Center</a>
                <a href="#">Jobs</a>
                <a href="#">Cookie Preferences</a>
            </div>
            <div class="footer-column">
                <a href="#">Gift Cards</a>
                <a href="#">Terms of Use</a>
                <a href="#">Corporate Information</a>
            </div>
        </div>
        <p class="copyright">© 2025 Netflix Clone. All rights reserved.</p>
    </footer>

    <!-- Video Player Modal -->
    <div class="modal" id="videoPlayerModal">
        <div class="modal-content fullscreen">
            <div class="modal-header">
                <h3 id="videoTitle">Now Playing</h3>
                <button class="modal-close" onclick="closeVideoPlayer()">&times;</button>
            </div>
            <div class="modal-body video-player-body">
                <video id="mainVideoPlayer" class="video-player" controls autoplay>
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-controls-custom">
                    <div class="progress-bar-container">
                        <div class="progress-bar" id="videoProgress"></div>
                    </div>
                    <div class="video-info">
                        <div class="video-details" id="videoDetails"></div>
                        <div class="video-actions">
                            <button onclick="toggleLike()" id="likeBtn"><i class="far fa-heart"></i></button>
                            <button onclick="addToMyListFromPlayer()" id="playerMylistBtn"><i class="fas fa-plus"></i></button>
                            <button onclick="toggleFullscreen()"><i class="fas fa-expand"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Trailer Modal -->
    <div class="modal" id="trailerModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modalTitle">Movie Trailer</h3>
                <button class="modal-close" onclick="closeTrailerModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="video-container" id="videoContainer">
                    <video id="trailerVideo" class="trailer-video" controls>
                        <source src="" type="video/mp4">
                    </video>
                </div>
                <div class="modal-info">
                    <div class="modal-desc" id="modalDesc"></div>
                    <div class="modal-meta" id="modalMeta"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content small">
            <div class="modal-header">
                <h3>Sign In</h3>
                <button class="modal-close" onclick="closeLoginModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="loginForm" onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <input type="email" id="loginEmail" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" id="loginPassword" placeholder="Password" required>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Sign In</button>
                </form>
                <div class="auth-footer">
                    <p>New to Netflix? <a href="#" onclick="showRegisterModal()">Sign up now</a></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Register Modal -->
    <div class="modal" id="registerModal">
        <div class="modal-content small">
            <div class="modal-header">
                <h3>Sign Up</h3>
                <button class="modal-close" onclick="closeRegisterModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="registerForm" onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <input type="text" id="regUsername" placeholder="Username" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="regEmail" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" id="regPassword" placeholder="Password" required>
                    </div>
                    <div class="form-group">
                        <input type="password" id="regConfirmPassword" placeholder="Confirm Password" required>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Sign Up</button>
                </form>
                <div class="auth-footer">
                    <p>Already have an account? <a href="#" onclick="showLoginModal()">Sign in</a></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Notification -->
    <div class="notification" id="notification"></div>

    <script src="script.js"></script>
</body>
</html>
