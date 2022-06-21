import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

/*
The Riddle:
hint: context
1db useCounter hook!!!
home-ba
profile-ba
sajat, de megorzi a sajatjat re-render eseten
es nem local/session storage
*/
