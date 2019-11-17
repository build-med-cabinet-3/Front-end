import React from "react";
import "./App.css";
import AppHeader from "./components/appheader";
import DashNav from "./components/dashnav";
import AppFooter from "./components/appfooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>
      <DashNav />
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
