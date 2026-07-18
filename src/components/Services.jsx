import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Services.css';

const copy = {
  en: {
  eyebrow:'EXPERIENCES',
  title:'Moments you will always remember',
  subtitle:'Every experience aboard Inspiration is unique and unforgettable.',
    services:[
      { slug:'tours-parties', icon:'⛵', tag:'SHARED TOURS', name:'Tours & Parties', desc:'Join an open group trip and enjoy the Caribbean with new friends. Snorkeling, open bar, music and unforgettable fun.', badge:'From $89 USD' },
      { slug:'sport-fishing', icon:'🎣', tag:'SPORT FISHING', name:'Sport Fishing', desc:'Deep-sea adventure targeting marlin, sailfish and mahi-mahi with professional equipment and expert crew.', badge:'From $750 USD' },
      { slug:'private-charter', icon:'⚓', tag:'PRIVATE CHARTER', name:'Private Charter', desc:'The entire catamaran exclusively for your group. Custom route, premium bar and gourmet catering.', badge:'From $1,200 USD' },
      { slug:'events', icon:'🥂', tag:'EVENTS', name:'Events & Celebrations', desc:'Birthdays, weddings, bachelorettes and corporate events at sea with full decoration and planning support.', badge:'Quote' },
    ]
  },
  es: {
  eyebrow:'EXPERIENCIAS',
  title:'Momentos que recordarás siempre',
  subtitle:'Cada experiencia a bordo del Inspiration es única e irrepetible.',
    services:[
      { slug:'tours-fiestas', icon:'⛵', tag:'TOURS COMPARTIDOS', name:'Tours & Fiestas', desc:'Únete a un grupo abierto y disfruta el Caribe con nuevos amigos. Snorkel, barra libre, música y diversión sin límites.', badge:'Desde $89 USD' },
      { slug:'pesca-deportiva', icon:'🎣', tag:'PESCA DEPORTIVA', name:'Pesca Deportiva', desc:'Aventura en alta mar: marlín, pez vela y mahi-mahi con equipo profesional y tripulación experta.', badge:'Desde $750 USD' },
      { slug:'tour-privado', icon:'⚓', tag:'TOUR PRIVADO', name:'Tour Privado', desc:'El catamarán completo exclusivamente para tu grupo. Ruta personalizada, barra premium y catering gourmet.', badge:'Desde $1,200 USD' },
      { slug:'eventos', icon:'🥂', tag:'EVENTOS', name:'Eventos & Celebraciones', desc:'Cumpleaños, bodas, despedidas y eventos corporativos en el mar con decoración completa y apoyo de planeación.', badge:'Cotización' },
    ]
  },
  fr: {
    eyebrow:'SERVICES', title:'Nos Expériences',
    services:[
      { slug:'tours-fetes', icon:'⛵', tag:'CIRCUITS PARTAGÉS', name:'Tours & Fêtes', desc:'Rejoignez un groupe ouvert et profitez des Caraïbes avec de nouveaux amis. Snorkeling, open bar, musique et plaisir.', badge:'Dès 89 USD' },
      { slug:'peche-sportive', icon:'🎣', tag:'PÊCHE SPORTIVE', name:'Pêche Sportive', desc:'Aventure en haute mer : marlin, voilier et mahi-mahi avec équipement professionnel et équipage expert.', badge:'Dès 750 USD' },
      { slug:'charter-prive', icon:'⚓', tag:'CHARTER PRIVÉ', name:'Charter Privé', desc:'Le catamaran entier exclusivement pour votre groupe. Itinéraire personnalisé, bar premium et restauration gastronomique.', badge:'Dès 1 200 USD' },
      { slug:'evenements', icon:'🥂', tag:'ÉVÉNEMENTS', name:'Événements & Célébrations', desc:"Anniversaires, mariages, enterrements de vie de jeune fille et événements d'entreprise en mer.", badge:'Devis' },
    ]
  },
  de: {
    eyebrow:'SERVICES', title:'Unsere Erlebnisse',
    services:[
      { slug:'touren-partys', icon:'⛵', tag:'GRUPPENTOUREN', name:'Touren & Partys', desc:'Schließen Sie sich einer offenen Gruppe an und genießen Sie die Karibik mit neuen Freunden. Schnorcheln, offene Bar, Musik.', badge:'Ab 89 USD' },
      { slug:'sportfischen', icon:'🎣', tag:'SPORTFISCHEN', name:'Sportfischen', desc:'Hochseeabenteuer: Marlin, Segelfisch und Mahi-Mahi mit professioneller Ausrüstung und erfahrener Crew.', badge:'Ab 750 USD' },
      { slug:'privatcharter', icon:'⚓', tag:'PRIVATCHARTER', name:'Privatcharter', desc:'Der gesamte Katamaran exklusiv für Ihre Gruppe. Individuelle Route, Premium-Bar und Gourmet-Catering.', badge:'Ab 1.200 USD' },
      { slug:'events', icon:'🥂', tag:'EVENTS', name:'Events & Feiern', desc:'Geburtstage, Hochzeiten, Junggesellenabschiede und Firmenevents auf See mit kompletter Dekoration.', badge:'Angebot' },
    ]
  },
};

export default function Services() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.en;

  // TODO: cuando existan las rutas/páginas de cada experiencia,
  // reemplaza esta función por tu navegación real
  // (por ejemplo, con React Router: navigate(`/experiencias/${slug}`))
  const handleServiceClick = (slug) => {
    console.log('Navegar a experiencia:', slug);
  };

  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <div className="services-header reveal">
  <span className="section-label">{c.eyebrow}</span>
  <h2 className="section-title">{c.title}</h2>
  <div className="wave-div" />
  <p className="section-sub">{c.subtitle}</p>
</div>
        <div className="services-grid">
          {c.services.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              className={`service-card reveal reveal-delay-${i+1}`}
              onClick={() => handleServiceClick(s.slug)}
              aria-label={s.name}
            >
              <div className="service-icon-box">
                <span className="service-icon">{s.icon}</span>
              </div>
              <span className="service-tag">{s.tag}</span>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <span className="service-badge">{s.badge}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}