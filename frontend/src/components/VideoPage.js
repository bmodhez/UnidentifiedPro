import React from "react";
import { useParams, Link } from "react-router-dom";

function VideoPage({ videos }) {
  const { videoId } = useParams();
  let selectedVideo = null;
  let recommendedVideos = [];

  // Find the selected video
  Object.values(videos).forEach((category) => {
    const foundVideo = category.find((video) => video.id === parseInt(videoId));
    if (foundVideo) {
      selectedVideo = foundVideo;
    }
  });

  // Get recommended videos (excluding the selected one)
  if (selectedVideo) {
    Object.values(videos).forEach((category) => {
      category.forEach((video) => {
        if (video.id !== selectedVideo.id) {
          recommendedVideos.push(video);
        }
      });
    });

    // Limit to 5 recommended videos
    recommendedVideos = recommendedVideos.slice(0, 5);
  }

  if (!selectedVideo) {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Video Not Found</h1>;
  }

  return (
    <div style={styles.page}>
      {/* Video Title */}
      <h1 style={styles.videoTitle}>{selectedVideo.title}</h1>

      {/* Video Player */}
      <div style={styles.videoContainer}>
        <video controls style={styles.video}>
          <source src={selectedVideo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Description */}
      <div style={styles.description}>
        <h2>Description</h2>
        <p>
          This is a sample description for <strong>{selectedVideo.title}</strong>. 
          Enjoy watching!
        </p>
      </div>

      {/* Recommended Videos Section */}
      <div style={styles.recommended}>
        <h2>Recommended Videos</h2>
        <div style={styles.videoGrid}>
          {recommendedVideos.map((video) => (
            <Link key={video.id} to={`/video/${video.id}`} style={styles.link}>
              <div style={styles.card}>
                <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
                <h3 style={styles.videoTitleSmall}>{video.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <Link to="/" style={styles.homeLink}>← Back to Home</Link>
    </div>
  );
}

// Styles (Responsive)
const styles = {
  page: { textAlign: "center", padding: "20px" },

  videoTitle: { fontSize: "22px", fontWeight: "bold", marginBottom: "10px" },

  videoContainer: { 
    display: "flex", 
    justifyContent: "center", 
    width: "100%", 
    marginBottom: "20px" 
  },

  video: { 
    width: "90%", 
    maxWidth: "900px", 
    borderRadius: "8px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
  },

  description: { 
    marginTop: "20px", 
    padding: "15px", 
    background: "#f9f9f9", 
    borderRadius: "8px", 
    textAlign: "left", 
    maxWidth: "900px", 
    margin: "20px auto",
    fontSize: "16px"
  },

  recommended: { 
    marginTop: "20px", 
    textAlign: "left", 
    maxWidth: "900px", 
    margin: "auto" 
  },

  videoGrid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
    gap: "15px",
    justifyContent: "center"
  },

  card: { 
    width: "100%", 
    maxWidth: "200px", 
    borderRadius: "8px", 
    padding: "10px", 
    background: "#fff", 
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)", 
    textAlign: "center"
  },

  thumbnail: { 
    width: "100%", 
    borderRadius: "8px", 
    cursor: "pointer" 
  },

  videoTitleSmall: { 
    fontSize: "14px", 
    marginTop: "5px", 
    fontWeight: "bold" 
  },

  link: { 
    textDecoration: "none", 
    color: "black" 
  },

  homeLink: { 
    display: "block", 
    marginTop: "20px", 
    textDecoration: "none", 
    color: "#ffcc00", 
    fontSize: "18px" 
  },
};

export default VideoPage;
