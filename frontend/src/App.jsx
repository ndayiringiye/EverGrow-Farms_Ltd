import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import InteractiveCard from "./Components/ShowCase";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { 
  WhyInvest,
  FundingPlan,
  Financials,
  BecomePartner,
  PigFarming,
  BreedingProgram,
  TrainingServices,
  SocialImpact,
  EnvironmentalImpact,
  YouthEmpowerment,
  ServicesHub
} from './pages';
import Register from "./Pages/Register";
import { SignIn } from "./Pages/SignIn";
export const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b1b3a] dark:text-white transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <InteractiveCard />
            </>
          } />

          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/why-invest" element={<WhyInvest />} />
          <Route path="/funding-plan" element={<FundingPlan />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/become-a-partner" element={<BecomePartner />} />

          <Route path="/pig-farming" element={<PigFarming />} />
          <Route path="/breeding-program" element={<BreedingProgram />} />
          <Route path="/training-services" element={<TrainingServices />} />

          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
          <Route path="/youth-empowerment" element={<YouthEmpowerment />} />

          <Route path="/services" element={<ServicesHub />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App