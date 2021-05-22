import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./containers/Home/Home";
import  Boards  from "./containers/Boards/Boards";
import Board from "./containers/Board/Board";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/boards'>Boards</Link>
            </li>

          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/boards"  component={Boards} />
        <Route path="/board/:id"  component={Board} />
      </main>
    </Router>
  );
}

export default App;
