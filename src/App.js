import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import CustomerService from "./pages/CustomerService";
import Mobile from "./pages/Mobile";
import Privacy from "./pages/Privacy";
import TermsOfUse from "./pages/TermsOfUse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/customer-service" element={<CustomerService />} />
          <Route exact path="/mobile" element={<Mobile />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
