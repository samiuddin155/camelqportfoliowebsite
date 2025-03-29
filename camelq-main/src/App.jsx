import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Solutions from "./sections/Features.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Faq />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
