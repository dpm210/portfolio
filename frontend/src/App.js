import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react'

// Importing components
import Experience from './components/Experience'
import Intro from './components/Intro'
import Music from './components/Music'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
},[])

console.log(projects)

  return (
    <div className="App">
      <header className="App-header">

        {/* Routing */}
          <NavBar />
          <Intro />
          <Experience />
          <Projects projects={projects} />
          <Music />
          <Contact />
          <Footer />
      </header>
    </div>
  );
}

export default App;
