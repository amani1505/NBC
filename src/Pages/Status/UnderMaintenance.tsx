import React from "react";

const UnderMaintenance: React.FC = () => (
  <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
    <h1>We'll Be Back Soon!</h1>
    <p>This page is currently under maintenance. Please check back later.</p>
    <a href="/" style={{
      display: "inline-block",
      marginTop: "2rem",
      padding: "0.75rem 2rem",
      background: "#ffc107",
      color: "#212529",
      borderRadius: "4px",
      textDecoration: "none"
    }}>Go Home</a>
  </div>
);

export default UnderMaintenance; 