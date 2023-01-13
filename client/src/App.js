import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";


// Import components
import HeroBanner from "./components/Hero/HeroBanner";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonial";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <HeroBanner />
        <About />
        <Services />
        <Testimonials />
        <ImageGallery />
      </Router>

    </div>
  );
}

export default App;
