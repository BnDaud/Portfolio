import "./App.css";
import Display_card from "./pages/display_card";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Cvpage from "./pages/Cvpage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App bg-navcolor min-h-screen">
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Display_card />} />
            <Route path={"/about"} element={<About />} />
            <Route path="/createcv" element={<Cvpage />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
