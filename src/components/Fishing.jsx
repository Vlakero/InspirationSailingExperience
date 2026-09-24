import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Fishing.css';

const copy = {
  es: { label:'Fishing ', title:'Pesca deportiva en el Caribe', p1:'Explora el océano cómodamente y experimenta lo que es pescar en el Caribe. Ofrecemos 3 cañas de pescar con su carrete y porta-cañas, además de un capitán y un marinero que te apoyan en la captura y te enseñan a armar el carrete, hacer el nudo y las maniobras.', p2:'El tour está disponible al amanecer (6:00 AM) o al atardecer (5:30 PM), e incluye transportación desde tu hotel, fruta, comida y bebidas.', cta:'Reservar', specs:[{icon:'⏱️',l:'Duración',v:'4 horas'},{icon:'🌅',l:'Horarios',v:'Amanecer 6:00 AM · Atardecer 5:30 PM'},{icon:'🎣',l:'Equipo',v:'3 cañas con carrete y porta-cañas'},{icon:'⚓',l:'Tripulación',v:'Capitán + Marinero'},{icon:'🎓',l:'Clases',v:'Carrete, nudos y maniobras'},{icon:'🚐',l:'Transporte',v:'Desde tu hotel'},{icon:'🍽️',l:'Incluye',v:'Fruta, comida y bebidas'}], yr:'Transporte', yrLbl:'Incluido' },
  en: { label:'Fishing ', title:'Sport fishing in the Caribbean', p1:'Explore the ocean comfortably and experience what it\'s like to fish in the Caribbean. We offer 3 fishing rods with reels and rod holders, plus a captain and a mate who help you land the catch and teach you how to set up the reel, tie the knot and handle the maneuvers.', p2:'The tour is available at sunrise (6:00 AM) or sunset (5:30 PM), and includes transportation from your hotel, fruit, food and drinks.', cta:'Book Now', specs:[{icon:'⏱️',l:'Duration',v:'4 hours'},{icon:'🌅',l:'Schedule',v:'Sunrise 6:00 AM · Sunset 5:30 PM'},{icon:'🎣',l:'Equipment',v:'3 rods with reel and holders'},{icon:'⚓',l:'Crew',v:'Captain + Mate'},{icon:'🎓',l:'Lessons',v:'Reel setup, knots and maneuvers'},{icon:'🚐',l:'Transport',v:'From your hotel'},{icon:'🍽️',l:'Includes',v:'Fruit, food and drinks'}], yr:'6+', yrLbl:'Years of experience' },
  fr: { label:'Fishing ', title:'Pêche sportive dans les Caraïbes', p1:'Explorez l\'océan confortablement et découvrez ce que c\'est de pêcher dans les Caraïbes. Nous proposons 3 cannes à pêche avec moulinet et porte-cannes, ainsi qu\'un capitaine et un marin qui vous aident à la capture et vous apprennent à monter le moulinet, faire le nœud et les manœuvres.', p2:'Le tour est disponible au lever du soleil (6h00) ou au coucher du soleil (17h30), et inclut le transport depuis votre hôtel, des fruits, des repas et des boissons.', cta:'Réserver', specs:[{icon:'⏱️',l:'Durée',v:'4 heures'},{icon:'🌅',l:'Horaires',v:'Lever 6h00 · Coucher 17h30'},{icon:'🎣',l:'Équipement',v:'3 cannes avec moulinet et porte-cannes'},{icon:'⚓',l:'Équipage',v:'Capitaine + Marin'},{icon:'🎓',l:'Cours',v:'Moulinet, nœuds et manœuvres'},{icon:'🚐',l:'Transport',v:'Depuis votre hôtel'},{icon:'🍽️',l:'Inclus',v:'Fruits, repas et boissons'}], yr:'6+', yrLbl:'Années d\'expérience' },
  de: { label:'Fishing', title:'Sportfischen in der Karibik', p1:'Erkunden Sie den Ozean bequem und erleben Sie, wie es ist, in der Karibik zu fischen. Wir bieten 3 Angelruten mit Rolle und Rutenhaltern sowie einen Kapitän und einen Matrosen, die Ihnen beim Fang helfen und Ihnen zeigen, wie man die Rolle aufbaut, den Knoten macht und manövriert.', p2:'Die Tour ist bei Sonnenaufgang (6:00 Uhr) oder Sonnenuntergang (17:30 Uhr) verfügbar und beinhaltet den Transport von Ihrem Hotel, Obst, Essen und Getränke.', cta:'Buchen', specs:[{icon:'⏱️',l:'Dauer',v:'4 Stunden'},{icon:'🌅',l:'Zeiten',v:'Sonnenaufgang 6:00 · Sonnenuntergang 17:30'},{icon:'🎣',l:'Ausrüstung',v:'3 Ruten mit Rolle und Halterung'},{icon:'⚓',l:'Besatzung',v:'Kapitän + Matrose'},{icon:'🎓',l:'Unterricht',v:'Rolle, Knoten und Manöver'},{icon:'🚐',l:'Transport',v:'Ab Ihrem Hotel'},{icon:'🍽️',l:'Inklusive',v:'Obst, Essen und Getränke'}], yr:'6+', yrLbl:'Jahre Erfahrung' },
};

export default function Fishing() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="fishing" className="fishing-section">
      <div className="fishing-inner">
  <div className="fishing-visual reveal">
    <div className="fishing-img-box">
      <img src="/images/imagen6.JPG" alt="Inspiration - Catamarán" className="about-photo" />
    </div>
          <div className="fishing-badge">
            <span className="ab-num">{c.yr}</span>
            <span className="ab-lbl">{c.yrLbl}</span>
          </div>
        </div>

        <div className="fishing-content">
          <div className="reveal">
            <span className="section-label">{c.label}</span>
            <h2 className="section-title">{c.title}</h2>
            <div className="wave-div" />
          </div>
          <p className="fishing-text reveal reveal-delay-1">{c.p1}</p>
          <p className="fishing-text reveal reveal-delay-2">{c.p2}</p>
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