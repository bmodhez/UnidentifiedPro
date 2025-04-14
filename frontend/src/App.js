import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VideoPage from "./components/VideoPage";



const categories = {
  "Trending Now": [
    { id: 1, title: "First time honeymoon in home very hard", src: "https://mega.nz/embed/2wxC2AyL#uS2zzx8eO3EozwzMtFk5Su_5OodDMzGI-3EGe3DcBq0", thumbnail: "/images/v1.webp", views: "1.2M", duration: "12:45" },
    { id: 2, title: "Horny Devar fucks Gorgeous Newly Married Indian Bhabhi ( Hindi Audio )", src: "https://mega.nz/embed/mlhkQS4T#bX6nyD-55_CJnPt47Q6d7J42FWQZ1u9R2JfngM35plE", thumbnail: "/images/v2.webp", views: "890K", duration: "18:30" },
    { id: 3, title: "Tight Pussy Desi Bhabhi in Saree Fucked Hard by Devar in Hindi Audio", src: "https://mega.nz/embed/GgAkhYwL#MOVkjf4B6pmk4rojHhJIu4vDyC7Osc8WRD13qm-HI6E", thumbnail: "/images/v3.webp", views: "2.4M", duration: "22:15" },
    { id: 4, title: "The house maid sucked the master's dick.", src: "https://mega.nz/embed/voxSiYqK#huxqRBknwNALZgqGqzYVsOLtnpUK7pMbcAoEvHP-_Ms", thumbnail: "/images/v4.webp", views: "560K", duration: "15:20" },
    { id: 5, title: "Sunny Leone, is the worlds most famous Naughty Office Girl", src: "https://mega.nz/embed/3xYUyAgS#RPCwnj_4nOprRVMOIjyr2jGbnvnD58zAYHcjl6m0vwc", thumbnail: "/images/sunny.webp", views: "1.1M", duration: "25:10" },
    { id: 6, title: "Hot Indian Bhabhi convinced her brother-in-law and had sex with him", src: "https://mega.nz/embed/boQlEYYZ#PLIWQmSEsOg7SdFXBaQoCrBZ0c2UqCsQ4ZgIYOl09sE", thumbnail: "/images/v6.webp", views: "780K", duration: "19:45" },
    { id: 7, title: "Indian village house wife kissing housband", src: "https://mega.nz/embed/vpJWzI7b#yoUXftpsp3lJ2RPkWEEHr0S0H9oA3skM62dFLqyLNKA", thumbnail: "/images/v7.webp", views: "780K", duration: "19:45" },
    { id: 8, title: "Indian step mom fucked in doggy style!", src: "https://mega.nz/embed/nl40DYZR#mX5u6Mb9rhgWjQ97LTnwEp_OF23qeF0o2lca_NuvNZo", thumbnail: "/images/v8.webp", views: "780K", duration: "19:45" },
    { id: 9, title: "Boyfriend and girlfriend fucked in the garden at night", src: "https://mega.nz/embed/y45TCBiD#AYVVtpSpgOg-EXdBdv7K7PngwQgqejOVB70ko6eI82Q", thumbnail: "/images/v9.webp", views: "780K", duration: "19:45" },
    { id: 10, title: "18+ Beauty Sofia Moaning Loud While Fucking Hard in Doggy Style and Missionary", src: "https://mega.nz/embed/Lsgh1KYY#1QL0PJ_jBvxky4AKSc0yEoRWr-ZVRdj2nLFJLpxupy4", thumbnail: "/images/v10.webp", views: "780K", duration: "19:45" },
    { id: 11, title: "Indian Hot Sexy Bhabhi Fuck with desi saree", src: "https://mega.nz/embed/mhZ1GRiT#yQfWh4RMSkj-ieSt9_BxHoaqz8qF1lUn8ZRD7TWDqGo", thumbnail: "/images/v11.webp", views: "780K", duration: "19:45" },
    { id: 12, title: "Fuck My Step Mother While My Wife Not in Home, My Slut Step Mother Enjoy with Me While My Wife Not in Home, Step Mother Blow Job", src: "https://mega.nz/embed/SspEER6I#Zy_-XA6cXZOXbN8yxdP3saJxo85uImVBD_bYcqtTCSA", thumbnail: "/images/v12.webp", views: "780K", duration: "19:45" },

  ],
  "New Releases": [
    { id: 13, title: "Desi Big Milk Sex Video", src: "https://mega.nz/embed/78xTUKAK#vT_lVyfGrZ-wzABUP_sbpSgNWvpHWRRPju8snv8yVFo", thumbnail: "/images/v13.webp", views: "320K", duration: "14:20" },
    { id: 14, title: "Mallu boss and hot maid fuck in bedroom while boss's wife not in home, Cheatin g mallu maid hot fuck with boss, Maid and boss", src: "https://mega.nz/embed/r8JwyaxY#OYfiKueAjizse7OQPontGuHoe8AP5D1QPoaCvd14NNk", thumbnail: "/images/v14.webp", views: "210K", duration: "16:50" },
    { id: 15, title: "Alyx Star's Big Tits Are the Game Winner", src: "https://mega.nz/embed/P44ixLDD#Ho-GYwV67RSrvklS8XVUIBwnhUxzh5ZE2E9LKkOYVZo", thumbnail: "/images/v15.webp", views: "430K", duration: "21:15" },
    { id: 16, title: "Kamasutra of Hot Indian Desi Porn Star Pratibha", src: "https://mega.nz/embed/6lRiHQKB#RD75Z6hhLmg0tugfJ-xE8KOmnwwmINaM7lUrguQQnYY", thumbnail: "/images/v16.webp", views: "190K", duration: "17:30" },
    { id: 17, title: "Close up pussy fuck by using silicon condom", src: "https://mega.nz/embed/20BRUbgL#p2A5S3Qb2x6-7peBwVxypoqiarPD_zaDIHGyJK8vYZY", thumbnail: "/images/v17.webp", views: "270K", duration: "23:45" },
    { id: 18, title: "Bhabhi ke boor me rang laga ke pela HOLI SPECIALe", src: "https://mega.nz/embed/P8whzC6A#Xtt4xK0zZ4ftncaS-rYmELE4wJ76SulEe-la8gA0RHk", thumbnail: "/images/v18.webp", views: "350K", duration: "18:20" },
    { id: 19, title: "Village hot bhabhi sex with his Husband", src: "https://mega.nz/embed/TkxwQKJa#KP1knidQSHPdsIDfIXXMdxtK400mvXAExtnjDWk1ylE", thumbnail: "/images/v19.webp", views: "350K", duration: "18:20" },
    { id: 20, title: "Sofia Leone XX Big Hot Boobs", src: "https://mega.nz/embed/SkoVgTxB#6-wcEkDPAHp-u8fq00b8LrgVPqfvz6zH8CtVZ2R8NIE", thumbnail: "/images/v20.webp", views: "350K", duration: "18:20" },
    { id: 21, title: "Boyfriend and girlfriend fucked in the garden at night", src: "https://mega.nz/embed/H8plCb7Q#zhIgSIS8r2ng_uHNHq9aPTa498QP6hTXzHl9Iq1NtuM", thumbnail: "/images/v21.webp", views: "350K", duration: "18:20" },
    { id: 22, title: "Fully close up nude Desi Marathi couple sex", src: "https://mega.nz/embed/m1JDUaYA#fI8sGlqgGq0DplJkq5hsKsa-fYsDRF1vaxaGfAzHet4", thumbnail: "/images/v22.webp", views: "350K", duration: "18:20" },
    { id: 23, title: "Beautiful Bengali village housewife fucking and saree and black blouse remove boob sucking", src: "https://mega.nz/embed/3gInmYiD#T4F0OCZJJVEJFLO97-YvtsqIyEZFH-wLkoaKC20oRSM", thumbnail: "/images/v23.webp", views: "350K", duration: "18:20" },
    { id: 24, title: "Mia Kalifa New XX Round Big Boobs ", src: "https://mega.nz/embed/Lgx21ZZR#hEQMe2IWpNBzs4Xcb9dHE7uBEyBcqdn_gXVWswVLpNI", thumbnail: "/images/v24.webp", views: "350K", duration: "18:20" },
    { id: 25, title: "Indian girlfriend fucked by lover before her marriage", src: "https://mega.nz/embed/OwQBCRxD#Td8XrUlAHvqvK38FvvFP-x_il9HxgRoRQAvnopxt38s", thumbnail: "/images/v25.webp", views: "350K", duration: "18:20" },
    { id: 26, title: "Big Tit step sister Fucking her brother in law xxx videos,step Brother and stepSister XXX fuck while their families are outside", src: "https://mega.nz/embed/nl40DYZR#mX5u6Mb9rhgWjQ97LTnwEp_OF23qeF0o2lca_NuvNZo", thumbnail: "/images/v10.webp", views: "350K", duration: "18:20" },

  ],
  "Live Performers": [
    { id: 27, title: "Cam Model - Shenaya", src: "https://faphouselive.com/Shenaya-4U", thumbnail: "/images/liv1.webp", views: "Live", duration: "Online" },
    { id: 28, title: "Cam Model - Neha Veer", src: "https://faphouselive.com/Neha-veer", thumbnail: "/images/liv2.webp", views: "Live", duration: "Online" },
    { id: 29, title: "Cam Model - Tanisha", src: "https://faphouselive.com/Tanisha-1", thumbnail: "/images/liv3.webp", views: "Live", duration: "Online" },
    { id: 30, title: "Cam Model - Horny Nancy", src: "https://faphouselive.com/hornynancy123", thumbnail: "/images/liv4.webp", views: "Live", duration: "Online" },
    { id: 31, title: "Cam Model - Mia", src: "https://faphouselive.com/Something_pork2", thumbnail: "/images/liv5.webp", views: "Live", duration: "Online" },
    { id: 32, title: "Cam Model - Riya Sexy", src: "https://faphouselive.com/Riya_35_sexy", thumbnail: "/images/liv6.webp", views: "Live", duration: "Online" },
    { id: 33, title: "Cam Model - Sparkling Queen", src: "https://faphouselive.com/sparkling_queen", thumbnail: "/images/liv7.webp", views: "Live", duration: "Online" },
    { id: 34, title: "Cam Model - Cute Sexy Teacher", src: "https://faphouselive.com/Cute_Sexy_Teacher_69", thumbnail: "/images/liv8.webp", views: "Live", duration: "Online" },
    { id: 35, title: "Cam Model - Divya Girl", src: "https://faphouselive.com/Divya_girl", thumbnail: "/images/liv10.webp", views: "Live", duration: "Online" },
    { id: 36, title: "Cam Model - Lunatica", src: "https://faphouselive.com/LunaticaBae", thumbnail: "/images/liv9.webp", views: "Live", duration: "Online" },

  ],
  "Popular Categories": [
    { id: 40, title: "Amateur", src: "https://mega.nz/embed/boQlEYYZ#PLIWQmSEsOg7SdFXBaQoCrBZ0c2UqCsQ4ZgIYOl09sE", thumbnail: "/images/v6.webp", views: "2.1M", duration: "" },
    { id: 41, title: "Professional", src: "https://mega.nz/embed/Lsgh1KYY#1QL0PJ_jBvxky4AKSc0yEoRWr-ZVRdj2nLFJLpxupy4", thumbnail: "/images/v10.webp", views: "1.8M", duration: "" },
    { id: 42, title: "Couples", src: "https://mega.nz/embed/m1JDUaYA#fI8sGlqgGq0DplJkq5hsKsa-fYsDRF1vaxaGfAzHet4", thumbnail: "/images/v25.webp", views: "1.5M", duration: "" },
    { id: 43, title: "Solo", src: "https://mega.nz/embed/OwQBCRxD#Td8XrUlAHvqvK38FvvFP-x_il9HxgRoRQAvnopxt38s", thumbnail: "/images/v28.webp", views: "1.3M", duration: "" },
    { id: 44, title: "Lesbian", src: "https://mega.nz/embed/r8JwyaxY#OYfiKueAjizse7OQPontGuHoe8AP5D1QPoaCvd14NNk", thumbnail: "/images/v14.webp", views: "1.6M", duration: "" },
    { id: 45, title: "Gay", src: "https://mega.nz/embed/P8whzC6A#Xtt4xK0zZ4ftncaS-rYmELE4wJ76SulEe-la8gA0RHk", thumbnail: "/images/v18.webp", views: "1.4M", duration: "" },
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
            <span style={styles.logoPart1}>The</span>
            <span style={styles.logoPart2}>Lundflix</span>
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
            <input type ="text" placeholder="Search videos..." style={styles.searchInput} />
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
          <span style={styles.navLogoPart1}>KaamwaliCam</span>
          
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