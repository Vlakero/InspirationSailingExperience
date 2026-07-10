import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Experiences.css';

const copy = {
  es: { label:'Experiencias', title:'Momentos que recordarás siempre', sub:'Cada experiencia a bordo del Inspiration es única e irrepetible.', cta:'Planea tu viaje', ctaSub:'Cada experiencia a un clic de distancia.',
    cards:[
      { cat:'Diversión sin límites', title:'Tours & Fiestas', desc:'Navega el Caribe con amigos y familia. Música, bebidas y snorkel en los arrecifes más hermosos.', tag:'Más Popular', bg:'linear-gradient(135deg,#0a3a5c,#1a6a9a)' },
      { cat:'Adrenalina pura', title:'Pesca Deportiva', desc:'Aguas del Caribe ricas en marlín, pez vela y dorado. Guías expertos y equipo profesional.', tag:'Emocionante', bg:'linear-gradient(135deg,#1a4a2a,#2a7a4a)' },
      { cat:'Puesta de sol mágica', title:'Sunset & Cócteles', desc:'El espectáculo del atardecer caribeño con champagne, música y la brisa del mar.', tag:'Romántico', bg:'linear-gradient(135deg,#6a2a10,#c07020)' },
      { cat:'Ocasiones especiales', title:'Bodas & Eventos', desc:'Tu evento más especial en alta mar. Decoración, catering gourmet y momentos para siempre.', tag:'Memorable', bg:'linear-gradient(135deg,#3a1a6a,#7a40b0)' },
    ]
  },
  en: { label:'Experiences', title:'Moments you will always remember', sub:'Every experience aboard Inspiration is unique and unforgettable.', cta:'Plan your trip', ctaSub:'Every experience is one click away.',
    cards:[
      { cat:'Limitless fun', title:'Tours & Parties', desc:'Sail the Caribbean with friends and family. Music, drinks and snorkeling at the most beautiful reefs.', tag:'Most Popular', bg:'linear-gradient(135deg,#0a3a5c,#1a6a9a)' },
      { cat:'Pure adrenaline', title:'Sport Fishing', desc:'Caribbean waters rich in marlin, sailfish and mahi-mahi. Expert guides and professional equipment.', tag:'Thrilling', bg:'linear-gradient(135deg,#1a4a2a,#2a7a4a)' },
      { cat:'Magic sunset', title:'Sunset & Cocktails', desc:'The Caribbean sunset spectacle with champagne, music and sea breeze.', tag:'Romantic', bg:'linear-gradient(135deg,#6a2a10,#c07020)' },
      { cat:'Special occasions', title:'Weddings & Events', desc:'Your most special event on the high seas. Décor, gourmet catering and memories forever.', tag:'Memorable', bg:'linear-gradient(135deg,#3a1a6a,#7a40b0)' },
    ]
  },
  fr: { label:'Expériences', title:'Des moments que vous n\'oublierez jamais', sub:'Chaque expérience à bord de l\'Inspiration est unique et inoubliable.', cta:'Planifiez votre voyage', ctaSub:'Chaque expérience à portée de clic.',
    cards:[
      { cat:'Plaisir sans limites', title:'Tours & Fêtes', desc:'Naviguez dans les Caraïbes avec amis et famille. Musique, boissons et plongée aux plus beaux récifs.', tag:'Plus populaire', bg:'linear-gradient(135deg,#0a3a5c,#1a6a9a)' },
      { cat:'Adrénaline pure', title:'Pêche sportive', desc:'Eaux riches en marlin, voilier et mahi-mahi. Guides experts et équipement professionnel.', tag:'Palpitant', bg:'linear-gradient(135deg,#1a4a2a,#2a7a4a)' },
      { cat:'Coucher de soleil magique', title:'Coucher de soleil & Cocktails', desc:'Le spectacle du coucher de soleil caribéen avec champagne, musique et brise marine.', tag:'Romantique', bg:'linear-gradient(135deg,#6a2a10,#c07020)' },
      { cat:'Occasions spéciales', title:'Mariages & Événements', desc:'Votre événement le plus spécial en haute mer. Décoration, gastronomie et souvenirs pour toujours.', tag:'Mémorable', bg:'linear-gradient(135deg,#3a1a6a,#7a40b0)' },
    ]
  },
  de: { label:'Erlebnisse', title:'Momente, die Sie nie vergessen werden', sub:'Jedes Erlebnis an Bord der Inspiration ist einzigartig und unvergesslich.', cta:'Reise planen', ctaSub:'Jedes Erlebnis ist einen Klick entfernt.',
    cards:[
      { cat:'Grenzenloser Spaß', title:'Touren & Partys', desc:'Segeln Sie mit Freunden und Familie durch die Karibik. Musik, Getränke und Schnorcheln.', tag:'Beliebteste', bg:'linear-gradient(135deg,#0a3a5c,#1a6a9a)' },
      { cat:'Pur Adrenalin', title:'Sportfischen', desc:'Karibische Gewässer reich an Marlin, Segelfisch und Mahi-Mahi. Experten und Profiausrüstung.', tag:'Aufregend', bg:'linear-gradient(135deg,#1a4a2a,#2a7a4a)' },
      { cat:'Magischer Sonnenuntergang', title:'Sonnenuntergang & Cocktails', desc:'Das karibische Sonnenuntergangsspektakel mit Champagner, Musik und Meeresbrise.', tag:'Romantisch', bg:'linear-gradient(135deg,#6a2a10,#c07020)' },
      { cat:'Besondere Anlässe', title:'Hochzeiten & Events', desc:'Ihr besonderes Event auf hoher See. Dekoration, Gourmet-Catering und unvergessliche Momente.', tag:'Unvergesslich', bg:'linear-gradient(135deg,#3a1a6a,#7a40b0)' },
    ]
  },
};

export default function Experiences() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;
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
            <div key={i} className={`exp-card reveal reveal-delay-${i+1}`}>
              <div className="exp-bg" style={{background: card.bg}} />
              <div className="exp-overlay" />
              <div className="exp-tag-pill">{card.tag}</div>
              <div className="exp-content">
                <span className="exp-cat">{card.cat}</span>
                <div className="exp-title">{card.title}</div>
                <div className="exp-desc">{card.desc}</div>
              </div>
            </div>
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
