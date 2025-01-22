import Footer from "../components/Footer";
import Prizes from "../components/Prizes";
import Query from "../components/Query";
import AboutSection from "./AboutSection";
import Banner from "./HeroSection";
import Navbar from "./Navbar";
import Popup from "./Popup";
import Slideshow from "./Slideshow";
import TextScroll from "./TextScroll";
import MainRules from "./MainRules";
import PastEvents from "./PastEvents";
import Levels from "./Levels";
import Prizess from "./Prizess";

const Starting = () => {
  return (
    <>
      <Navbar />
      <Popup />
      <Banner />
      <TextScroll />
      <AboutSection />
      <PastEvents/>
      {/*<HeroSection1/>*/}
      
      
      {/*<Themes />*/}
      {/*<Schedule />*/}
      <Levels/>
      <Prizess/>
      <MainRules/>
      <Slideshow />
      {/*<Sponsor />*/}
      <Query />
      <Footer />
    </>
  );
};

export default Starting;
