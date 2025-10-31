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

const Register = () => (
  <div className="min-h-[60vh] px-6 py-10">
    <h1 className="text-3xl font-bold mb-2">Register</h1>
    <p className="text-gray-600 dark:text-gray-300">Create your account to access investor and partner features.</p>
  </div>
);
const SignIn = () => (
  <div className="min-h-[60vh] px-6 py-10">
    <h1 className="text-3xl font-bold mb-2">Sign In</h1>
    <p className="text-gray-600 dark:text-gray-300">Welcome back. Please sign in to continue.</p>
  </div>
);

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

          {/* Auth */}
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Visions */}
          <Route path="/why-invest" element={<WhyInvest />} />
          <Route path="/funding-plan" element={<FundingPlan />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/become-a-partner" element={<BecomePartner />} />

          {/* Investment */}
          <Route path="/pig-farming" element={<PigFarming />} />
          <Route path="/breeding-program" element={<BreedingProgram />} />
          <Route path="/training-services" element={<TrainingServices />} />

          {/* Impact */}
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
          <Route path="/youth-empowerment" element={<YouthEmpowerment />} />

          {/* Services Hub */}
          <Route path="/services" element={<ServicesHub />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App