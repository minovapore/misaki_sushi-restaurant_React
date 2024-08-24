import CardsSections from "./CardsSection";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import HomeSection2 from "./components/HomeSection2";
import Footer from "./components/Footer";


export default function App() {
  return(
    <>
      <Navbar/>
      <Header/>
      <HomeSection/>
      <CardsSections/>
      <HomeSection2/>
      <Footer/>
    </>
  );
}


