import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AllCourses from './components/AllCourses';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import MachineLearning from './components/MachineLearning';
import Career from './components/Career';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="active">All</NavLink></li>
            <li><NavLink to="/fullstackdevelopment" activeClassName="active">Full Stack Development</NavLink></li>
            <li><NavLink to="/datascience" activeClassName="active">Data Science</NavLink></li>
            <li><NavLink to="/cybersecurity" activeClassName="active">Cyber Security</NavLink></li>
            <li><NavLink to="/MachineLearning" activeClassName="active">Machine Learning</NavLink></li>
            <li><NavLink to="/career" activeClassName="active">Career</NavLink></li>

          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<AllCourses />} />
          <Route path="/fullstackdevelopment" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/MachineLearning" element={<MachineLearning />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

