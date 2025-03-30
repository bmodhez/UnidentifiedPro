import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VideoPage from "./components/VideoPage"; // Video Playback Page

const categories = {
  "Trending Videos": [
    { id: 1, title: "Trending Video 1", src: "/videos/trending1.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 2, title: "Trending Video 2", src: "/videos/trending2.mp4", thumbnail: "/images/bgbanner.jpg" },
    { id: 3, title: "BlowJob Sunny Leone and Johny sins Fuck", src: "/videos/trending2.mp4", thumbnail: "/images/mira.jpg" },
    { id: 4, title: "Trending Video 4", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 5, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 6, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 7, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 8, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 9, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 10, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 11, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },
    { id: 12, title: "Trending Video 5", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg" },

  ],
  "Latest Uploads": [
    { id: 13, title: "Latest Video 1", src: "/videos/latest1.mp4", thumbnail: "/images/mira.jpg" },
    { id: 14, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 15, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 16, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 17, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 18, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 19, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 20, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 21, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 22, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 23, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 24, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 25, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 26, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
  ],
  "Live Cams": [
    { id: 27, title: "Latest Video 1", src: "/videos/latest1.mp4", thumbnail: "/images/mira.jpg" },
    { id: 28, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 29, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 30, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 31, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 32, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 33, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 34, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 35, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 36, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 37, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 38, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
    { id: 39, title: "Latest Video 2", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg" },
  ],
};

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Trending Videos");

  return (
    <div style={styles.app}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h1 style={styles.siteName}>
          <Link to="/" style={styles.logoLink}>AI Stream</Link>
        </h1>
        <h2 style={styles.sidebarTitle}>Categories</h2>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.categoryButton,
              backgroundColor: selectedCategory === category ? "#444" : "transparent",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>{selectedCategory}</h1>
        <div style={styles.videoGrid}>
          {categories[selectedCategory].map((video) => (
            <div key={video.id} style={styles.card}>
              <Link to={`/video/${video.id}`} style={styles.link}>
                <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
                <h3 style={styles.videoTitle}>{video.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1>
        <Link to="/" style={styles.logoLink}>AI stream</Link>
      </h1>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoPage videos={categories} />} />
      </Routes>
    </Router>
  );
}

// Styles
const styles = {
    app: {
      display: "flex",
      minHeight: "100vh",
      background: "#121212",
      color: "#fff",
    },
    sidebar: {
      width: "250px",
      background: "#1e1e1e",
      color: "#fff",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
    },
    siteName: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
      color: "#ffcc00",
    },
    logoLink: {
      textDecoration: "none",
      color: "#ffcc00",
    },
    sidebarTitle: {
      fontSize: "18px",
      marginBottom: "15px",
      borderBottom: "1px solid #444",
      paddingBottom: "5px",
    },
    categoryButton: {
      background: "linear-gradient(145deg, #222, #1a1a1a)",
      color: "#ffcc00",
      border: "none",
      padding: "12px",
      textAlign: "left",
      cursor: "pointer",
      fontSize: "16px",
      borderRadius: "8px",
      transition: "0.3s",
      boxShadow: "4px 4px 8px #0a0a0a, -4px -4px 8px #2a2a2a",
      marginBottom: "10px",
    },
    content: {
      flex: 1,
      padding: "30px",
      textAlign: "center",
    },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#ffcc00",
    },
    videoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      padding: "20px",
    },
    card: {
      width: "100%",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#1a1a1a",
      boxShadow: "4px 4px 8px #0a0a0a, -4px -4px 8px #2a2a2a",
      transition: "0.3s",
      cursor: "pointer",
    },
    thumbnail: {
      width: "100%",
      borderRadius: "12px 12px 0 0",
      transition: "0.3s",
    },
    videoTitle: {
      fontSize: "18px",
      margin: "10px 0",
      fontWeight: "bold",
      padding: "10px",
      color: "#fff",
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
    },
    navbar: {
      background: "#1a1a1a",
      color: "#ffcc00",
      padding: "15px",
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "bold",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
  };
