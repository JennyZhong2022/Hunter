import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/HomePage/Home";
import About from "./components/About/About";
import Growth from "./components/GrowthPage/Growth";
import Review from "./components/ReviewPage/Review";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Growth />
      <Review />
    </>
  );
}

export default App;
