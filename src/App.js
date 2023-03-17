import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SingleReview from "./components/SingleReview";
import NotFoundErr from "./components/NotFoundErr";

import Reviews from "./components/Reviews";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:category" element={<Reviews />} />
        <Route path="/review/:review_id" element={<SingleReview />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFoundErr />} />
      </Routes>
    </div>
  );
}

export default App;
