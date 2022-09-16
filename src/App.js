import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
          <Route path="/" component={HomePage} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
