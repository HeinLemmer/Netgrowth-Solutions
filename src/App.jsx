import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[5rem] lg:pt-[5rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
