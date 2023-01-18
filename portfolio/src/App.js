import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-Poppins bg-purple-800">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
