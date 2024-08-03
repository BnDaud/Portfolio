import "./App.css";
import Display_card from "./pages/display_card";
import Navbar from "./components/navbar";
import About from "./pages/about";

function App() {
  return (
    <div className="App bg-navcolor min-h-screen">
      <Navbar>
        <About />
      </Navbar>
    </div>
  );
}

export default App;
