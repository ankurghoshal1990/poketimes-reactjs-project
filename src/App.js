import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:post_id" element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
