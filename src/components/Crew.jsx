import React, { useContext } from 'react';
import { LangContext } from './Layout';
import './Crew.css';

const copy = {
es: { label:'Conoce a la tripulación', title:'Quienes te llevan a navegar', p1:'Cada salida cuenta con una tripulación que conoce estas aguas y cuida de ti en todo momento. Son quienes hacen que el día fluya, desde que subes a bordo hasta que regresas al muelle.', p2:'Además de navegar, les gusta enseñar: te guían en el snorkel, te explican cómo armar un carrete y, en los viajes de varios días, te acompañan hacia tu certificación.', cta:'Reservar', alt:'La tripulación de Inspiration', members:[{icon:'⚓',role:'Capitán',v:'Navegación y seguridad',d:'Traza la ruta, lee el mar y se asegura de que todos a bordo estén cómodos y seguros.'},{icon:'🤿',role:'Marinero',v:'Snorkel y pesca',d:'Te ayuda a subir, prepara el equipo de snorkel y, en pesca, te enseña a armar el carrete, hacer nudos y manejar la caña.'},{icon:'🧭',role:'Instructor',v:'Vela y certificación',d:'En los viajes de varios días da una clase introductoria en cada destino y te guía hacia tu certificación oficial de vela o buceo.'}] },
en: { label:'Meet the crew', title:'The people who take you out', p1:"Every trip has a crew that knows these waters and looks after you the whole way. They keep the day running smoothly, from the moment you step aboard until you're back at the dock.", p2:'Besides sailing, they like to teach: they guide you while snorkeling, show you how to rig a reel and, on multi-day trips, walk you toward your certification.', cta:'Book Now', alt:'The Inspiration crew', members:[{icon:'⚓',role:'Captain',v:'Navigation and safety',d:'Sets the route, reads the sea and makes sure everyone on board is comfortable and safe.'},{icon:'🤿',role:'Deckhand',v:'Snorkel and fishing',d:'Helps you board, gets the snorkel gear ready and, on fishing trips, teaches you how to rig a reel, tie knots and handle the rod.'},{icon:'🧭',role:'Instructor',v:'Sailing and certification',d:'On multi-day trips gives an introductory class at every stop and guides you toward your official sailing or diving certification.'}] },
fr: { label:"Rencontrez l'équipage", title:'Ceux qui vous emmènent en mer', p1:"Chaque sortie compte sur un équipage qui connaît ces eaux et veille sur vous à chaque instant. C'est lui qui fait que la journée se déroule bien, de votre arrivée à bord jusqu'au retour au quai.", p2:"En plus de naviguer, ils aiment transmettre : ils vous guident en snorkeling, vous montrent comment monter un moulinet et, lors des séjours de plusieurs jours, vous accompagnent vers votre certification.", cta:'Réserver', alt:"L'équipage d'Inspiration", members:[{icon:'⚓',role:'Capitaine',v:'Navigation et sécurité',d:"Trace la route, lit la mer et veille à ce que tout le monde à bord soit à l'aise et en sécurité."},{icon:'🤿',role:'Matelot',v:'Snorkeling et pêche',d:"Vous aide à embarquer, prépare le matériel de snorkeling et, à la pêche, vous apprend à monter le moulinet, faire les nœuds et manier la canne."},{icon:'🧭',role:'Instructeur',v:'Voile et certification',d:"Lors des séjours de plusieurs jours, donne un cours d'introduction à chaque escale et vous guide vers votre certification officielle de voile ou de plongée."}] },
de: { label:'Lerne die Crew kennen', title:'Die Menschen an Bord', p1:'Auf jeder Fahrt ist eine Crew dabei, die diese Gewässer kennt und jederzeit auf Sie achtet. Sie sorgt dafür, dass der Tag reibungslos verläuft, vom Einsteigen bis zur Rückkehr an den Steg.', p2:'Neben dem Segeln vermitteln sie gern ihr Wissen: Sie begleiten Sie beim Schnorcheln, zeigen, wie man eine Angelrolle aufbaut, und führen Sie auf mehrtägigen Törns zu Ihrer Zertifizierung.', cta:'Buchen', alt:'Die Crew der Inspiration', members:[{icon:'⚓',role:'Kapitän',v:'Navigation und Sicherheit',d:'Legt die Route fest, liest das Meer und sorgt dafür, dass sich alle an Bord wohl und sicher fühlen.'},{icon:'🤿',role:'Matrose',v:'Schnorcheln und Angeln',d:'Hilft beim Einsteigen, bereitet die Schnorchelausrüstung vor und zeigt beim Angeln, wie man die Rolle aufbaut, Knoten bindet und die Angel führt.'},{icon:'🧭',role:'Instruktor',v:'Segeln und Zertifizierung',d:'Auf mehrtägigen Törns gibt er an jedem Ziel eine Einführung und begleitet Sie zu Ihrer offiziellen Segel- oder Tauchzertifizierung.'}] },
};

export default function Crew() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="crew" className="crew-section">
      <div className="crew-inner">
        <div className="crew-visual reveal">
          <div className="crew-img-box">
            <img src={`${import.meta.env.BASE_URL}images/crew.JPG`} alt={c.alt} className="crew-photo" />
          </div>
        </div>

        <div className="crew-content">
          <div className="reveal">
            <span className="section-label">{c.label}</span>
            <h2 className="section-title">{c.title}</h2>
            <div className="wave-div" />
          </div>
          <p className="crew-text reveal reveal-delay-1">{c.p1}</p>
          <p className="crew-text reveal reveal-delay-2">{c.p2}</p>
          <div className="crew-list reveal reveal-delay-3">
            {c.members.map((m, i) => (
              <div key={i} className="crew-item">
                <span className="crew-icon">{m.icon}</span>
                <div>
                  <span className="crew-role">{m.role}</span>
                  <span className="crew-value">{m.v}</span>
                  <span className="crew-desc">{m.d}</span>
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