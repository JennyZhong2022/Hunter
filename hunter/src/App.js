import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <>
      <Nav /> {/* Move Nav outside of Routes */}
      <Home />
    </>
  );
}

export default App;
