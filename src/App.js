import './App.css';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Service from './components/Service';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <Features />
    <About />
    <Testimonial />
    <Service />
    <Roadmap />
    <Footer />
    </div>
  );
}

export default App;
