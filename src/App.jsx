import { useState } from "react";
// import "./App.scss";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import JoinNow from "./screen/JoinNow";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import SignIn from "./screen/SignIn";
function App() {
  const [count, setCount] = useState(0);
  AOS.init();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<JoinNow />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
