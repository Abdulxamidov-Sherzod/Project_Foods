import React from "react";
import "./components/main.css";
import Navbar from "./components/navbar";
import { routes } from "./components/routes/config";
import Routes from "./components/routes/routes";
function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes routes={routes} />
      </main>
    </>
  );
}

export default App;

