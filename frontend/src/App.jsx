import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import Home from "./Components/ShowCase"
import InteractiveCard from "./Components/ShowCase"
export const App = () => {
  return (
    <div>
       <Navbar />
       <HeroSection />
       <InteractiveCard />
       <Home />
    </div>
  )
}
export default App