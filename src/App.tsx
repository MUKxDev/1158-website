import "aos/dist/aos.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Connect from "./sections/Connect";
import Discover from "./sections/Discover";
import Main from "./sections/Main";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Main />
      <Discover />
      <Connect />
    </div>
  );
}

export default App;
