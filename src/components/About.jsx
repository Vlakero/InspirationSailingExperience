import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './About.css';

const copy = {es: { label:'Conoce Inspiration', title:'Tu embarcación en el paraíso', p1:'Inspiration es un catamarán de 42 pies diseñado para ofrecer la máxima comodidad y estabilidad en las aguas del Caribe mexicano. Con amplias áreas de descanso, red de proa para tomar el sol y una cubierta superior con vistas panorámicas.', p2:'Equipado con sistema de sonido, baño, cocina y todo lo necesario para que tu experiencia en Playa del Carmen sea absolutamente inolvidable.', cta:'Reservar', specs:[{icon:'📏',l:'Eslora',v:'42 pies'},{icon:'👥',l:'Pasajeros',v:'Hasta 15'},{icon:'🛋️',l:'Amenidades',v:'Baño · Cocina'},{icon:'🌊',l:'Estabilidad',v:'Superior'},{icon:'🔊',l:'Sonido',v:'Bocinas de alta calidad'},{icon:'🛏️',l:'Camarotes',v:'4'},{icon:'🚿',l:'Regaderas',v:'3'},{icon:'🚻',l:'Baños',v:'2'}], yr:'6+', yrLbl:'Años de experiencia' },
en: { label:'Discover Inspiration', title:'Your vessel in paradise', p1:'Inspiration is a 42-foot catamaran designed to offer maximum comfort and stability in the waters of the Mexican Caribbean. With spacious rest areas, a bow net for sunbathing and an upper deck with panoramic views.', p2:'Equipped with a sound system, bathroom, kitchen and everything you need for an unforgettable experience in Playa del Carmen.', cta:'Book Now', specs:[{icon:'📏',l:'Length',v:'42 ft'},{icon:'👥',l:'Passengers',v:'Up to 15'},{icon:'🛋️',l:'Amenities',v:'Bath · Kitchen'},{icon:'🌊',l:'Stability',v:'Superior'},{icon:'🔊',l:'Sound',v:'High-quality speakers'},{icon:'🛏️',l:'Cabins',v:'4'},{icon:'🚿',l:'Showers',v:'3'},{icon:'🚻',l:'Bathrooms',v:'2'}], yr:'6+', yrLbl:'Years of experience' },
fr: { label:'Découvrez Inspiration', title:'Votre embarcation au paradis', p1:'Inspiration est un catamaran de 42 pieds conçu pour offrir un confort et une stabilité maximaux dans les eaux des Caraïbes mexicaines. Avec de vastes espaces de détente, un filet de proue pour bronzer et un pont supérieur avec vue panoramique.', p2:'Équipé d\'un système audio, de sanitaires, d\'une cuisine et de tout le nécessaire pour une expérience inoubliable à Playa del Carmen.', cta:'Réserver', specs:[{icon:'📏',l:'Longueur',v:'42 pieds'},{icon:'👥',l:'Passagers',v:"Jusqu'à 15"},{icon:'🛋️',l:'Commodités',v:'Bain · Cuisine'},{icon:'🌊',l:'Stabilité',v:'Supérieure'},{icon:'🔊',l:'Son',v:'Haut-parleurs haute qualité'},{icon:'🛏️',l:'Cabines',v:'4'},{icon:'🚿',l:'Douches',v:'3'},{icon:'🚻',l:'Toilettes',v:'2'}], yr:'6+', yrLbl:'Années d\'expérience' },
de: { label:'Entdecke Inspiration', title:'Ihr Schiff im Paradies', p1:'Inspiration ist ein 42-Fuß-Katamaran, der maximalen Komfort und Stabilität in den Gewässern der mexikanischen Karibik bietet. Mit geräumigen Ruhebereichen, einem Bugnetz zum Sonnenbaden und einem Oberdeck mit Panoramablick.', p2:'Mit Soundsystem, Bad, Küche und allem, was Sie für ein unvergessliches Erlebnis in Playa del Carmen benötigen.', cta:'Buchen', specs:[{icon:'📏',l:'Länge',v:'42 Fuß'},{icon:'👥',l:'Passagiere',v:'Bis zu 15'},{icon:'🛋️',l:'Annehmlichkeiten',v:'Bad · Küche'},{icon:'🌊',l:'Stabilität',v:'Überlegen'},{icon:'🔊',l:'Ton',v:'Hochwertige Lautsprecher'},{icon:'🛏️',l:'Kabinen',v:'4'},{icon:'🚿',l:'Duschen',v:'3'},{icon:'🚻',l:'Toiletten',v:'2'}], yr:'6+', yrLbl:'Jahre Erfahrung' },};

export default function About() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
  <div className="about-visual reveal">
    <div className="about-img-box">
      <img src={`${import.meta.env.BASE_URL}images/crew.JPG`} alt="Inspiration - Catamarán" className="about-photo" />
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
