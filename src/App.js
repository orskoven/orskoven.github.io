import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import AcedemusExamIOSGif from './AcedemusExamIOSGif';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Simon's Portfolio</h1>
        <p className="intro-text">
        </p>
      </header>
      <main className="content">
      <AcedemusExamIOSGif />
  <AboutMe />
  <Skills />
  <Projects />
</main>
    </div>
  );
};

export default App;
