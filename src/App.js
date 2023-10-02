import About from "./components/AboutSection";
import Challenges from "./components/ChallengeSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import OldWebsite from "./components/OldSection";

function App() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <About/>
      <Challenges/>
      <OldWebsite/>
      <Footer/>
    </div>
  );
}

export default App;
