import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <>Error</>;
    }
    return (
      <Router>
        <Navbar title="Daily News" />
        <Routes>
          <Route
            path="/"
            element={<News key="general" country="us" category="general" />}
          />

          <Route
            path="/business"
            element={<News key="business" country="us" category="business" />}
          />
          <Route
            path="/entertainment"
            element={
              <News key="entertainment" country="us" category="entertainment" />
            }
          />

          <Route
            path="/health"
            element={<News key="health" country="us" category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" country="us" category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" country="us" category="sports" />}
          />
          <Route
            path="/technology"
            element={
              <News key="technology" country="us" category="technology" />
            }
          />
        </Routes>
      </Router>
    );
  }
}
