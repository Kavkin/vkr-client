import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Enquries from "./pages/Enquries";
import CreateEnquiry from "./pages/Enquries/create";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/enquiries">Enquiry</Link>
        <Link to="/enquiries/create">CreateEnquiry</Link>
        <Switch>
          <Route exact path="/enquiries">
            <Enquries />
          </Route>
          <Route path="/enquiries/create">
            <CreateEnquiry />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
