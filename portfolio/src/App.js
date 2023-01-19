import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-black-600 font-Poppins">
      <Navbar />
      <Home />
      <Projects />
      <Services />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
