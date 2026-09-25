import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Sailing.css';

const copy = {
  es: { label:'Sailing', title:'Vive a bordo: Live Aboard & Safari', p1:'Experimenta lo que es vivir en un barco y navegar. Durante 3 días y 2 noches recorrerás Playa del Carmen, Puerto Morelos y Cozumel para obtener tu certificación oficial de vela o de buceo, disponible para grupos de mínimo 4 personas (¿van en pareja? contáctanos).', p2:'Al llegar a cada destino tomarán una clase introductoria de la actividad del día, con un menú amplio traído desde tierra. Un capitán y un instructor estarán a bordo con ustedes en todo momento.', cta:'Reservar', specs:[{icon:'🗓️',l:'Duración',v:'3 días / 2 noches'},{icon:'👥',l:'Grupo mínimo',v:'4 personas'},{icon:'🛏️',l:'Camarotes',v:'4 matrimoniales'},{icon:'🗺️',l:'Ruta',v:'Playa del Carmen · Puerto Morelos · Cozumel'},{icon:'🎓',l:'Certificación',v:'Vela o Buceo'},{icon:'⚓',l:'Tripulación',v:'Capitán + Instructor'},{icon:'🍹',l:'Incluye',v:'Bebidas alcohólicas'},{icon:'🍽️',l:'Comidas',v:'Comidas y snacks'}], yr:'+70', yrLbl:'Horas de aventura' },
  en: { label:'Sailing', title:'Live aboard: Live Aboard & Safari', p1:'Experience what it\'s like to live on a boat and sail. Over 3 days and 2 nights you\'ll travel through Playa del Carmen, Puerto Morelos and Cozumel to earn your official sailing or diving certification, available for groups of 4 or more (traveling as a couple? contact us).', p2:'On arrival at each destination you\'ll take an introductory class for that day\'s activity, with a wide menu brought in from shore. A captain and an instructor will be on board with you at all times.', cta:'Book Now', specs:[{icon:'🗓️',l:'Duration',v:'3 days / 2 nights'},{icon:'👥',l:'Minimum group',v:'4 people'},{icon:'🛏️',l:'Cabins',v:'4 double cabins'},{icon:'🗺️',l:'Route',v:'Playa del Carmen · Puerto Morelos · Cozumel'},{icon:'🎓',l:'Certification',v:'Sailing or Diving'},{icon:'⚓',l:'Crew',v:'Captain + Instructor'},{icon:'🍹',l:'Includes',v:'Alcoholic drinks'},{icon:'🍽️',l:'Meals',v:'Meals and snacks'}], yr:'6+', yrLbl:'Years of experience' },
  fr: { label:'Sailing', title:'Vivez à bord : Live Aboard & Safari', p1:'Découvrez ce que c\'est de vivre sur un bateau et de naviguer. Pendant 3 jours et 2 nuits, vous parcourrez Playa del Carmen, Puerto Morelos et Cozumel pour obtenir votre certification officielle de voile ou de plongée, disponible pour des groupes de 4 personnes minimum (en couple ? contactez-nous).', p2:'À l\'arrivée à chaque destination, vous suivrez un cours d\'introduction à l\'activité du jour, avec un menu varié apporté depuis la terre. Un capitaine et un instructeur seront à bord avec vous à tout moment.', cta:'Réserver', specs:[{icon:'🗓️',l:'Durée',v:'3 jours / 2 nuits'},{icon:'👥',l:'Groupe minimum',v:'4 personnes'},{icon:'🛏️',l:'Cabines',v:'4 cabines doubles'},{icon:'🗺️',l:'Itinéraire',v:'Playa del Carmen · Puerto Morelos · Cozumel'},{icon:'🎓',l:'Certification',v:'Voile ou Plongée'},{icon:'⚓',l:'Équipage',v:'Capitaine + Instructeur'},{icon:'🍹',l:'Inclus',v:'Boissons alcoolisées'},{icon:'🍽️',l:'Repas',v:'Repas et collations'}], yr:'6+', yrLbl:'Années d\'expérience' },
  de: { label:'Sailing', title:'Leben an Bord: Live Aboard & Safari', p1:'Erleben Sie, wie es ist, auf einem Boot zu leben und zu segeln. In 3 Tagen und 2 Nächten reisen Sie durch Playa del Carmen, Puerto Morelos und Cozumel, um Ihr offizielles Segel- oder Tauchzertifikat zu erwerben, verfügbar für Gruppen ab 4 Personen (als Paar unterwegs? kontaktieren Sie uns).', p2:'Bei der Ankunft an jedem Ziel nehmen Sie an einer Einführungsstunde zur Aktivität des Tages teil, mit einem vielfältigen Menü vom Festland. Ein Kapitän und ein Instruktor sind die ganze Zeit mit Ihnen an Bord.', cta:'Buchen', specs:[{icon:'🗓️',l:'Dauer',v:'3 Tage / 2 Nächte'},{icon:'👥',l:'Mindestgruppe',v:'4 Personen'},{icon:'🛏️',l:'Kabinen',v:'4 Doppelkabinen'},{icon:'🗺️',l:'Route',v:'Playa del Carmen · Puerto Morelos · Cozumel'},{icon:'🎓',l:'Zertifizierung',v:'Segeln oder Tauchen'},{icon:'⚓',l:'Besatzung',v:'Kapitän + Instruktor'},{icon:'🍹',l:'Inklusive',v:'Alkoholische Getränke'},{icon:'🍽️',l:'Mahlzeiten',v:'Mahlzeiten und Snacks'}], yr:'6+', yrLbl:'Jahre Erfahrung' },
};

export default function Sailing() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="sailing" className="sailing-section">
      <div className="sailing-inner">
  <div className="sailing-visual reveal">
    <div className="sailing-img-box">
      <img src={`${import.meta.env.BASE_URL}images/imagen3.JPG`} alt="Inspiration - Catamarán" className="sailing-photo" />
    </div>
          <div className="sailing-badge">
            <span className="ab-num">{c.yr}</span>
            <span className="ab-lbl">{c.yrLbl}</span>
          </div>
        </div>

        <div className="sailing-content">
          <div className="reveal">
            <span className="section-label">{c.label}</span>
            <h2 className="section-title">{c.title}</h2>
            <div className="wave-div" />
          </div>
          <p className="sailing-text reveal reveal-delay-1">{c.p1}</p>
          <p className="sailing-text reveal reveal-delay-2">{c.p2}</p>
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