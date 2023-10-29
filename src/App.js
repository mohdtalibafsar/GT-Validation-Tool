import "./App.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import Navbar from "./Navbar/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <div className="left_panel">
          <Routes>
            <Route path="/panel" element={<LeftPanel />} />{" "}
          </Routes>
        </div>

        <div className="right_panel">
          <div className="newContainer">
            <button className="special">Data 1</button>
            <button>Summary</button>
            <button>Discriminatory Test:Reference Model</button>
            <button>Discriminatory Test:Validation Model</button>
          
            <button>Calibration Test</button>
            <button>Stability Check</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
