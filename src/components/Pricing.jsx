import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Pricing.css';

const copy = {
  es: { label:'Precios', title:'Elige tu aventura', sub:'Precios fijos, sin cargos ocultos. Todo incluido.',
    plans:[
      { dur:'3 Días', name:'Live Aboard', tag:'Únete a un grupo y vive la experiencia Caribe', from:'Desde', amt:'5000', unit:'pesos / noche', items:['Duración: 3 Días','Snorkel incluido','Barra libre (cerveza, refrescos)','Música y entretenimiento','Equipo de snorkel','Botanas a bordo'], cta:'Reservar', ctaStyle:'dark', },
      { dur:'4–6 horas', name:'Tour Privado', tag:'El catamarán exclusivamente para tu grupo', pop:true, from:'Desde', amt:'7,500', unit:'pesos / embarcación', items:['Duración: 4–6 horas','Itinerario personalizado','Cerveza','Fruta y Botana incluida','Snorkel y equipo','Hasta 15 pasajeros'], cta:'Reservar', ctaStyle:'white' },
      { dur:'Flexible', name:'Pesca & Eventos', tag:'Experiencias hechas a tu medida', quote:'Cotización', quoteSub:'personalizada', items:['Pesca deportiva equipada','Eventos corporativos','Bodas y celebraciones','Catering personalizado','Decoración a medida','Fotografía profesional'], cta:'Cotizar', ctaStyle:'dark' },
    ],
    note:'* Precios en USD dependiendo el tipo de cambio. Salidas desde Marina Playacar, Playa del Carmen. Paquetes personalizados disponibles.',
    popular:'★ Más Popular',
  },
  en: { label:'Pricing', title:'Choose your adventure', sub:'Fixed prices, no hidden fees. All included.',
    plans:[
      { dur:'4 hours', name:'Shared Tour', tag:'Join a group and live the Caribbean experience', from:'From', amt:'89', unit:'USD / person', items:['Duration: 4 hours','Snorkel included','Open bar (beer, sodas)','Music & entertainment','Snorkel gear','Snacks on board'], cta:'Book', ctaStyle:'dark' },
      { dur:'4–6 hours', name:'Private Tour', tag:'The catamaran exclusively for your group', pop:true, from:'From', amt:'435', unit:'USD / vessel', items:['Duration: 4–6 hours','Custom itinerary','Premium open bar','Meal included','Snorkel & gear','Up to 15 passengers'], cta:'Book', ctaStyle:'white' },
      { dur:'Flexible', name:'Fishing & Events', tag:'Experiences tailored to you', quote:'Custom', quoteSub:'quote', items:['Equipped sport fishing','Corporate events','Weddings & celebrations','Custom catering','Custom decoration','Professional photography'], cta:'Get Quote', ctaStyle:'dark' },
    ],
    note:'* Prices in USD. Departures from Marina Playacar, Playa del Carmen. Custom packages available.',
    popular:'★ Most Popular',
  },
  fr: { label:'Tarifs', title:'Choisissez votre aventure', sub:'Prix fixes, sans frais cachés. Tout inclus.',
    plans:[
      { dur:'4 heures', name:'Tour Partagé', tag:'Rejoignez un groupe et vivez l\'expérience Caraïbes', from:'À partir de', amt:'89', unit:'USD / personne', items:['Durée : 4 heures','Snorkel inclus','Bar ouvert (bière, sodas)','Musique & divertissement','Équipement snorkel','Collations à bord'], cta:'Réserver', ctaStyle:'dark' },
      { dur:'4–6 heures', name:'Tour Privé', tag:'Le catamaran exclusivement pour votre groupe', pop:true, from:'À partir de', amt:'435', unit:'USD / bateau', items:['Durée : 4–6 heures','Itinéraire personnalisé','Bar ouvert premium','Repas inclus','Snorkel & équipement','Jusqu\'à 15 passagers'], cta:'Réserver', ctaStyle:'white' },
      { dur:'Flexible', name:'Pêche & Événements', tag:'Expériences sur mesure', quote:'Devis', quoteSub:'personnalisé', items:['Pêche sportive équipée','Événements d\'entreprise','Mariages & célébrations','Traiteur personnalisé','Décoration sur mesure','Photographie professionnelle'], cta:'Devis', ctaStyle:'dark' },
    ],
    note:'* Prix en USD. Départs de Marina Playacar, Playa del Carmen.',
    popular:'★ Le plus populaire',
  },
  de: { label:'Preise', title:'Wählen Sie Ihr Abenteuer', sub:'Festpreise, keine versteckten Gebühren. Alles inklusive.',
    plans:[
      { dur:'4 Stunden', name:'Gemeinschaftsreise', tag:'Schließen Sie sich einer Gruppe an und erleben Sie die Karibik', from:'Ab', amt:'89', unit:'USD / Person', items:['Dauer: 4 Stunden','Schnorcheln inklusive','Offene Bar (Bier, Softdrinks)','Musik & Unterhaltung','Schnorchelausrüstung','Snacks an Bord'], cta:'Buchen', ctaStyle:'dark' },
      { dur:'4–6 Stunden', name:'Privatreise', tag:'Das Katamaran exklusiv für Ihre Gruppe', pop:true, from:'Ab', amt:'435', unit:'USD / Schiff', items:['Dauer: 4–6 Stunden','Individuelle Route','Premium offene Bar','Mahlzeit inklusive','Schnorchel & Ausrüstung','Bis zu 15 Passagiere'], cta:'Buchen', ctaStyle:'white' },
      { dur:'Flexibel', name:'Fischen & Events', tag:'Erlebnisse nach Maß', quote:'Angebot', quoteSub:'auf Anfrage', items:['Ausgestattetes Sportfischen','Firmenveranstaltungen','Hochzeiten & Feiern','Individuelles Catering','Individuelle Dekoration','Profifotografie'], cta:'Angebot', ctaStyle:'dark' },
    ],
    note:'* Preise in USD. Abfahrten von Marina Playacar, Playa del Carmen.',
    popular:'★ Am beliebtesten',
  },
};

export default function Pricing() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-inner">
        <div className="pricing-header reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="wave-div" style={{margin:'1rem auto'}} />
          <p className="section-sub">{c.sub}</p>
        </div>
        <div className="pr-grid">
          {c.plans.map((plan, i) => (
            <div key={i} className={`pr-card reveal reveal-delay-${i+1} ${plan.pop ? 'pr-card--pop' : ''}`}>
              {plan.pop && <div className="pop-badge">{c.popular}</div>}
              <div>
                <div className="pr-dur">{plan.dur}</div>
                <div className="pr-name">{plan.name}</div>
                <div className="pr-tagline">{plan.tag}</div>
              </div>
              <div className="pr-price">
                {plan.amt ? (
                  <>
                    <span className="pr-from">{plan.from}</span>
                    <span className="pr-curr">$</span>
                    <span className="pr-amt">{plan.amt}</span>
                    <span className="pr-unit">{plan.unit}</span>
                  </>
                ) : (
                  <div>
                    <span className="pr-quote">{plan.quote}</span>
                    <span style={{marginLeft:'0.4rem', fontSize:'0.8rem', color: plan.pop ? 'rgba(255,255,255,0.6)' : 'var(--text-light)'}}>{plan.quoteSub}</span>
                  </div>
                )}
              </div>
              <ul className="pr-inc">
                {plan.items.map((it, j) => <li key={j}><span className="pr-chk">✓</span>{it}</li>)}
              </ul>
              <a href="#contact" className={`pr-cta pr-cta--${plan.ctaStyle}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
        <p className="pr-note">{c.note}</p>
      </div>
    </section>
  );
}
