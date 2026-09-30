import React, { useContext, Fragment } from 'react';
import { LangContext } from './Layout';
import './Blog.css';

const copy = {
  es: {
    eyebrow: 'Inspiration Catamaran',
    titleA: 'Bitácora', titleB: 'a Bordo',
    sub: 'Blog educacional',
    teaser: 'Pregúntanos esta historia en persona — hay más detalles que no caben aquí.',
    posts: [
      {
        badge: 'Pesca Deportiva',
        author: 'Carlos', role: 'Capitán', years: '6 años a bordo',
        title: 'El día que el marlín ganó la primera ronda',
        quote: '"Llevábamos 4 horas. La línea se tensó. Y entonces… se fue. El nudo."',
        body: [
          [
            { t: 'Ese día aprendí más sobre nudos que en toda mi carrera. Un ' },
            { t: 'nudo Palomar mal hecho', b: true },
            { t: ' no aguanta un marlín de 90 kilos. Nadie te dice eso en YouTube.' },
          ],
          [{ t: 'El pasajero me miró. Yo lo miré a él. Y los dos nos reímos porque ¿qué más puedes hacer?' }],
          [{ t: 'Ahora lo primero que reviso antes de cada salida son los nudos. Cada uno. A mano. Sin excepción.' }],
        ],
      },
      {
        badge: 'Tour Privado',
        author: 'Mariana', role: 'Marinera', years: '3 años a bordo',
        title: 'La fiesta que casi se cancela por el viento',
        quote: '"El pronóstico decía 12 nudos. A las 11 am ya íbamos en 22."',
        body: [
          [
            { t: 'Cancelamos la ruta larga y nos quedamos cerca de la costa. Un ' },
            { t: 'aviso de viento sostenido arriba de 20 nudos', b: true },
            { t: ' es motivo suficiente para cambiar el plan, aunque el grupo ya tenga la música lista.' },
          ],
          [{ t: 'Al principio hubo caras largas. Cinco minutos después nadie se acordaba: la vista desde la bahía era igual de buena.' }],
          [{ t: 'Desde entonces revisamos el pronóstico tres veces antes de confirmar la ruta, no una.' }],
        ],
      },
      {
        badge: 'Live Aboard & Safari',
        author: 'Javier', role: 'Instructor de buceo', years: '5 años a bordo',
        title: 'Lo que nadie te dice sobre dormir en altamar',
        quote: '"La primera noche nadie duerme. La segunda, nadie se quiere bajar."',
        body: [
          [
            { t: 'El cuerpo tarda un día completo en acostumbrarse al balanceo. El ' },
            { t: 'mareo de la primera noche', b: true },
            { t: ' es normal y se pasa solo; por eso siempre programamos la clase más ligera para el día uno.' },
          ],
          [{ t: 'Para el segundo día ya nadie pregunta la hora. El barco se convierte en el único reloj que importa.' }],
          [{ t: 'La certificación se siente distinta cuando la sacas durmiendo, comiendo y navegando en el mismo lugar donde la aprendiste.' }],
        ],
      },
      {
        badge: 'Eventos',
        author: 'Ana', role: 'Coordinadora de eventos', years: '4 años a bordo',
        title: 'El cumpleaños que se convirtió en leyenda',
        quote: '"Llegaron 18 personas para un cupo de 15. Alguien se quedó en la marina."',
        body: [
          [
            { t: 'Desde entonces confirmamos la lista dos veces. El ' },
            { t: 'cupo máximo de 15 personas', b: true },
            { t: ' existe por seguridad, no por capricho, y lo cuidamos aunque duela decir que no.' },
          ],
          [{ t: 'Los 15 que sí subieron ni se dieron cuenta del drama en el muelle: la fiesta empezó a tiempo, como siempre.' }],
          [{ t: 'Hoy pedimos confirmación por escrito antes de imprimir cualquier decoración.' }],
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Inspiration Catamaran',
    titleA: 'Logbook', titleB: 'Aboard',
    sub: 'Educational blog',
    teaser: 'Ask us this story in person — there are more details than fit here.',
    posts: [
      {
        badge: 'Sport Fishing',
        author: 'Carlos', role: 'Captain', years: '6 years aboard',
        title: 'The day the marlin won the first round',
        quote: '"We\'d been at it 4 hours. The line went tight. Then… it was gone. The knot."',
        body: [
          [
            { t: 'I learned more about knots that day than in my whole career. A ' },
            { t: 'poorly tied Palomar knot', b: true },
            { t: ' won\'t hold a 90-kilo marlin. Nobody tells you that on YouTube.' },
          ],
          [{ t: 'The passenger looked at me. I looked at him. And we both laughed because, what else can you do?' }],
          [{ t: 'Now the first thing I check before every trip is the knots. Every one. By hand. No exceptions.' }],
        ],
      },
      {
        badge: 'Private Tour',
        author: 'Mariana', role: 'Deckhand', years: '3 years aboard',
        title: 'The party that almost got cancelled over wind',
        quote: '"Forecast said 12 knots. By 11 am we were already at 22."',
        body: [
          [
            { t: 'We cancelled the long route and stayed close to shore. A ' },
            { t: 'sustained wind warning above 20 knots', b: true },
            { t: ' is reason enough to change the plan, even if the group already has the playlist ready.' },
          ],
          [{ t: 'There were some long faces at first. Five minutes later nobody remembered: the view from the bay was just as good.' }],
          [{ t: 'Ever since, we check the forecast three times before confirming the route, not once.' }],
        ],
      },
      {
        badge: 'Live Aboard & Safari',
        author: 'Javier', role: 'Dive instructor', years: '5 years aboard',
        title: 'What nobody tells you about sleeping offshore',
        quote: '"Nobody sleeps the first night. On the second, nobody wants to leave."',
        body: [
          [
            { t: 'The body takes a full day to adjust to the rocking. ' },
            { t: 'First-night seasickness', b: true },
            { t: ' is normal and passes on its own, which is why we always schedule the lightest class for day one.' },
          ],
          [{ t: 'By day two, nobody asks what time it is anymore. The boat becomes the only clock that matters.' }],
          [{ t: 'The certification feels different when you earn it while sleeping, eating and sailing in the very place you learned it.' }],
        ],
      },
      {
        badge: 'Events',
        author: 'Ana', role: 'Events coordinator', years: '4 years aboard',
        title: 'The birthday that became legend',
        quote: '"18 people showed up for a 15-person capacity. Someone stayed at the marina."',
        body: [
          [
            { t: 'Ever since, we confirm the guest list twice. The ' },
            { t: 'maximum capacity of 15 people', b: true },
            { t: ' exists for safety, not for show, and we hold the line even when it\'s hard to say no.' },
          ],
          [{ t: 'The 15 who made it aboard never noticed the drama on the dock: the party started on time, as always.' }],
          [{ t: 'Today we ask for written confirmation before printing any decorations.' }],
        ],
      },
    ],
  },
  fr: {
    eyebrow: 'Inspiration Catamaran',
    titleA: 'Journal', titleB: 'de Bord',
    sub: 'Blog éducatif',
    teaser: 'Demandez-nous cette histoire en personne — il y a plus de détails que ce qui tient ici.',
    posts: [
      {
        badge: 'Pêche Sportive',
        author: 'Carlos', role: 'Capitaine', years: '6 ans à bord',
        title: 'Le jour où le marlin a gagné la première manche',
        quote: '« Ça faisait 4 heures. La ligne s\'est tendue. Et puis… il est parti. Le nœud. »',
        body: [
          [
            { t: 'Ce jour-là, j\'ai appris plus sur les nœuds qu\'en toute ma carrière. Un ' },
            { t: 'nœud Palomar mal fait', b: true },
            { t: ' ne tient pas un marlin de 90 kilos. Personne ne vous le dit sur YouTube.' },
          ],
          [{ t: 'Le passager m\'a regardé. Je l\'ai regardé. Et on a ri tous les deux, parce que que faire d\'autre ?' }],
          [{ t: 'Maintenant, la première chose que je vérifie avant chaque sortie, ce sont les nœuds. Chacun. À la main. Sans exception.' }],
        ],
      },
      {
        badge: 'Tour Privé',
        author: 'Mariana', role: 'Matelot', years: '3 ans à bord',
        title: 'La fête presque annulée à cause du vent',
        quote: '« La météo annonçait 12 nœuds. À 11h, on était déjà à 22. »',
        body: [
          [
            { t: 'Nous avons annulé l\'itinéraire long et sommes restés près de la côte. Une ' },
            { t: 'alerte de vent soutenu au-dessus de 20 nœuds', b: true },
            { t: ' suffit à changer le plan, même si le groupe a déjà sa playlist prête.' },
          ],
          [{ t: 'Au début, quelques visages déçus. Cinq minutes après, plus personne ne s\'en souvenait : la vue depuis la baie était tout aussi belle.' }],
          [{ t: 'Depuis, on vérifie la météo trois fois avant de confirmer l\'itinéraire, pas une seule.' }],
        ],
      },
      {
        badge: 'Live Aboard & Safari',
        author: 'Javier', role: 'Instructeur de plongée', years: '5 ans à bord',
        title: 'Ce que personne ne vous dit sur le sommeil en haute mer',
        quote: '« Personne ne dort la première nuit. La deuxième, personne ne veut repartir. »',
        body: [
          [
            { t: 'Le corps met une journée entière à s\'habituer au roulis. ' },
            { t: 'Le mal de mer de la première nuit', b: true },
            { t: ' est normal et passe tout seul ; c\'est pourquoi on programme toujours l\'activité la plus légère pour le premier jour.' },
          ],
          [{ t: 'Dès le deuxième jour, plus personne ne demande l\'heure. Le bateau devient la seule horloge qui compte.' }],
          [{ t: 'La certification a un autre goût quand on l\'obtient en dormant, mangeant et naviguant là où on l\'a apprise.' }],
        ],
      },
      {
        badge: 'Événements',
        author: 'Ana', role: 'Coordinatrice d\'événements', years: '4 ans à bord',
        title: 'L\'anniversaire devenu légendaire',
        quote: '« 18 personnes sont arrivées pour une capacité de 15. Quelqu\'un est resté à la marina. »',
        body: [
          [
            { t: 'Depuis, on confirme la liste deux fois. La ' },
            { t: 'capacité maximale de 15 personnes', b: true },
            { t: ' existe pour la sécurité, pas par caprice, et on la respecte même quand c\'est difficile de dire non.' },
          ],
          [{ t: 'Les 15 qui sont montés n\'ont jamais su le drame sur le quai : la fête a commencé à l\'heure, comme toujours.' }],
          [{ t: 'Aujourd\'hui, on demande une confirmation écrite avant d\'imprimer la moindre décoration.' }],
        ],
      },
    ],
  },
  de: {
    eyebrow: 'Inspiration Catamaran',
    titleA: 'Logbuch', titleB: 'an Bord',
    sub: 'Lehrreicher Blog',
    teaser: 'Fragen Sie uns persönlich nach dieser Geschichte — es gibt mehr Details, als hier Platz haben.',
    posts: [
      {
        badge: 'Sportfischen',
        author: 'Carlos', role: 'Kapitän', years: '6 Jahre an Bord',
        title: 'Der Tag, an dem der Marlin die erste Runde gewann',
        quote: '„Wir waren schon 4 Stunden dran. Die Leine spannte sich. Und dann… war er weg. Der Knoten."',
        body: [
          [
            { t: 'An dem Tag habe ich mehr über Knoten gelernt als in meiner ganzen Karriere. Ein ' },
            { t: 'schlecht gebundener Palomar-Knoten', b: true },
            { t: ' hält einem 90-Kilo-Marlin nicht stand. Das sagt einem niemand auf YouTube.' },
          ],
          [{ t: 'Der Passagier sah mich an. Ich sah ihn an. Und wir mussten beide lachen, denn was soll man sonst tun?' }],
          [{ t: 'Heute prüfe ich vor jeder Ausfahrt zuerst die Knoten. Jeden einzelnen. Von Hand. Ohne Ausnahme.' }],
        ],
      },
      {
        badge: 'Private Tour',
        author: 'Mariana', role: 'Matrosin', years: '3 Jahre an Bord',
        title: 'Die Party, die fast am Wind scheiterte',
        quote: '„Die Vorhersage sagte 12 Knoten. Um 11 Uhr waren wir schon bei 22."',
        body: [
          [
            { t: 'Wir haben die lange Route abgesagt und blieben küstennah. Eine ' },
            { t: 'anhaltende Windwarnung über 20 Knoten', b: true },
            { t: ' reicht aus, um den Plan zu ändern, auch wenn die Gruppe schon die Playlist bereit hat.' },
          ],
          [{ t: 'Zuerst gab es lange Gesichter. Fünf Minuten später erinnerte sich niemand mehr daran: Die Aussicht von der Bucht war genauso schön.' }],
          [{ t: 'Seitdem prüfen wir die Vorhersage dreimal, bevor wir die Route bestätigen, nicht nur einmal.' }],
        ],
      },
      {
        badge: 'Live Aboard & Safari',
        author: 'Javier', role: 'Tauchlehrer', years: '5 Jahre an Bord',
        title: 'Was einem niemand über das Schlafen auf hoher See erzählt',
        quote: '„In der ersten Nacht schläft niemand. In der zweiten will niemand mehr gehen."',
        body: [
          [
            { t: 'Der Körper braucht einen ganzen Tag, um sich an das Schaukeln zu gewöhnen. Die ' },
            { t: 'Seekrankheit der ersten Nacht', b: true },
            { t: ' ist normal und vergeht von selbst — deshalb planen wir für Tag eins immer die leichteste Aktivität.' },
          ],
          [{ t: 'Am zweiten Tag fragt schon niemand mehr nach der Uhrzeit. Das Boot wird zur einzigen Uhr, die zählt.' }],
          [{ t: 'Die Zertifizierung fühlt sich anders an, wenn man sie beim Schlafen, Essen und Segeln genau dort erwirbt, wo man sie gelernt hat.' }],
        ],
      },
      {
        badge: 'Events',
        author: 'Ana', role: 'Eventkoordinatorin', years: '4 Jahre an Bord',
        title: 'Der Geburtstag, der zur Legende wurde',
        quote: '„18 Personen kamen für eine Kapazität von 15. Jemand musste an der Marina bleiben."',
        body: [
          [
            { t: 'Seitdem bestätigen wir die Gästeliste zweimal. Die ' },
            { t: 'maximale Kapazität von 15 Personen', b: true },
            { t: ' gibt es aus Sicherheitsgründen, nicht aus Laune, und daran halten wir uns, auch wenn Nein-sagen schwerfällt.' },
          ],
          [{ t: 'Die 15, die es an Bord schafften, bekamen von dem Drama am Steg nichts mit: Die Party begann pünktlich, wie immer.' }],
          [{ t: 'Heute verlangen wir eine schriftliche Bestätigung, bevor wir irgendeine Dekoration drucken.' }],
        ],
      },
    ],
  },
};

export default function Blog() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;

  return (
    <section id="blog" className="blog-section">
      <div className="blog-header reveal">
        <span className="blog-eyebrow">⚓ {c.eyebrow}</span>
        <h2 className="blog-title">
          <em>{c.titleA}</em> {c.titleB}
        </h2>
        <span className="blog-sub">{c.sub}</span>
        <div className="wave-div" style={{ margin: '1rem auto' }} />
      </div>

      <div className="blog-grid">
        {c.posts.map((post, i) => (
          <article key={post.badge} className={`blog-card reveal reveal-delay-${i + 1}`}>
            <div className="blog-banner">
              <span className="blog-badge">{post.badge}</span>
              <svg className="blog-deco" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 80 Q60 90 90 60 T170 30" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
                <circle cx="170" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
                <path d="M90 60 L90 20" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
                <path d="M90 20 L115 30 L90 38 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
              </svg>
              <div className="blog-meta">
                <span className="blog-author">{post.author} · {post.role} · {post.years}</span>
                <h3 className="blog-post-title">{post.title}</h3>
              </div>
            </div>
            <div className="blog-content">
              <blockquote className="blog-quote">{post.quote}</blockquote>
              {post.body.map((paragraph, p) => (
                <p key={p} className="blog-body">
                  {paragraph.map((seg, j) =>
                    seg.b ? <strong key={j}>{seg.t}</strong> : <Fragment key={j}>{seg.t}</Fragment>
                  )}
                </p>
              ))}
              <div className="blog-divider" />
              <p className="blog-teaser">⚓ {c.teaser}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}