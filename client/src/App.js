import HeroBanner from "./components/Hero/HeroBanner";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <HeroBanner />
      </Router>

    </div>
  );
}

export default App;
