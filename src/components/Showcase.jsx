import React, { useContext, useState, useEffect, useCallback } from 'react';
import { LangContext } from './Layout';
import './Showcase.css';

const IMAGES = [
  'images/1a.png',
  'images/1b.png',
  'images/1c.png',
  'images/1d.png',
  'images/1e.png',
];

const ROTATE_MS = 5000;

const copy = {
  es: {
    badge: 'Novedades',
    title: 'Conoce cada rincón de Inspiration',
    text: 'Desde la cubierta principal hasta los camarotes, cada espacio está pensado para que tu experiencia en el Caribe mexicano sea cómoda, segura e inolvidable. Descubre nuestras últimas fotos y las novedades que estamos preparando para ti.',
    cta: 'Ver experiencias',
  },
  en: {
    badge: 'What\'s New',
    title: 'Explore every corner of Inspiration',
    text: 'From the main deck to the cabins, every space is designed to make your experience in the Mexican Caribbean comfortable, safe and unforgettable. Check out our latest photos and what we\'re preparing for you.',
    cta: 'See experiences',
  },
  fr: {
    badge: 'Nouveautés',
    title: 'Découvrez chaque recoin d\'Inspiration',
    text: 'Du pont principal aux cabines, chaque espace est pensé pour que votre expérience dans les Caraïbes mexicaines soit confortable, sûre et inoubliable. Découvrez nos dernières photos et ce que nous préparons pour vous.',
    cta: 'Voir les expériences',
  },
  de: {
    badge: 'Neuigkeiten',
    title: 'Entdecken Sie jeden Winkel der Inspiration',
    text: 'Vom Hauptdeck bis zu den Kabinen ist jeder Bereich so gestaltet, dass Ihr Erlebnis in der mexikanischen Karibik komfortabel, sicher und unvergesslich wird. Sehen Sie sich unsere neuesten Fotos an und erfahren Sie, was wir für Sie vorbereiten.',
    cta: 'Erlebnisse ansehen',
  },
};

export default function Showcase() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;
  const [active, setActive] = useState(0);

  const goTo = useCallback((i) => setActive(i), []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % IMAGES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="showcase" className="showcase-section">
      <div className="showcase-slides">
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className={`showcase-slide ${i === active ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${src})` }}
            aria-hidden={i !== active}
          />
        ))}
        <div className="showcase-overlay" />
      </div>

      <div className="showcase-container">
        <div className="showcase-content reveal">
          <span className="showcase-badge">{c.badge}</span>
          <h2 className="showcase-title">{c.title}</h2>
          <p className="showcase-text">{c.text}</p>
          <a href="#experiences" className="btn-primary showcase-cta">{c.cta}</a>
        </div>
      </div>

      <div className="showcase-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`showcase-dot ${i === active ? 'is-active' : ''}`}
            aria-label={`Ir a la foto ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}