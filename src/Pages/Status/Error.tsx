import React from "react";

const Error: React.FC = () => (
  <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
    <h1>Something Went Wrong</h1>
    <p>We're sorry, an unexpected error has occurred.</p>
    <a href="/" style={{
      display: "inline-block",
      marginTop: "2rem",
      padding: "0.75rem 2rem",
      background: "#dc3545",
      color: "#fff",
      borderRadius: "4px",
      textDecoration: "none"
    }}>Go Home</a>
  </div>
);

export default Error; 