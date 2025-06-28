import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import OurWork from "./pages/OurWork";
import BeneficiaryStories from "./pages/BeneficiaryStories";
import RegionalMap from "./pages/RegionalMap";
import NewsEvents from "./pages/NewsEvents";
import OurImpactSubMenu from "./pages/OurImpactSubMenu";
import AwardsRecognition from "./pages/AwardsRecognition";
import Donation from "./pages/Donation";
import GetInvolved from "./pages/GetInvolved";

function App() {
  return (
    <Router>
      <TopBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/our-team" element={<OurTeam />} />

        {/* what we do */}
        <Route path="/what-we-do/our-work" element={<OurWork />} />
        <Route
          path="/what-we-do/beneficiary-stories"
          element={<BeneficiaryStories />}
        />
        <Route path="/what-we-do/regional-map" element={<RegionalMap />} />

        {/* Mews & events */}
        <Route path="/news-events" element={<NewsEvents />} />

        {/* Our Impact */}
        <Route path="/our-impact/our-impact" element={<OurImpactSubMenu />} />
        <Route
          path="/our-impact/awards-recognition"
          element={<AwardsRecognition />}
        />

        {/* Take Action */}
        <Route path="/take-action/donation" element={<Donation />} />
        <Route path="/take-action/get-involved" element={<GetInvolved />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
