import { useEffect, useState } from 'react';
// import { Menu, X, Mail, Facebook, Twitter, Instagram, Linkedin as LinkedIn, ArrowRight } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading for 2 seconds (1 second longer as requested)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <main className="max-w-screen-xl mx-auto">
        <About />
        <Events />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;