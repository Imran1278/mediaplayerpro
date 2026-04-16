const video = document.getElementById('video-player');

// Video sources (path of the videos)
const videos = ["song.mp4", "song1.mp4", "song2.mp4"]; // Replace with your video paths
let currentVideoIndex = 0;

// Function to toggle play/pause
function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Function to forward video by 10 seconds
function forward() {
    video.currentTime += 10;
}

// Function to backward video by 10 seconds
function backward() {
    video.currentTime -= 10;
}

// Function to play next video
function nextVideo() {
    // Move to the next video, and loop to the start if at the end
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    video.src = videos[currentVideoIndex];
    adjustVideoAspect();  // Adjust aspect ratio based on video
    video.play();
}

// Function to play previous video
function previousVideo() {
    // Move to the previous video, and loop to the end if at the start
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    video.src = videos[currentVideoIndex];
    adjustVideoAspect();  // Adjust aspect ratio based on video
    video.play();
}

// Function to adjust video aspect ratio
function adjustVideoAspect() {
    if (currentVideoIndex === 2) {  // Assuming 3rd video should be in portrait mode
        video.classList.add("portrait");
        video.classList.remove("landscape");
    } else {  // All other videos are in landscape mode
        video.classList.add("landscape");
        video.classList.remove("portrait");
    }
}
