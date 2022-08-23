import "aos/dist/aos.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./sections/Features";
import Discover from "./sections/Discover";
import Main from "./sections/Main";
import Investment from "./sections/Investment";
import { useEffect } from "react";
import AOS from "aos";
import Divider from "./components/Divider";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="h-auto bg-black">
      <Header />
      <Footer />
      <Main />
      <Discover />
      <Divider></Divider>
      <Features />
      <Investment />
    </div>
  );
}

export default App;
