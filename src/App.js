import "./App.css";
import Display_card from "./pages/display_card";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App bg-navcolor min-h-screen">
      <Navbar>
        <Display_card />
      </Navbar>
    </div>
  );
}

export default App;
