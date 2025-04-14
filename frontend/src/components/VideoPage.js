// pages/VideoPage.jsx

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
    return <h1 style={{ textAlign: "center", marginTop: "50px", color: "#fff" }}>Video Not Found</h1>;
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.logo}>AI Stream</h1>
      </div>

      {/* Video Title */}
      <h1 style={styles.videoTitle}>{selectedVideo.title}</h1>

      {/* Video Player */}
      <div style={styles.videoContainer}>
        {selectedVideo.src.includes("faphouselive.com") || selectedVideo.src.includes("mega.nz") ? (
          <iframe
            src={selectedVideo.src}
            style={styles.video}
            title={selectedVideo.title}
            allow="camera; microphone; autoplay"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video controls style={styles.video}>
            <source src={selectedVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Video Description */}
      <div style={styles.description}>
        <h2 style={styles.sectionTitle}>Description</h2>
        <p style={styles.descriptionText}>
          This is the description for <strong>{selectedVideo.title}</strong>. Enjoy watching!
        </p>
      </div>

      {/* Recommended Videos Section */}
      <div style={styles.recommended}>
        <h2 style={styles.sectionTitle}>Recommended Videos</h2>
        <ul style={styles.recommendedList}>
          {recommendedVideos.map((video) => (
            <li key={video.id} style={styles.recommendedItem}>
              <Link to={`/video/${video.id}`} style={styles.recommendedLink}>
                {video.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Positional Settings */}
      <div style={styles.positionalSettings}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Type here to search"
            style={styles.searchInput}
          />
        </div>
        <div style={styles.checkboxContainer}>
          <input type="checkbox" id="settingsCheckbox" style={styles.checkbox} />
          <label htmlFor="settingsCheckbox" style={styles.checkboxLabel}></label>
        </div>
      </div>

      {/* Back to Home Button */}
      <Link to="/" style={styles.homeLink}>← Back to Home</Link>
    </div>
  );
}

// Styles (Responsive)
const styles = {
  page: { 
    textAlign: "center", 
    padding: "20px",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    minHeight: "100vh"
  },

  header: {
    marginBottom: "30px"
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ffcc00",
    margin: "0",
    padding: "10px 0"
  },

  videoTitle: { 
    fontSize: "24px", 
    fontWeight: "bold", 
    marginBottom: "20px",
    color: "#ffcc00"
  },

  videoContainer: { 
    display: "flex", 
    justifyContent: "center", 
    width: "100%", 
    marginBottom: "30px" 
  },

  video: {
    width: "100%",
    maxWidth: "1300px",
    height: "690px", // Adjust height for a good aspect ratio
    margin: "0 auto",
    display: "block",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)"
  },

  description: { 
    marginTop: "20px", 
    padding: "20px", 
    background: "#2a2a2a", 
    borderRadius: "8px", 
    textAlign: "left", 
    maxWidth: "900px", 
    margin: "20px auto",
    fontSize: "16px"
  },

  sectionTitle: {
    color: "#ffcc00",
    fontSize: "20px",
    marginBottom: "15px"
  },

  descriptionText: {
    lineHeight: "1.6",
    margin: "0"
  },

  recommended: { 
    marginTop: "30px", 
    textAlign: "left", 
    maxWidth: "900px", 
    margin: "auto",
    padding: "0 20px"
  },

  recommendedList: {
    listStyleType: "none",
    padding: "0",
    margin: "0"
  },

  recommendedItem: {
    padding: "10px 0",
    borderBottom: "1px solid #333"
  },

  recommendedLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    display: "block",
    transition: "color 0.3s",
    ":hover": {
      color: "#ffcc00"
    }
  },

  positionalSettings: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "900px",
    margin: "30px auto",
    padding: "0 20px"
  },

  searchContainer: {
    flex: "1"
  },

  searchInput: {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #444",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    fontSize: "14px"
  },

  checkboxContainer: {
    display: "flex",
    alignItems: "center"
  },

  checkbox: {
    marginRight: "10px"
  },

  checkboxLabel: {
    fontSize: "14px"
  },

  homeLink: { 
    display: "block", 
    marginTop: "30px", 
    textDecoration: "none", 
    color: "#ffcc00", 
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px 0"
  },
};

export default VideoPage;
