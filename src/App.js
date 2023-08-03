import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Simon's Portfolio</h1>
        <p className="intro-text">
          I'm an aspiring computer science AP student, a lover of Apple, coding, tech, and the endless wonders of the internet. In the quiet corners of my room, you'll find me playing a soft melody on the guitar or diving into a gripping novel. But when I lace up my running shoes or indulge in a movie, my love for life's simpler pleasures shines through.
        </p>
      </header>
      <main className="content">
  <AboutMe />
  <Skills />
  <Projects />
</main>
    </div>
  );
};

export default App;
