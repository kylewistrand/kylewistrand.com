import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './views/Main.js';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
