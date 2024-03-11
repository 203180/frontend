import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Movies from "./pages/Movies";

function App() {
  return (
      <Router>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            </Routes>
      </Router>
  );
}

export default App;
