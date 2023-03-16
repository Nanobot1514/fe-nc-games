import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SingleReview from "./components/SingleReview";
import { useState } from "react";
import Reviews from "./components/Reviews";

function App() {
  const [user, setUser] = useState("grumpy19");
  // temp state to make comments work, will create user context later with sign in page

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:category" element={<Reviews />} />
        <Route
          path="/review/:review_id"
          element={<SingleReview user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
