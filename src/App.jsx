import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import MeetOurClients from "./pages/MeetOurClients";
import StrategicApproach from "./pages/StrategicApproach";
import Inquiries from "./pages/Inquiries";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow h-full mt-[75px] md:mt-[101px]">
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="meetOurClients" element={<MeetOurClients />} />
          <Route path="strategicApproach" element={<StrategicApproach />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
