import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Events.css';

const copy = {
  es: { label:'Eventos', title:'Rompe la rutina con Inspiration', p1:'Si eres local y estás cansado de repetir siempre los mismos planes con tus amigos, tenemos una gran variedad de eventos a bordo que iremos publicando en nuestras redes sociales.', p2:'El acceso es con un cover económico y cupo limitado; ofrecemos bebidas alcohólicas y no alcohólicas (la comida y las bebidas normales se venden por separado).', cta:'Reservar', specs:[{icon:'🎟️',l:'Cover',v:'$500 MXN por persona'},{icon:'👥',l:'Cupo máximo',v:'15 personas'},{icon:'🍹',l:'Bebidas',v:'Alcohólicas y no alcohólicas'},{icon:'🍽️',l:'Comida y bebidas extra',v:'Se venden por separado'},{icon:'📱',l:'Próximos eventos',v:'Anunciados en redes sociales'}], yr:'Eventos', yrLbl:'Diferentes cada mes' },
  en: { label:'Events', title:'Break the routine with Inspiration', p1:'If you\'re a local tired of repeating the same plans with your friends, we host a wide variety of events on board that we announce on our social media.', p2:'Entry is an affordable cover charge with limited capacity; we offer alcoholic and non-alcoholic drinks (regular food and drinks are sold separately).', cta:'Book Now', specs:[{icon:'🎟️',l:'Cover',v:'$500 MXN per person'},{icon:'👥',l:'Max capacity',v:'15 people'},{icon:'🍹',l:'Drinks',v:'Alcoholic and non-alcoholic'},{icon:'🍽️',l:'Extra food & drinks',v:'Sold separately'},{icon:'📱',l:'Upcoming events',v:'Announced on social media'}], yr:'6+', yrLbl:'Years of experience' },
  fr: { label:'Événements', title:'Sortez de la routine avec Inspiration', p1:'Si vous êtes un habitant fatigué de toujours répéter les mêmes sorties avec vos amis, nous organisons une grande variété d\'événements à bord que nous annonçons sur nos réseaux sociaux.', p2:'L\'accès se fait avec un droit d\'entrée abordable et une capacité limitée ; nous proposons des boissons alcoolisées et non alcoolisées (la nourriture et les boissons classiques se vendent séparément).', cta:'Réserver', specs:[{icon:'🎟️',l:'Entrée',v:'500 MXN par personne'},{icon:'👥',l:'Capacité max',v:'15 personnes'},{icon:'🍹',l:'Boissons',v:'Alcoolisées et non alcoolisées'},{icon:'🍽️',l:'Extras',v:'Vendus séparément'},{icon:'📱',l:'Prochains événements',v:'Annoncés sur les réseaux sociaux'}], yr:'6+', yrLbl:'Années d\'expérience' },
  de: { label:'Events', title:'Durchbrechen Sie die Routine mit Inspiration', p1:'Wenn Sie Einheimischer sind und es leid sind, immer dieselben Pläne mit Ihren Freunden zu wiederholen, bieten wir eine große Vielfalt an Events an Bord, die wir in unseren sozialen Medien ankündigen.', p2:'Der Eintritt erfolgt über einen günstigen Cover-Preis bei begrenzter Kapazität; wir bieten alkoholische und alkoholfreie Getränke an (normales Essen und Getränke werden separat verkauft).', cta:'Buchen', specs:[{icon:'🎟️',l:'Eintritt',v:'500 MXN pro Person'},{icon:'👥',l:'Max. Kapazität',v:'15 Personen'},{icon:'🍹',l:'Getränke',v:'Alkoholisch und alkoholfrei'},{icon:'🍽️',l:'Extras',v:'Separat erhältlich'},{icon:'📱',l:'Kommende Events',v:'Angekündigt in sozialen Medien'}], yr:'6+', yrLbl:'Jahre Erfahrung' },
};

export default function Events() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="events" className="events-section">
      <div className="events-inner">
  <div className="events-visual reveal">
    <div className="events-img-box">
      <img src="/images/imagen2.JPG" alt="Inspiration - Catamarán" className="events-photo" />
    </div>
          <div className="events-badge">
            <span className="ab-num">{c.yr}</span>
            <span className="ab-lbl">{c.yrLbl}</span>
          </div>
        </div>

        <div className="events-content">
          <div className="reveal">
            <span className="section-label">{c.label}</span>
            <h2 className="section-title">{c.title}</h2>
            <div className="wave-div" />
          </div>
          <p className="events-text reveal reveal-delay-1">{c.p1}</p>
          <p className="events-text reveal reveal-delay-2">{c.p2}</p>
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