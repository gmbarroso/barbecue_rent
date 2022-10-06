import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Root from './pages/Root'
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
}

export default App;
