import React from "react";

const NotFound: React.FC = () => (
  <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/" style={{
      display: "inline-block",
      marginTop: "2rem",
      padding: "0.75rem 2rem",
      background: "#007bff",
      color: "#fff",
      borderRadius: "4px",
      textDecoration: "none"
    }}>Go Home</a>
  </div>
);

export default NotFound; 