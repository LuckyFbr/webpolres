import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import BeritaTerbaru from "../components/BeritaTerbaru";
import FotoKegiatan from "../components/FotoKegiatan";
import LayananUtama from "../components/LayananUtama";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <BeritaTerbaru />
      <LayananUtama />
      <FotoKegiatan />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
