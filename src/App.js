import './App.css';
import Navbar from './Navbar'
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import Features from "./pages/Features"
import { Route, Routes } from "react-router-dom"

function App() { 
  console.log(window.location.pathname)
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/friday-app" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/features" element={<Features/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;