import Preloader from './components/Preloader.js';
import Footer from './components/Footer.js';
import Latestprojects from './components/Latestprojects.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Landingsection from './components/Landingsection.js';
import Header from './components/Header.js';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>

  <Header />
  <Landingsection />
  <About />
  <Services />
  <Latestprojects />
  <Footer />
  <Preloader />

    </>
  );
}

export default App;
