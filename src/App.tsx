import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/enquiries">Enquiry</Link>
        <Switch>
          <Route path="/enquiries">enquiries</Route>
          <Route path="/">home</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
