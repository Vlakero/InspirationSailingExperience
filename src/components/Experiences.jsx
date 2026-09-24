import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Experiences.css';

const copy = {
  es: { label:'Experiencias', title:'Momentos que recordarás siempre', sub:'Cada experiencia a bordo del Inspiration es única e irrepetible: elige entre aprender a navegar, explorar el mar, bucear o disfrutar de un día de snorkel, con salidas adaptadas a tus necesidades.', cta:'Planea tu viaje', ctaSub:'Cada experiencia está a un clic de distancia: nuestros tours incluyen bebidas, fruta, comida y snacks.  El precio no incluye el impuesto de muelle de $150 MXN por persona; si tienes alguna alergia, avísanos al reservar o antes de abordar.',
    cards:[
      { slug:'private', icon:'⛵', cat:'Diversión sin límites', title:'Tour Privado', desc:'Navega el Caribe con amigos y familia. Música, bebidas y snorkel en los arrecifes más hermosos.', tag:'Más Popular' },
      { slug:'fishing', icon:'🎣', cat:'Adrenalina pura', title:'Pesca', desc:'Vive una jornada de pesca en el Caribe. Aprende técnicas de pesca y disfruta del amanecer o atardecer junto a un capitán y marinero expertos.', tag:'Emocionante' },
      { slug:'sailing', icon:'⚓', cat:'Aventura de varios días', title:'Live Aboard & Safari', desc:'Navega durante 3 días y 2 noches por Playa del Carmen, Puerto Morelos y Cozumel. Aprende vela o buceo y vive la experiencia de dormir a bordo.', tag:'Aventura' },
      { slug:'events', icon:'💍', cat:'Ocasiones especiales', title:'Eventos', desc:'Rompe la rutina y disfruta nuevas experiencias con amigos. Descubre nuestros próximos eventos y actividades en redes sociales.', tag:'Memorable' },
    ]
  },
  en: { label:'Experiences', title:'Moments you will always remember', sub:'Every experience aboard Inspiration is unique and unforgettable.', cta:'Plan your trip', ctaSub:'Every experience is one click away.',
    cards:[
      { slug:'private', icon:'⛵', cat:'Limitless fun', title:'Private Tour', desc:'Sail the Caribbean with friends and family. Music, drinks and snorkeling at the most beautiful reefs.', tag:'Most Popular' },
      { slug:'fishing', icon:'🎣', cat:'Pure adrenaline', title:'Fishing', desc:'Caribbean waters rich in marlin, sailfish and mahi-mahi. Expert guides and professional equipment.', tag:'Thrilling' },
      { slug:'sailing', icon:'⚓', cat:'Multi-day adventure', title:'Live Aboard & Safari', desc:'Sail for 3 days and 2 nights through Playa del Carmen, Puerto Morelos and Cozumel. Learn sailing or diving and live the experience of sleeping aboard.', tag:'Adventure' },
      { slug:'events', icon:'💍', cat:'Special occasions', title:'Events', desc:'Your most special event on the high seas. Décor, gourmet catering and memories forever.', tag:'Memorable' },
    ]
  },
  fr: { label:'Expériences', title:'Des moments que vous n\'oublierez jamais', sub:'Chaque expérience à bord de l\'Inspiration est unique et inoubliable.', cta:'Planifiez votre voyage', ctaSub:'Chaque expérience à portée de clic.',
    cards:[
      { slug:'private', icon:'⛵', cat:'Plaisir sans limites', title:'Tour Privé', desc:'Naviguez dans les Caraïbes avec amis et famille. Musique, boissons et plongée aux plus beaux récifs.', tag:'Plus populaire' },
      { slug:'fishing', icon:'🎣', cat:'Adrénaline pure', title:'Pêche', desc:'Eaux riches en marlin, voilier et mahi-mahi. Guides experts et équipement professionnel.', tag:'Palpitant' },
      { slug:'sailing', icon:'⚓', cat:'Aventure de plusieurs jours', title:'Live Aboard & Safari', desc:'Naviguez pendant 3 jours et 2 nuits à travers Playa del Carmen, Puerto Morelos et Cozumel. Apprenez la voile ou la plongée et vivez l\'expérience de dormir à bord.', tag:'Aventure' },
      { slug:'events', icon:'💍', cat:'Occasions spéciales', title:'Événements', desc:'Votre événement le plus spécial en haute mer. Décoration, gastronomie et souvenirs pour toujours.', tag:'Mémorable' },
    ]
  },
  de: { label:'Erlebnisse', title:'Momente, die Sie nie vergessen werden', sub:'Jedes Erlebnis an Bord der Inspiration ist einzigartig und unvergesslich.', cta:'Reise planen', ctaSub:'Jedes Erlebnis ist einen Klick entfernt.',
    cards:[
      { slug:'private', icon:'⛵', cat:'Grenzenloser Spaß', title:'Private Tour', desc:'Segeln Sie mit Freunden und Familie durch die Karibik. Musik, Getränke und Schnorcheln.', tag:'Beliebteste' },
      { slug:'fishing', icon:'🎣', cat:'Pur Adrenalin', title:'Fischen', desc:'Karibische Gewässer reich an Marlin, Segelfisch und Mahi-Mahi. Experten und Profiausrüstung.', tag:'Aufregend' },
      { slug:'sailing', icon:'⚓', cat:'Mehrtägiges Abenteuer', title:'Live Aboard & Safari', desc:'Segeln Sie 3 Tage und 2 Nächte durch Playa del Carmen, Puerto Morelos und Cozumel. Lernen Sie Segeln oder Tauchen und erleben Sie das Übernachten an Bord.', tag:'Abenteuer' },
      { slug:'events', icon:'💍', cat:'Besondere Anlässe', title:'Events', desc:'Ihr besonderes Event auf hoher See. Dekoration, Gourmet-Catering und unvergessliche Momente.', tag:'Unvergesslich' },
    ]
  },
};

export default function Experiences() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  // Scrollea a la sección correspondiente (Private, Fishing, Sailing o Events)
  // dentro de la misma página, ya que no se usa React Router.
  const handleCardClick = (slug) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experiences" className="exp-section">
      <div className="exp-inner">
        <div className="exp-header reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="wave-div" style={{margin:'1rem auto'}} />
          <p className="section-sub">{c.sub}</p>
        </div>
        <div className="exp-grid">
          {c.cards.map((card, i) => (
            <button
              key={card.slug}
              type="button"
              className={`exp-card reveal reveal-delay-${i+1}`}
              onClick={() => handleCardClick(card.slug)}
              aria-label={card.title}
            >
              <div className="exp-icon-box">
                <span className="exp-icon">{card.icon}</span>
              </div>
              <span className="exp-tag">{card.cat}</span>
              <h3 className="exp-title">{card.title}</h3>
              <p className="exp-desc">{card.desc}</p>
              <span className="exp-badge">{card.tag}</span>
            </button>
          ))}
        </div>
        <div className="exp-cta-strip reveal">
          <div>
            <h3>{c.cta}</h3>
            <p>{c.ctaSub}</p>
          </div>
          <a href="#contact" className="btn-primary">{c.cta} →</a>
        </div>
      </div>
    </section>
  );
}