import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Services.css';

const copy = {
  en: {
    eyebrow:'SERVICES', title:'Our Experiences',
    services:[
      { icon:'⛵', tag:'SHARED TOURS', name:'Tours & Parties', desc:'Join an open group trip and enjoy the Caribbean with new friends. Snorkeling, open bar, music and unforgettable fun.', img:'linear-gradient(160deg,#0a3a5a,#1a6a9a,#2ea0d8)', badge:'From $89 USD' },
      { icon:'🎣', tag:'SPORT FISHING', name:'Sport Fishing', desc:'Deep-sea adventure targeting marlin, sailfish and mahi-mahi with professional equipment and expert crew.', img:'linear-gradient(160deg,#0a2a3a,#0e4a6a,#1a7aaa)', badge:'From $750 USD' },
      { icon:'⚓', tag:'PRIVATE CHARTER', name:'Private Charter', desc:'The entire catamaran exclusively for your group. Custom route, premium bar and gourmet catering.', img:'linear-gradient(160deg,#0a1e30,#1a3a5c,#2e6699)', badge:'From $1,200 USD' },
      { icon:'🥂', tag:'EVENTS', name:'Events & Celebrations', desc:'Birthdays, weddings, bachelorettes and corporate events at sea with full decoration and planning support.', img:'linear-gradient(160deg,#1a2a4a,#2e4a7a,#4a7ab0)', badge:'Quote' },
    ]
  },
  es: {
    eyebrow:'SERVICIOS', title:'Nuestras Experiencias',
    services:[
      { icon:'⛵', tag:'TOURS COMPARTIDOS', name:'Tours & Fiestas', desc:'Únete a un grupo abierto y disfruta el Caribe con nuevos amigos. Snorkel, barra libre, música y diversión sin límites.', img:'linear-gradient(160deg,#0a3a5a,#1a6a9a,#2ea0d8)', badge:'Desde $89 USD' },
      { icon:'🎣', tag:'PESCA DEPORTIVA', name:'Pesca Deportiva', desc:'Aventura en alta mar: marlín, pez vela y mahi-mahi con equipo profesional y tripulación experta.', img:'linear-gradient(160deg,#0a2a3a,#0e4a6a,#1a7aaa)', badge:'Desde $750 USD' },
      { icon:'⚓', tag:'TOUR PRIVADO', name:'Tour Privado', desc:'El catamarán completo exclusivamente para tu grupo. Ruta personalizada, barra premium y catering gourmet.', img:'linear-gradient(160deg,#0a1e30,#1a3a5c,#2e6699)', badge:'Desde $1,200 USD' },
      { icon:'🥂', tag:'EVENTOS', name:'Eventos & Celebraciones', desc:'Cumpleaños, bodas, despedidas y eventos corporativos en el mar con decoración completa y apoyo de planeación.', img:'linear-gradient(160deg,#1a2a4a,#2e4a7a,#4a7ab0)', badge:'Cotización' },
    ]
  },
  fr: {
    eyebrow:'SERVICES', title:'Nos Expériences',
    services:[
      { icon:'⛵', tag:'CIRCUITS PARTAGÉS', name:'Tours & Fêtes', desc:'Rejoignez un groupe ouvert et profitez des Caraïbes avec de nouveaux amis. Snorkeling, open bar, musique et plaisir.', img:'linear-gradient(160deg,#0a3a5a,#1a6a9a,#2ea0d8)', badge:'Dès 89 USD' },
      { icon:'🎣', tag:'PÊCHE SPORTIVE', name:'Pêche Sportive', desc:'Aventure en haute mer : marlin, voilier et mahi-mahi avec équipement professionnel et équipage expert.', img:'linear-gradient(160deg,#0a2a3a,#0e4a6a,#1a7aaa)', badge:'Dès 750 USD' },
      { icon:'⚓', tag:'CHARTER PRIVÉ', name:'Charter Privé', desc:'Le catamaran entier exclusivement pour votre groupe. Itinéraire personnalisé, bar premium et restauration gastronomique.', img:'linear-gradient(160deg,#0a1e30,#1a3a5c,#2e6699)', badge:'Dès 1 200 USD' },
      { icon:'🥂', tag:'ÉVÉNEMENTS', name:'Événements & Célébrations', desc:'Anniversaires, mariages, enterrements de vie de jeune fille et événements d\'entreprise en mer.', img:'linear-gradient(160deg,#1a2a4a,#2e4a7a,#4a7ab0)', badge:'Devis' },
    ]
  },
  de: {
    eyebrow:'SERVICES', title:'Unsere Erlebnisse',
    services:[
      { icon:'⛵', tag:'GRUPPENTOUREN', name:'Touren & Partys', desc:'Schließen Sie sich einer offenen Gruppe an und genießen Sie die Karibik mit neuen Freunden. Schnorcheln, offene Bar, Musik.', img:'linear-gradient(160deg,#0a3a5a,#1a6a9a,#2ea0d8)', badge:'Ab 89 USD' },
      { icon:'🎣', tag:'SPORTFISCHEN', name:'Sportfischen', desc:'Hochseeabenteuer: Marlin, Segelfisch und Mahi-Mahi mit professioneller Ausrüstung und erfahrener Crew.', img:'linear-gradient(160deg,#0a2a3a,#0e4a6a,#1a7aaa)', badge:'Ab 750 USD' },
      { icon:'⚓', tag:'PRIVATCHARTER', name:'Privatcharter', desc:'Der gesamte Katamaran exklusiv für Ihre Gruppe. Individuelle Route, Premium-Bar und Gourmet-Catering.', img:'linear-gradient(160deg,#0a1e30,#1a3a5c,#2e6699)', badge:'Ab 1.200 USD' },
      { icon:'🥂', tag:'EVENTS', name:'Events & Feiern', desc:'Geburtstage, Hochzeiten, Junggesellenabschiede und Firmenevents auf See mit kompletter Dekoration.', img:'linear-gradient(160deg,#1a2a4a,#2e4a7a,#4a7ab0)', badge:'Angebot' },
    ]
  },
};

export default function Services() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.en;
  return (
    <section id="services" className="services-section">
      <div className="services-header reveal">
        <span className="section-eyebrow">{c.eyebrow}</span>
        <h2 className="section-title">{c.title}</h2>
        <div className="gold-line" />
      </div>
      <div className="services-mosaic">
        {c.services.map((s, i) => (
          <div key={i} className={`service-tile service-tile--${i} reveal reveal-delay-${i+1}`} style={{background: s.img}}>
            <div className="tile-overlay" />
            <div className="tile-badge">{s.badge}</div>
            <div className="tile-content">
              <span className="tile-tag">{s.tag}</span>
              <h3 className="tile-name">{s.name}</h3>
              <p className="tile-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
