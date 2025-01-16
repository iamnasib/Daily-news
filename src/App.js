import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("color-theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Navbar
        title="Daily News"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <News
              key="general"
              apiKey={apiKey}
              country="us"
              category="general"
            />
          }
        />

        <Route
          path="/business"
          element={
            <News
              key="business"
              apiKey={apiKey}
              country="us"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              apiKey={apiKey}
              country="us"
              category="entertainment"
            />
          }
        />

        <Route
          path="/health"
          element={
            <News key="health" apiKey={apiKey} country="us" category="health" />
          }
        />
        <Route
          path="/science"
          element={
            <News
              key="science"
              apiKey={apiKey}
              country="us"
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News key="sports" apiKey={apiKey} country="us" category="sports" />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              apiKey={apiKey}
              country="us"
              category="technology"
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
