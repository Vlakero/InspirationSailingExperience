import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Pricing from './components/Pricing';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Chartering from './components/Chartering';
import Private from './components/Private';
import Public from './components/Public';
import Sailing from './components/Sailing';
import './styles.css';

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Experiences />
      <Private />
      <Sailing />
      <Pricing />
      <Chartering />
      <Calendar />
      <Contact />
    </Layout>
  );
}
