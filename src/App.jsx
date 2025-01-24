import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home';
import AuthPage from './component/AuthPage';
import Services from './component/Services';

function App() {
  return (
    <Router>
      

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
