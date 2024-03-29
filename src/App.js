import Login from "./Components/login";
import SignUp from "./Components/signup";
import Home from "./Components/home";
import DetailedService from "./Components/detailedservice";
import Allservices from "./Components/allservices";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingForm from "./Components/bookingForm";
import "./App.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import AOS from "aos";
import "aos/dist/aos.css";

const clientId =
  "391009188824-nonh55ejjoiv94usp8bh7i83j3rjqa9g.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });

    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <>
      <script src="bower_components/aos/dist/aos.js"></script> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allservices" element={<Allservices />} />
          <Route path="/detailedservice" element={<DetailedService />} />
          {/* <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/booknow" element={<BookingForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
