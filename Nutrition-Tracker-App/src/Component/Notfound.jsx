import React from 'react';
import '../Styles/Notfound.css'; // Link to your CSS file

const NotFound = () => {
  return (
    <div className="Container">
      <div className="illustration"></div> {/* You can use a custom image here */}
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/">Go Back Home</a>
    </div>
  );
}

export default NotFound;
