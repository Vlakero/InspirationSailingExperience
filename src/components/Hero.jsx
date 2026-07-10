import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Hero.css';

const copy = {
  es: {
    eyebrow: 'Bienvenido a bordo',
    h1a: 'Tu embarcación',
    h1b: 'en el paraíso',
    desc: 'Inspiration es un catamarán de 40 pies diseñado para ofrecer la máxima comodidad y estabilidad en las aguas del Caribe mexicano. Con amplias áreas de descanso y cubierta superior panorámica.',
    cta: 'Reservar Ahora',
    cta2: 'Ver Experiencias',
    s1: 'Pies', s2: 'Pasajeros', s3: 'Años',
  },
  en: {
    eyebrow: 'Welcome aboard',
    h1a: 'Your vessel',
    h1b: 'in paradise',
    desc: 'Inspiration is a 40-foot catamaran designed to offer maximum comfort and stability in the waters of the Mexican Caribbean, with spacious rest areas and a panoramic upper deck.',
    cta: 'Book Now',
    cta2: 'See Experiences',
    s1: 'Feet', s2: 'Passengers', s3: 'Years',
  },
  fr: {
    eyebrow: 'Bienvenue à bord',
    h1a: 'Votre embarcation',
    h1b: 'au paradis',
    desc: 'Inspiration est un catamaran de 40 pieds conçu pour offrir un confort et une stabilité maximaux dans les eaux des Caraïbes mexicaines, avec de vastes espaces de détente.',
    cta: 'Réserver',
    cta2: 'Voir Expériences',
    s1: 'Pieds', s2: 'Passagers', s3: 'Ans',
  },
  de: {
    eyebrow: 'Willkommen an Bord',
    h1a: 'Ihr Schiff',
    h1b: 'im Paradies',
    desc: 'Inspiration ist ein 40-Fuß-Katamaran, der maximalen Komfort in den Gewässern der mexikanischen Karibik bietet, mit großzügigen Ruhebereichen und Panoramadeck.',
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
              <span className="hstat-val">40</span>
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
            <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="320" fill="#e8f6fd"/>
              {/* Ocean layers */}
              <path d="M0 200 C80 185 160 210 250 198 C340 186 420 205 500 195 L500 320 L0 320 Z" fill="rgba(42,159,216,0.22)"/>
              <path d="M0 228 C100 210 200 238 300 222 C400 206 450 232 500 222 L500 320 L0 320 Z" fill="rgba(42,159,216,0.40)"/>
              <path d="M0 252 C120 238 240 260 360 244 C440 234 480 252 500 248 L500 320 L0 320 Z" fill="rgba(26,122,170,0.48)"/>
              {/* Sun */}
              <circle cx="420" cy="62" r="38" fill="rgba(232,200,74,0.18)"/>
              <circle cx="420" cy="62" r="26" fill="rgba(232,200,74,0.28)"/>
              {[0,45,90,135,180,225,270,315].map((deg, i) => (
                <line key={i}
                  x1={420 + 31 * Math.cos(deg * Math.PI / 180)}
                  y1={62  + 31 * Math.sin(deg * Math.PI / 180)}
                  x2={420 + 44 * Math.cos(deg * Math.PI / 180)}
                  y2={62  + 44 * Math.sin(deg * Math.PI / 180)}
                  stroke="rgba(232,200,74,0.45)" strokeWidth="2" strokeLinecap="round"
                />
              ))}
              {/* Hulls */}
              <path d="M55 205 C55 200 70 192 115 192 L135 192 L145 212 L50 212 Z" fill="white" stroke="rgba(26,58,92,0.18)" strokeWidth="1.2"/>
              <path d="M340 205 C340 200 355 192 400 192 L420 192 L430 212 L335 212 Z" fill="white" stroke="rgba(26,58,92,0.18)" strokeWidth="1.2"/>
              {/* Deck bridge */}
              <rect x="95"  y="178" width="300" height="24" rx="4" fill="#f0f7ff" stroke="rgba(26,58,92,0.13)" strokeWidth="1"/>
              {/* Cabin */}
              <rect x="145" y="145" width="195" height="38" rx="5" fill="white" stroke="rgba(26,58,92,0.16)" strokeWidth="1"/>
              {/* Windows */}
              {[160, 194, 228, 262, 296].map((x, i) => (
                <rect key={i} x={x} y="155" width="22" height="15" rx="3" fill="rgba(42,159,216,0.42)" stroke="rgba(26,58,92,0.10)" strokeWidth="0.5"/>
              ))}
              {/* Mast */}
              <line x1="242" y1="26" x2="242" y2="155" stroke="rgba(26,58,92,0.48)" strokeWidth="2.5"/>
              {/* Main sail */}
              <path d="M242 30 L242 148 L156 148 Z" fill="white" stroke="rgba(26,58,92,0.13)" strokeWidth="0.8" opacity="0.92"/>
              {/* Jib */}
              <path d="M242 48 L242 140 L318 140 Z" fill="rgba(42,159,216,0.10)" stroke="rgba(42,159,216,0.38)" strokeWidth="0.8"/>
              {/* Name */}
              <text x="172" y="169" fontFamily="Cormorant Garamond,serif" fontSize="14" fontStyle="italic" fill="rgba(26,58,92,0.55)" letterSpacing="0.5">Inspiration</text>
            </svg>
          </div>
          <div className="hero-badge">
            <span className="badge-num">40</span>
            <span className="badge-lbl">{c.s1}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
