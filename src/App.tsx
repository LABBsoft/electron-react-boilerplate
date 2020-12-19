import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TeamTable from './TeamTable';

const Hello = () => {
  return (
    <div>
      <h1>LaLo's Fantasy Tool</h1>
      <TeamTable />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
