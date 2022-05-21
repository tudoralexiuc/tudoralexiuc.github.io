import Homepage from "./pages/homepage"
import About from "./pages/about"
import CV from "./pages/cv"
import AvailableWork from "./pages/availablework"
import Sneak from "./pages/sneak"
import F1Grandstands from "./pages/f1grandstands"
import AgentK9 from "./pages/agentk9"
import SaunaKoning from "./pages/saunakoning"
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/availablework" element={<AvailableWork />} />
          <Route path="/sneak" element={<Sneak />} />
          <Route path="/f1grandstands" element={<F1Grandstands />} />
          <Route path="/agentk9" element={<AgentK9 />} />
          <Route path="/saunakoning" element={<SaunaKoning />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
