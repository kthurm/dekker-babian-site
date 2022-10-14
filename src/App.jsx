import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import MeetOurClients from "./pages/MeetOurClients";
import StrategicApproach from "./pages/StrategicApproach";
import Inquiries from "./pages/Inquiries";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="meetOurClients" element={<MeetOurClients />} />
        <Route path="strategicApproach" element={<StrategicApproach />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
