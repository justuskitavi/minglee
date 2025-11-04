import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./components/welcomePage"
import AuthChoice from "./components/authChoice"
import AuthForm from "./components/authForm"
import About from "./components/aboutPage"
import PrivacyPolicy from "./components/privacyPolicyPage"

export function App(){
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<WelcomePage/>}/>
        <Route path = "/auth-choice" element = {<AuthChoice/>}/>
        <Route path = "/auth-form" element = {<AuthForm/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/privacy-policy" element = {<PrivacyPolicy/>}/>
      </Routes>
    </Router>
  );
};

export default App;