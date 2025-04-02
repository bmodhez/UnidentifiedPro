import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VideoPage from "./components/VideoPage";

const categories = {
  "Trending Now": [
    { id: 1, title: "Hot Summer Fling", src: "/videos/trending1.mp4", thumbnail: "/images/mypic.jpg", views: "1.2M", duration: "12:45" },
    { id: 2, title: "Passionate Encounter", src: "/videos/trending2.mp4", thumbnail: "/images/bgbanner.jpg", views: "890K", duration: "18:30" },
    { id: 3, title: "Intimate Moments", src: "/videos/trending2.mp4", thumbnail: "/images/mira.jpg", views: "2.4M", duration: "22:15" },
    { id: 4, title: "Late Night Desire", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "560K", duration: "15:20" },
    { id: 5, title: "Romantic Getaway", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "1.1M", duration: "25:10" },
    { id: 6, title: "Sensual Experience", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "780K", duration: "19:45" },
    { id: 7, title: "Sensual Experience", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "780K", duration: "19:45" },
    { id: 8, title: "Sensual Experience", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "780K", duration: "19:45" },
    { id: 9, title: "Sensual Experience", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "780K", duration: "19:45" },
    { id: 10, title: "Sensual Experience", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "780K", duration: "19:45" },
    { id: 11, title: "Sensual Experience", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "780K", duration: "19:45" },
    { id: 12, title: "Sensual Experience", src: "/videos/trending2.mp4", thumbnail: "/images/mypic.jpg", views: "780K", duration: "19:45" },

  ],
  "New Releases": [
    { id: 13, title: "Fresh Attraction", src: "/videos/latest1.mp4", thumbnail: "/images/mira.jpg", views: "320K", duration: "14:20" },
    { id: 14, title: "Private Session", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "210K", duration: "16:50" },
    { id: 15, title: "Exclusive Preview", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "430K", duration: "21:15" },
    { id: 16, title: "Secret Rendezvous", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "190K", duration: "17:30" },
    { id: 17, title: "Midnight Fantasy", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "270K", duration: "23:45" },
    { id: 18, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 19, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 20, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 21, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 22, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 23, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 24, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 25, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },
    { id: 26, title: "Forbidden Pleasure", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "350K", duration: "18:20" },

  ],
  "Live Performers": [
    { id: 27, title: "Cam Model - Lena", src: "/videos/latest1.mp4", thumbnail: "/images/mira.jpg", views: "Live", duration: "Online" },
    { id: 28, title: "Cam Model - Sophia", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 29, title: "Cam Model - Mia", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 30, title: "Cam Model - Emma", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 31, title: "Cam Model - Olivia", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 32, title: "Cam Model - Ava", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 33, title: "Cam Model - Ava", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 34, title: "Cam Model - Ava", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 35, title: "Cam Model - Ava", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },
    { id: 36, title: "Cam Model - Ava", src: "/videos/latest2.mp4", thumbnail: "/images/thumb4.jpg", views: "Live", duration: "Online" },

  ],
  "Popular Categories": [
    { id: 40, title: "Amateur", src: "/videos/cat1.mp4", thumbnail: "/images/thumb4.jpg", views: "2.1M", duration: "" },
    { id: 41, title: "Professional", src: "/videos/cat2.mp4", thumbnail: "/images/mira.jpg", views: "1.8M", duration: "" },
    { id: 42, title: "Couples", src: "/videos/cat3.mp4", thumbnail: "/images/mypic.jpg", views: "1.5M", duration: "" },
    { id: 43, title: "Solo", src: "/videos/cat4.mp4", thumbnail: "/images/thumb4.jpg", views: "1.3M", duration: "" },
    { id: 44, title: "Lesbian", src: "/videos/cat5.mp4", thumbnail: "/images/mira.jpg", views: "1.6M", duration: "" },
    { id: 45, title: "Gay", src: "/videos/cat6.mp4", thumbnail: "/images/mypic.jpg", views: "1.4M", duration: "" },
  ]
};

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Trending Now");

  return (
    <div style={styles.app}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logoLink}>
            <span style={styles.logoPart1}>AI</span>
            <span style={styles.logoPart2}>Stream</span>
          </Link>
        </div>
        
        <div style={styles.sidebarSection}>
          <h2 style={styles.sidebarTitle}>Menu</h2>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === category && styles.activeCategoryButton),
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div style={styles.sidebarSection}>
          <h2 style={styles.sidebarTitle}>Account</h2>
          <button style={styles.categoryButton}>My Favorites</button>
          <button style={styles.categoryButton}>History</button>
          <button style={styles.categoryButton}>Settings</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.searchContainer}>
            <input type="text" placeholder="Search videos..." style={styles.searchInput} />
            <button style={styles.searchButton}>
              <i className="fa fa-search" style={styles.searchIcon}></i>
            </button>
          </div>
          <div style={styles.authButtons}>
            <button style={styles.loginButton}>Login</button>
            <button style={styles.signupButton}>Sign Up</button>
          </div>
        </div>
        
        <h1 style={styles.title}>{selectedCategory}</h1>
        <div style={styles.videoGrid}>
          {categories[selectedCategory].map((video) => (
            <div key={video.id} style={styles.card}>
              <Link to={`/video/${video.id}`} style={styles.link}>
                <div style={styles.thumbnailContainer}>
                  <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
                  <div style={styles.overlay}>
                    {video.duration && <span style={styles.durationBadge}>{video.duration}</span>}
                    {video.views === "Live" ? (
                      <span style={styles.liveBadge}>LIVE</span>
                    ) : (
                      <span style={styles.viewsBadge}>{video.views} views</span>
                    )}
                  </div>
                </div>
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
      <div style={styles.navContainer}>
        <Link to="/" style={styles.navLogoLink}>
          <span style={styles.navLogoPart1}>AI</span>
          <span style={styles.navLogoPart2}>Stream</span>
        </Link>
        <div style={styles.navLinks}>
          <Link to="/premium" style={styles.navLink}>Premium</Link>
          <Link to="/categories" style={styles.navLink}>Categories</Link>
          <Link to="/models" style={styles.navLink}>Models</Link>
          <Link to="/blog" style={styles.navLink}>Blog</Link>
        </div>
      </div>
    </nav>
  );
}


// Add this Footer component
function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>AI Stream</h3>
          <p style={styles.footerText}>
            The premium adult entertainment platform with high-quality content and exclusive features.
          </p>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerSubheading}>Quick Links</h4>
          <ul style={styles.footerList}>
            <li><Link to="/" style={styles.footerLink}>Home</Link></li>
            <li><Link to="/categories" style={styles.footerLink}>Categories</Link></li>
            <li><Link to="/models" style={styles.footerLink}>Models</Link></li>
            <li><Link to="/premium" style={styles.footerLink}>Premium</Link></li>
          </ul>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerSubheading}>Legal</h4>
          <ul style={styles.footerList}>
            <li><Link to="/terms" style={styles.footerLink}>Terms of Service</Link></li>
            <li><Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link></li>
            <li><Link to="/age-verification" style={styles.footerLink}>Age Verification</Link></li>
            <li><Link to="/dmca" style={styles.footerLink}>DMCA</Link></li>
          </ul>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerSubheading}>Support</h4>
          <ul style={styles.footerList}>
            <li><Link to="/help" style={styles.footerLink}>Help Center</Link></li>
            <li><Link to="/contact" style={styles.footerLink}>Contact Us</Link></li>
            <li><Link to="/faq" style={styles.footerLink}>FAQ</Link></li>
            <li><Link to="/feedback" style={styles.footerLink}>Feedback</Link></li>
          </ul>
        </div>
      </div>
      
      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} AI Stream. All rights reserved.
        </p>
        <div style={styles.socialLinks}>
          <a href="#" style={styles.socialLink} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={styles.socialLink} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={styles.socialLink} aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

// Update your App component to include the Footer
export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:videoId" element={<VideoPage videos={categories} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// Styles
const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    background: "#0f0f13",
    color: "#e0e0e0",
    fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
  },
  sidebar: {
    width: "280px",
    background: "#1a1a24",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 0 15px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  },
  logoContainer: {
    padding: "0 20px 20px",
    borderBottom: "1px solid #2a2a35",
    marginBottom: "20px",
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "bold",
  },
  logoPart1: {
    color: "#ff4d6d",
  },
  logoPart2: {
    color: "#ffffff",
    marginLeft: "5px",
  },
  sidebarSection: {
    padding: "0 20px",
    marginBottom: "25px",
  },
  sidebarTitle: {
    fontSize: "14px",
    textTransform: "uppercase",
    color: "#6d6d80",
    marginBottom: "15px",
    letterSpacing: "1px",
  },
  categoryButton: {
    background: "transparent",
    color: "#d1d1d1",
    border: "none",
    padding: "12px 15px",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    ':hover': {
      background: "#2a2a35",
    },
  },
  activeCategoryButton: {
    background: "#2a2a35",
    color: "#ffffff",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: "30px 40px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  searchContainer: {
    display: "flex",
    width: "400px",
  },
  searchInput: {
    flex: 1,
    padding: "12px 15px",
    border: "none",
    background: "#1a1a24",
    color: "#ffffff",
    borderRadius: "6px 0 0 6px",
    fontSize: "16px",
    outline: "none",
    '::placeholder': {
      color: "#6d6d80",
    },
  },
  searchButton: {
    background: "#ff4d6d",
    border: "none",
    padding: "0 20px",
    borderRadius: "0 6px 6px 0",
    cursor: "pointer",
    transition: "background 0.2s ease",
    ':hover': {
      background: "#ff3355",
    },
  },
  searchIcon: {
    color: "#ffffff",
    fontSize: "16px",
  },
  authButtons: {
    display: "flex",
    gap: "15px",
  },
  loginButton: {
    background: "transparent",
    border: "1px solid #6d6d80",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ':hover': {
      borderColor: "#ff4d6d",
      color: "#ff4d6d",
    },
  },
  signupButton: {
    background: "#ff4d6d",
    border: "none",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.2s ease",
    ':hover': {
      background: "#ff3355",
    },
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "#ffffff",
  },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#1a1a24",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ':hover': {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    },
  },
  thumbnailContainer: {
    position: "relative",
    paddingTop: "56.25%", // 16:9 aspect ratio
    overflow: "hidden",
  },
  thumbnail: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "15px",
  },
  durationBadge: {
    background: "rgba(0,0,0,0.7)",
    color: "#ffffff",
    padding: "3px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    alignSelf: "flex-end",
  },
  liveBadge: {
    background: "#ff4d6d",
    color: "#ffffff",
    padding: "3px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  viewsBadge: {
    color: "#d1d1d1",
    fontSize: "12px",
    marginTop: "5px",
  },
  videoTitle: {
    fontSize: "16px",
    margin: "15px",
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  link: {
    textDecoration: "none",
  },
  navbar: {
    background: "#1a1a24",
    color: "#ffffff",
    padding: "15px 40px",
    boxShadow: "0 2px 15px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  navLogoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLogoPart1: {
    color: "#ff4d6d",
  },
  navLogoPart2: {
    color: "#ffffff",
    marginLeft: "5px",
  },
  navLinks: {
    display: "flex",
    gap: "25px",
  },
  navLink: {
    color: "#d1d1d1",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.2s ease",
    ':hover': {
      color: "#ff4d6d",
    },
  },
  footer: {
    backgroundColor: '#1a1a24',
    color: '#ffffff',
    padding: '40px 20px 20px',
    borderTop: '1px solid #2a2a35',
    marginTop: 'auto',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    paddingBottom: '20px',
  },
  footerSection: {
    marginBottom: '20px',
  },
  footerHeading: {
    color: '#ff4d6d',
    fontSize: '20px',
    marginBottom: '15px',
  },
  footerSubheading: {
    color: '#ffffff',
    fontSize: '16px',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  footerText: {
    color: '#d1d1d1',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerLink: {
    color: '#d1d1d1',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'block',
    padding: '5px 0',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#ff4d6d',
    },
  },
  footerBottom: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '20px',
    borderTop: '1px solid #2a2a35',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  copyright: {
    color: '#6d6d80',
    fontSize: '12px',
    margin: '10px 0',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    color: '#d1d1d1',
    fontSize: '18px',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#ff4d6d',
    },
  },
};