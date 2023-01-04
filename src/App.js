import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

export default class extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News pageSize={10} country='us' category="General" />}></Route>
            <Route path="/Business" element={<News pageSize={10} country='us' category="Business" />}></Route>
            <Route path="/Entertainment" element={<News pageSize={10} country='us' category="Entertainment" />}></Route>
            <Route path="/General" element={<News pageSize={10} country='us' category="General" />}></Route>
            <Route path="/Health" element={<News pageSize={10} country='us' category="Health" />}></Route>
            <Route path="/Science" element={<News pageSize={10} country='us' category="Science" />}></Route>
            <Route path="/sports" element={<News pageSize={10} country='us' category="sports" />}></Route>
            <Route path="/Technology" element={<News pageSize={10} country='us' category="Technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
