import Hero from './sections/Hero.jsx';
import Sobre from './sections/Sobre.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <Sobre />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
