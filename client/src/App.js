import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";


// Import components
import HeroBanner from "./components/Hero/HeroBanner";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <HeroBanner />
        <About />
        <Services />
      </Router>

    </div>
  );
}

export default App;
