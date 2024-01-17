import Login from './Components/login'; 
import SignUp from './Components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "391009188824-nonh55ejjoiv94usp8bh7i83j3rjqa9g.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
