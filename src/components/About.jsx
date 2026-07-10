import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './About.css';

const copy = {
  es: { label:'Conoce Inspiration', title:'Tu embarcación en el paraíso', p1:'Inspiration es un catamarán de 40 pies diseñado para ofrecer la máxima comodidad y estabilidad en las aguas del Caribe mexicano. Con amplias áreas de descanso, red de proa para tomar el sol y una cubierta superior con vistas panorámicas.', p2:'Equipado con sistema de sonido, baño, cocina y todo lo necesario para que tu experiencia en Playa del Carmen sea absolutamente inolvidable.', cta:'Reservar', specs:[{icon:'📏',l:'Eslora',v:'40 pies'},{icon:'👥',l:'Pasajeros',v:'Hasta 30'},{icon:'🛡️',l:'Seguridad',v:'Certificada'},{icon:'🌊',l:'Estabilidad',v:'Superior'},{icon:'🔊',l:'Sonido',l2:'Sistema de sonido'},{icon:'🚿',l:'Amenidades',v:'Baño · Cocina'}], yr:'6+', yrLbl:'Años de experiencia' },
  en: { label:'Meet Inspiration', title:'Your vessel in paradise', p1:'Inspiration is a 40-foot catamaran designed to offer maximum comfort and stability in the waters of the Mexican Caribbean. With spacious rest areas, a bow net for sunbathing and an upper deck with panoramic views.', p2:'Equipped with a sound system, bathroom, kitchen and everything you need for an unforgettable experience in Playa del Carmen.', cta:'Book Now', specs:[{icon:'📏',l:'Length',v:'40 ft'},{icon:'👥',l:'Passengers',v:'Up to 30'},{icon:'🛡️',l:'Safety',v:'Certified'},{icon:'🌊',l:'Stability',v:'Superior'},{icon:'🔊',l:'Sound',v:'Sound system'},{icon:'🚿',l:'Amenities',v:'Bath · Kitchen'}], yr:'6+', yrLbl:'Years of experience' },
  fr: { label:'Découvrez Inspiration', title:'Votre embarcation au paradis', p1:'Inspiration est un catamaran de 40 pieds conçu pour offrir un confort et une stabilité maximaux dans les eaux des Caraïbes mexicaines.', p2:'Équipé d\'un système audio, de sanitaires, d\'une cuisine et de tout le nécessaire pour une expérience inoubliable.', cta:'Réserver', specs:[{icon:'📏',l:'Longueur',v:'40 pieds'},{icon:'👥',l:'Passagers',v:"Jusqu'à 30"},{icon:'🛡️',l:'Sécurité',v:'Certifiée'},{icon:'🌊',l:'Stabilité',v:'Supérieure'},{icon:'🔊',l:'Son',v:'Système audio'},{icon:'🚿',l:'Commodités',v:'Bain · Cuisine'}], yr:'6+', yrLbl:'Années d\'expérience' },
  de: { label:'Lernen Sie Inspiration kennen', title:'Ihr Schiff im Paradies', p1:'Inspiration ist ein 40-Fuß-Katamaran, der maximalen Komfort und Stabilität in den Gewässern der mexikanischen Karibik bietet.', p2:'Mit Soundsystem, Bad, Küche und allem, was Sie für ein unvergessliches Erlebnis in Playa del Carmen benötigen.', cta:'Buchen', specs:[{icon:'📏',l:'Länge',v:'40 Fuß'},{icon:'👥',l:'Passagiere',v:'Bis zu 30'},{icon:'🛡️',l:'Sicherheit',v:'Zertifiziert'},{icon:'🌊',l:'Stabilität',v:'Überlegen'},{icon:'🔊',l:'Ton',v:'Tonsystem'},{icon:'🚿',l:'Annehmlichkeiten',v:'Bad · Küche'}], yr:'6+', yrLbl:'Jahre Erfahrung' },
};

export default function About() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-visual reveal">
          <div className="about-img-box">
            <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="300" fill="#e8f6fd"/>
              <path d="M0 200 C80 185 160 210 250 198 C340 186 420 205 500 195 L500 300 L0 300 Z" fill="rgba(42,159,216,0.2)"/>
              <path d="M0 225 C100 210 200 238 300 222 C400 206 450 232 500 222 L500 300 L0 300 Z" fill="rgba(42,159,216,0.38)"/>
              <path d="M0 252 C120 238 240 260 360 244 C440 234 480 252 500 248 L500 300 L0 300 Z" fill="rgba(26,122,170,0.45)"/>
              <path d="M55 205 C55 200 70 192 115 192 L135 192 L145 212 L50 212 Z" fill="white" stroke="rgba(26,58,92,0.2)" strokeWidth="1.2"/>
              <path d="M340 205 C340 200 355 192 400 192 L420 192 L430 212 L335 212 Z" fill="white" stroke="rgba(26,58,92,0.2)" strokeWidth="1.2"/>
              <rect x="95" y="178" width="300" height="24" rx="4" fill="#f0f7ff" stroke="rgba(26,58,92,0.15)" strokeWidth="1"/>
              <rect x="145" y="144" width="195" height="38" rx="5" fill="white" stroke="rgba(26,58,92,0.18)" strokeWidth="1"/>
              {[160,194,228,262,296].map((x,i)=>(
                <rect key={i} x={x} y="154" width="22" height="15" rx="3" fill="rgba(42,159,216,0.45)" stroke="rgba(26,58,92,0.12)" strokeWidth="0.5"/>
              ))}
              <line x1="242" y1="24" x2="242" y2="155" stroke="rgba(26,58,92,0.5)" strokeWidth="2.5"/>
              <path d="M242 28 L242 148 L155 148 Z" fill="white" stroke="rgba(26,58,92,0.15)" strokeWidth="0.8" opacity="0.9"/>
              <path d="M242 46 L242 140 L318 140 Z" fill="rgba(42,159,216,0.12)" stroke="rgba(42,159,216,0.4)" strokeWidth="0.8"/>
              <text x="172" y="168" fontFamily="Cormorant Garamond,serif" fontSize="14" fontStyle="italic" fill="rgba(26,58,92,0.6)" letterSpacing="0.5">Inspiration</text>
              <circle cx="420" cy="60" r="32" fill="rgba(232,200,74,0.2)"/>
              <circle cx="420" cy="60" r="22" fill="rgba(232,200,74,0.3)"/>
            </svg>
          </div>
          <div className="about-badge">
            <span className="ab-num">{c.yr}</span>
            <span className="ab-lbl">{c.yrLbl}</span>
          </div>
        </div>

        <div className="about-content">
          <div className="reveal">
            <span className="section-label">{c.label}</span>
            <h2 className="section-title">{c.title}</h2>
            <div className="wave-div" />
          </div>
          <p className="about-text reveal reveal-delay-1">{c.p1}</p>
          <p className="about-text reveal reveal-delay-2">{c.p2}</p>
          <div className="specs-grid reveal reveal-delay-3">
            {c.specs.map((s,i) => (
              <div key={i} className="spec-item">
                <span className="spec-icon">{s.icon}</span>
                <div>
                  <span className="spec-label">{s.l}</span>
                  <span className="spec-value">{s.v}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary reveal reveal-delay-4" style={{alignSelf:'flex-start', marginTop:'0.5rem'}}>{c.cta}</a>
        </div>
      </div>
    </section>
  );
}
