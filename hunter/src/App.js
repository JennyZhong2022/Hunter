import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Growth from "./components/GrowthPage/Growth";
import Review from "./components/ReviewPage/Review";
import Contact from "./components/ContactPage/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Growth />
      <Review />
      <Contact />
    </>
  );
}

export default App;
