import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Hero.css';

const copy = {
  es: {
    eyebrow: 'Bienvenido a bordo',
    h1a: 'Tu embarcación',
    h1b: 'en el paraíso',
    desc: 'Inspiration es un catamarán de 42 pies diseñado para ofrecer la máxima comodidad y estabilidad en las aguas del Caribe mexicano. Con amplias áreas de descanso y cubierta superior panorámica.',
    cta: 'Reservar Ahora',
    cta2: 'Ver Experiencias',
    s1: 'Pies', s2: 'Pasajeros', s3: 'Años',
  },
  en: {
    eyebrow: 'Welcome aboard',
    h1a: 'Your vessel',
    h1b: 'in paradise',
    desc: 'Inspiration is a 42-foot catamaran designed to offer maximum comfort and stability in the waters of the Mexican Caribbean, with spacious rest areas and a panoramic upper deck.',
    cta: 'Book Now',
    cta2: 'See Experiences',
    s1: 'Feet', s2: 'Passengers', s3: 'Years',
  },
  fr: {
    eyebrow: 'Bienvenue à bord',
    h1a: 'Votre embarcation',
    h1b: 'au paradis',
    desc: 'Inspiration est un catamaran de 42 pieds conçu pour offrir un confort et une stabilité maximaux dans les eaux des Caraïbes mexicaines, avec de vastes espaces de détente.',
    cta: 'Réserver',
    cta2: 'Voir Expériences',
    s1: 'Pieds', s2: 'Passagers', s3: 'Ans',
  },
  de: {
    eyebrow: 'Willkommen an Bord',
    h1a: 'Ihr Schiff',
    h1b: 'im Paradies',
    desc: 'Inspiration ist ein 42-Fuß-Katamaran, der maximalen Komfort in den Gewässern der mexikanischen Karibik bietet, mit großzügigen Ruhebereichen und Panoramadeck.',
    cta: 'Jetzt buchen',
    cta2: 'Erlebnisse',
    s1: 'Fuß', s2: 'Passagiere', s3: 'Jahre',
  },
};

export default function Hero() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* Left: text */}
        <div>
          <span className="hero-eyebrow">{c.eyebrow}</span>
          <h1 className="hero-h1">
            {c.h1a}<br /><em>{c.h1b}</em>
          </h1>
          <p className="hero-desc">{c.desc}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">{c.cta}</a>
            <a href="#experiences" className="btn-outline-teal">{c.cta2}</a>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <span className="hstat-val">42</span>
              <span className="hstat-lbl">{c.s1}</span>
            </div>
            <div className="hstat-div" />
            <div className="hstat">
              <span className="hstat-val">30</span>
              <span className="hstat-lbl">{c.s2}</span>
            </div>
            <div className="hstat-div" />
            <div className="hstat">
              <span className="hstat-val">6+</span>
              <span className="hstat-lbl">{c.s3}</span>
            </div>
          </div>
        </div>

        {/* Right: catamaran illustration */}
       <div className="hero-visual">
  <div className="hero-card">
    <img src={`${import.meta.env.BASE_URL}images/imagen5.jpg`} alt="Inspiration - Catamarán" className="hero-photo" />
  </div>
  <div className="hero-badge">
    <span className="badge-num">42</span>
    <span className="badge-lbl">{c.s1}</span>
  </div>
</div>
      </div>
    </section>
  );
}
