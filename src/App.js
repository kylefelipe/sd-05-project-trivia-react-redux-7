import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import Inicio from './Pages/Inicio';
import Jogo from './Pages/Jogo';
import Feedback from './Pages/Feedback';
import Ranking from './Pages/Ranking';
import NotFound from './Pages/NotFound';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="suaVez">
          SUA VEZ
        </p>
        <Switch>
          <Route path="/ranking" component={Ranking} />
          <Route path="/jogo" component={Jogo} />
          <Route path="/feedback" component={Feedback} />
          <Route exact path="/" component={Inicio} />
          <Route component={NotFound} />
        </Switch>
      </header>
    </div>
  );
}
