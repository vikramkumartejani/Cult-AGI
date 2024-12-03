import AdvancedUtility from "./components/AdvancedUtility";
import CultagiCommunity from "./components/CultagiCommunity";
import CultagiServes from "./components/CultagiServes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import VideoFrame from "./components/VideoFrame";
import WhyCultaGiWhyAGI from "./components/WhyCultaGiWhyAGI";

export default function Home() {
  return (
    <div className="relative">
      <div className="lg:hidden block absolute top-0 w-full ">
        <Navbar/>
      </div>
      <Hero/>
      <VideoFrame/>
      <Tokenomics/>
      <AdvancedUtility/>
      <Roadmap/>
      <CultagiServes/>
      <CultagiCommunity/>
      <WhyCultaGiWhyAGI/>
      <Footer/>
    </div>
  );
}
