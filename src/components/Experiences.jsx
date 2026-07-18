import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Experiences.css';

const copy = {
  es: { label:'Experiencias', title:'Momentos que recordarás siempre', sub:'Cada experiencia a bordo del Inspiration es única e irrepetible.', cta:'Planea tu viaje', ctaSub:'Cada experiencia a un clic de distancia.',
    cards:[
      { slug:'tours-fiestas', icon:'⛵', cat:'Diversión sin límites', title:'Tours & Fiestas', desc:'Navega el Caribe con amigos y familia. Música, bebidas y snorkel en los arrecifes más hermosos.', tag:'Más Popular' },
      { slug:'pesca-deportiva', icon:'🎣', cat:'Adrenalina pura', title:'Pesca Deportiva', desc:'Aguas del Caribe ricas en marlín, pez vela y dorado. Guías expertos y equipo profesional.', tag:'Emocionante' },
      { slug:'sunset-cocteles', icon:'🍹', cat:'Puesta de sol mágica', title:'Sunset & Cócteles', desc:'El espectáculo del atardecer caribeño con champagne, música y la brisa del mar.', tag:'Romántico' },
      { slug:'bodas-eventos', icon:'💍', cat:'Ocasiones especiales', title:'Bodas & Eventos', desc:'Tu evento más especial en alta mar. Decoración, catering gourmet y momentos para siempre.', tag:'Memorable' },
    ]
  },
  en: { label:'Experiences', title:'Moments you will always remember', sub:'Every experience aboard Inspiration is unique and unforgettable.', cta:'Plan your trip', ctaSub:'Every experience is one click away.',
    cards:[
      { slug:'tours-parties', icon:'⛵', cat:'Limitless fun', title:'Tours & Parties', desc:'Sail the Caribbean with friends and family. Music, drinks and snorkeling at the most beautiful reefs.', tag:'Most Popular' },
      { slug:'sport-fishing', icon:'🎣', cat:'Pure adrenaline', title:'Sport Fishing', desc:'Caribbean waters rich in marlin, sailfish and mahi-mahi. Expert guides and professional equipment.', tag:'Thrilling' },
      { slug:'sunset-cocktails', icon:'🍹', cat:'Magic sunset', title:'Sunset & Cocktails', desc:'The Caribbean sunset spectacle with champagne, music and sea breeze.', tag:'Romantic' },
      { slug:'weddings-events', icon:'💍', cat:'Special occasions', title:'Weddings & Events', desc:'Your most special event on the high seas. Décor, gourmet catering and memories forever.', tag:'Memorable' },
    ]
  },
  fr: { label:'Expériences', title:'Des moments que vous n\'oublierez jamais', sub:'Chaque expérience à bord de l\'Inspiration est unique et inoubliable.', cta:'Planifiez votre voyage', ctaSub:'Chaque expérience à portée de clic.',
    cards:[
      { slug:'tours-fetes', icon:'⛵', cat:'Plaisir sans limites', title:'Tours & Fêtes', desc:'Naviguez dans les Caraïbes avec amis et famille. Musique, boissons et plongée aux plus beaux récifs.', tag:'Plus populaire' },
      { slug:'peche-sportive', icon:'🎣', cat:'Adrénaline pure', title:'Pêche sportive', desc:'Eaux riches en marlin, voilier et mahi-mahi. Guides experts et équipement professionnel.', tag:'Palpitant' },
      { slug:'coucher-de-soleil-cocktails', icon:'🍹', cat:'Coucher de soleil magique', title:'Coucher de soleil & Cocktails', desc:'Le spectacle du coucher de soleil caribéen avec champagne, musique et brise marine.', tag:'Romantique' },
      { slug:'mariages-evenements', icon:'💍', cat:'Occasions spéciales', title:'Mariages & Événements', desc:'Votre événement le plus spécial en haute mer. Décoration, gastronomie et souvenirs pour toujours.', tag:'Mémorable' },
    ]
  },
  de: { label:'Erlebnisse', title:'Momente, die Sie nie vergessen werden', sub:'Jedes Erlebnis an Bord der Inspiration ist einzigartig und unvergesslich.', cta:'Reise planen', ctaSub:'Jedes Erlebnis ist einen Klick entfernt.',
    cards:[
      { slug:'touren-partys', icon:'⛵', cat:'Grenzenloser Spaß', title:'Touren & Partys', desc:'Segeln Sie mit Freunden und Familie durch die Karibik. Musik, Getränke und Schnorcheln.', tag:'Beliebteste' },
      { slug:'sportfischen', icon:'🎣', cat:'Pur Adrenalin', title:'Sportfischen', desc:'Karibische Gewässer reich an Marlin, Segelfisch und Mahi-Mahi. Experten und Profiausrüstung.', tag:'Aufregend' },
      { slug:'sonnenuntergang-cocktails', icon:'🍹', cat:'Magischer Sonnenuntergang', title:'Sonnenuntergang & Cocktails', desc:'Das karibische Sonnenuntergangsspektakel mit Champagner, Musik und Meeresbrise.', tag:'Romantisch' },
      { slug:'hochzeiten-events', icon:'💍', cat:'Besondere Anlässe', title:'Hochzeiten & Events', desc:'Ihr besonderes Event auf hoher See. Dekoration, Gourmet-Catering und unvergessliche Momente.', tag:'Unvergesslich' },
    ]
  },
};

export default function Experiences() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  // TODO: cuando existan las rutas/páginas de cada experiencia,
  // reemplaza esta función por tu navegación real
  // (por ejemplo, con React Router: navigate(`/experiencias/${slug}`))
  const handleCardClick = (slug) => {
    console.log('Navegar a experiencia:', slug);
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