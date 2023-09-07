import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./shared/Footer";


function App() {
  return (
    <>
      <Header></Header>
      <Home />
      <About></About>
      <Projects></Projects>
      <Contact />
      <Footer></Footer>
    </>
  );
}

export default App;
