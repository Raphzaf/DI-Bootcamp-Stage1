class Video {
      constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
      }

      watch() {
        alert(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
      }
    }

    const videosData = [
      { title: "Intro to HTML", uploader: "Charlie", time: 200 },
      { title: "JavaScript Basics", uploader: "Dana", time: 350 },
      { title: "Advanced CSS", uploader: "Eva", time: 450 },
      { title: "React for Beginners", uploader: "Frank", time: 600 },
      { title: "Node.js Crash Course", uploader: "Grace", time: 720 }
    ];

    const videos = videosData.map(video => new Video(video.title, video.uploader, video.time));

    const container = document.getElementById('videoContainer');

    videos.forEach((video, index) => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';

      videoCard.innerHTML = `
        <div class="video-title">${video.title}</div>
        <p><strong>Uploader:</strong> ${video.uploader}</p>
        <p><strong>Duration:</strong> ${video.time} seconds</p>
        <button class="watch-button" data-index="${index}">Watch</button>
      `;

      container.appendChild(videoCard);
    });

    container.addEventListener('click', function(e) {
      if (e.target.classList.contains('watch-button')) {
        const idx = e.target.getAttribute('data-index');
        videos[idx].watch();
      }
    });