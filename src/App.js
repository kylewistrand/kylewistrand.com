import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './views/Main.js';
import ProjectDetail from './views/ProjectDetail.js';
import ScrollToTop from "./components/ScrollToTop";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/project/:id' component={ProjectDetail} />
        </Switch>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
