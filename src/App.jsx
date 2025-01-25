import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home';
import AuthPage from './component/AuthPage';
import Services from './component/Services';
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";


function App() {
  return (
    <Router>
      

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
      
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
