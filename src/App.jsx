import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import MeetOurClients from "./pages/MeetOurClients";
import StrategicApproach from "./pages/StrategicApproach";
import Inquiries from "./pages/Inquiries";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex-grow h-full">
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="meetOurClients" element={<MeetOurClients />} />
          <Route path="strategicApproach" element={<StrategicApproach />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
