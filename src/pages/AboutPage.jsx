import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          Welcome to <strong>"Feedback UI,"</strong> a cutting-edge React application designed for leaving valuable feedback about products and services. The project is now integrated with Firebase for data storage and user authentication.
        </p>
        <p><strong>Version:</strong> 1.0.0</p>
        <p>
          This project leverages several key technologies:
        </p>
        <ul>
          <li><strong>React.js:</strong> The core framework driving our user-friendly interface.</li>
          <li><strong>Context API:</strong> Empowering efficient state management for seamless data sharing.</li>
          <li><strong>React Icons:</strong> Enhancing visual appeal and interactivity with icon components.</li>
          <li><strong>React Router DOM:</strong> Enabling smooth navigation and routing within the application.</li>
          <li><strong>Firebase:</strong> Integrated for secure data storage and user authentication.</li>
          <li><strong>CSS:</strong> Styling for a visually appealing and user-friendly design.</li>
        </ul>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
