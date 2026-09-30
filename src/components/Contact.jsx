import React, { useState, useContext } from 'react';
import { LangContext } from './Layout';
import './Contact.css';

const SOCIAL_ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z"/>
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 0h-3.3v15.4a3.4 3.4 0 1 1-2.4-3.26V8.8a6.7 6.7 0 1 0 5.7 6.6V9.53a8.16 8.16 0 0 0 4.76 1.52V7.75a4.85 4.85 0 0 1-4.76-4.8Z"/>
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.13-.27-.2-.56-.35Z"/>
      <path d="M12.04 0a11.94 11.94 0 0 0-10.3 17.94L0 24l6.2-1.62a11.94 11.94 0 1 0 5.84-22.38Zm0 21.86a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.96.98-3.58-.24-.37A9.91 9.91 0 1 1 12.04 21.86Z"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"/>
    </svg>
  ),
};

// Access Key de Web3Forms (ligada a egomancera@gmail.com para pruebas;
// cuando pases al correo final, genera una nueva key en web3forms.com
// con inspirationcatamaran42@gmail.com y reemplázala aquí).
const WEB3FORMS_ACCESS_KEY = '92cf16fc-9861-46ac-89c6-5a9886872927';
const MAX_PEOPLE = 15;
const EXTRA_COST_THRESHOLD = 10;
const EXTRA_COST_PER_PERSON = 1000;
const EXTRA_COST_PER_PERSON_USD = 55;

const copy = {
  es: {
    label: 'Contacto', title: 'Reserva tu experiencia', sub: 'Completa el formulario y te respondemos en menos de 24 horas.',
    infoTitle: 'Información',
    details: [
      { icon: '📍', l: 'Dirección', v: 'BlueBay Grand Esmeralda Puerto Juarez, Carretera Chetumal Km. 300, 77710 Playa del Carmen, Quintana Roo' },
      { icon: '📞', l: 'Teléfono', v: '+52 984 233 0557' },
      { icon: '✉️', l: 'Email', v: 'inspirationcatamaran42@gmail.com' },
    ],
    qrTitle: 'Síguenos en redes',
    qrItems: [
      { icon: '📷', label: 'Instagram', sub: '@inspirationcatamaran', url: 'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4' },
      { icon: '📱', label: 'TikTok', sub: '@inspiration.catam', url: 'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS' },
      { icon: '💬', label: 'WhatsApp', sub: '+52 984 233 0557', url: 'https://wa.me/529842330557' },
      { icon: '📘', label: 'Facebook', sub: 'Inspiration Catamaran', url: 'https://www.facebook.com/InspirationCatamaran' },
    ],
    formTitle: 'Envíanos un mensaje',
    fields: {
      name: 'Nombre', email: 'Email', phone: 'Teléfono', service: 'Servicio', msg: 'Mensaje',
      people: 'Número de personas',
      allergies: '¿Tienen alergias?', allergyDetail: '¿A qué son alérgicos?',
      swim: '¿Todos saben nadar?', nonSwimmers: '¿Cuántas personas no saben nadar?',
      celebration: '¿Celebran algo especial?',
    },
    placeholders: {
      name: 'Tu nombre', email: 'tu@email.com', phone: '+52 984 ...', msg: 'Cuéntanos sobre tu viaje ideal...',
      allergyDetail: 'Ej. mariscos, nueces, lactosa...',
    },
    services: [ 'Tour Privado', 'Pesca Deportiva', 'Live Aboard & Safari', 'Evento ', 'Otro'],
    yesNo: { yes: 'Sí', no: 'No' },
    swimOptions: { all: 'Sí, todos saben nadar', notAll: 'No, no todos saben nadar' },
    warnings: {
      extraCost: `Los grupos de más de ${EXTRA_COST_THRESHOLD} personas tienen un costo adicional de $${EXTRA_COST_PER_PERSON} MXN por persona.`,
      swim: 'Por favor menciona en tu mensaje cuántas personas no saben nadar, por seguridad a bordo.',
      celebration: 'Por favor menciona en tu mensaje qué están celebrando, para preparar algo especial.',
    },
    submit: 'Enviar Mensaje', sending: 'Enviando...',
    footnote: 'Sin compromiso. Te respondemos en menos de 24 horas.',
    successTitle: '¡Mensaje enviado!', successMsg: 'Gracias, te contactaremos pronto para confirmar tu reserva.', successBtn: 'Enviar otro mensaje',
    errorMsg: 'No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directo por WhatsApp.',
  },
  en: {
    label: 'Contact', title: 'Book your experience', sub: 'Fill out the form and we will reply within 24 hours.',
    infoTitle: 'Information',
    details: [
      { icon: '📍', l: 'Address', v: 'BlueBay Grand Esmeralda Puerto Juarez, Carretera Chetumal Km. 300, 77710 Playa del Carmen, Quintana Roo' },
      { icon: '📞', l: 'Phone', v: '+52 984 233 0557' },
      { icon: '✉️', l: 'Email', v: 'inspirationcatamaran42@gmail.com' },
    ],
    qrTitle: 'Follow us',
    qrItems: [
      { icon: '📷', label: 'Instagram', sub: '@inspirationcatamaran', url: 'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4' },
      { icon: '📱', label: 'TikTok', sub: '@inspiration.catam', url: 'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS' },
      { icon: '💬', label: 'WhatsApp', sub: '+52 984 233 0557', url: 'https://wa.me/529842330557' },
      { icon: '📘', label: 'Facebook', sub: 'Inspiration Catamaran', url: 'https://www.facebook.com/InspirationCatamaran' },
    ],
    formTitle: 'Send us a message',
    fields: {
      name: 'Name', email: 'Email', phone: 'Phone', service: 'Service', msg: 'Message',
      people: 'Number of people',
      allergies: 'Any allergies?', allergyDetail: 'What are they allergic to?',
      swim: 'Can everyone swim?', nonSwimmers: 'How many people cannot swim?',
      celebration: 'Celebrating something special?',
    },
    placeholders: {
      name: 'Your name', email: 'you@email.com', phone: '+52 984 ...', msg: 'Tell us about your ideal trip...',
      allergyDetail: 'E.g. shellfish, nuts, lactose...',
    },
    services: ['Private Tour', 'Sport Fishing', 'Live Aboard & Safari', 'Event ', 'Other'],
    yesNo: { yes: 'Yes', no: 'No' },
    swimOptions: { all: 'Yes, everyone can swim', notAll: 'No, not everyone can swim' },
    warnings: {
      extraCost: `Groups larger than ${EXTRA_COST_THRESHOLD} people have an extra cost of $${EXTRA_COST_PER_PERSON_USD} USD per person.`,
      swim: 'Please mention in your message how many people cannot swim, for safety on board.',
      celebration: 'Please mention in your message what you are celebrating, so we can prepare something special.',
    },
    submit: 'Send Message', sending: 'Sending...',
    footnote: 'No commitment. We reply within 24 hours.',
    successTitle: 'Message sent!', successMsg: 'Thank you, we will contact you soon to confirm your booking.', successBtn: 'Send another message',
    errorMsg: 'We could not send your message. Please try again or reach us directly on WhatsApp.',
  },
  fr: {
    label: 'Contact', title: 'Réservez votre expérience', sub: 'Remplissez le formulaire et nous vous répondrons dans les 24 heures.',
    infoTitle: 'Informations',
    details: [
      { icon: '📍', l: 'Adresse', v: 'BlueBay Grand Esmaeralda Puerto Juarez, Carretera Chetumal Km. 300, 77710 Playa del Carmen, Quintana Roo, Mexique' },
      { icon: '📞', l: 'Téléphone', v: '+52 984 233 0557' },
      { icon: '✉️', l: 'Email', v: 'inspirationcatamaran42@gmail.com' },
    ],
    qrTitle: 'Suivez-nous',
    qrItems: [
      { icon: '📷', label: 'Instagram', sub: '@inspirationcatamaran', url: 'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4' },
      { icon: '📱', label: 'TikTok', sub: '@inspiration.catam', url: 'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS' },
      { icon: '💬', label: 'WhatsApp', sub: '+52 984 233 0557', url: 'https://wa.me/529842330557' },
      { icon: '📘', label: 'Facebook', sub: 'Inspiration Catamaran', url: 'https://www.facebook.com/InspirationCatamaran' },
    ],
    formTitle: 'Envoyez-nous un message',
    fields: {
      name: 'Nom', email: 'Email', phone: 'Téléphone', service: 'Service', msg: 'Message',
      people: 'Nombre de personnes',
      allergies: 'Avez-vous des allergies ?', allergyDetail: 'À quoi êtes-vous allergique ?',
      swim: 'Tout le monde sait-il nager ?', nonSwimmers: 'Combien de personnes ne savent pas nager ?',
      celebration: 'Fêtez-vous quelque chose de spécial ?',
    },
    placeholders: {
      name: 'Votre nom', email: 'vous@email.com', phone: '+33 1 ...', msg: 'Parlez-nous de votre voyage idéal...',
      allergyDetail: 'Ex. fruits de mer, noix, lactose...',
    },
    services: ['Tour Privé', 'Pêche Sportive', 'Live Aboard & Safari', 'Événement', 'Autre'],
    yesNo: { yes: 'Oui', no: 'Non' },
    swimOptions: { all: 'Oui, tout le monde sait nager', notAll: 'Non, tout le monde ne sait pas nager' },
    warnings: {
      extraCost: `Les groupes de plus de ${EXTRA_COST_THRESHOLD} personnes ont un coût supplémentaire de ${EXTRA_COST_PER_PERSON_USD} USD par personne.`,
      swim: 'Merci de préciser dans votre message combien de personnes ne savent pas nager, pour la sécurité à bord.',
      celebration: 'Merci de préciser dans votre message ce que vous célébrez, afin de préparer quelque chose de spécial.',
    },
    submit: 'Envoyer le message', sending: 'Envoi en cours...',
    footnote: 'Sans engagement. Nous répondons sous 24h.',
    successTitle: 'Message envoyé !', successMsg: 'Merci, nous vous contacterons bientôt pour confirmer votre réservation.', successBtn: 'Envoyer un autre message',
    errorMsg: 'Nous n\'avons pas pu envoyer votre message. Réessayez ou contactez-nous directement sur WhatsApp.',
  },
  de: {
    label: 'Kontakt', title: 'Buchen Sie Ihr Erlebnis', sub: 'Füllen Sie das Formular aus und wir antworten innerhalb von 24 Stunden.',
    infoTitle: 'Informationen',
    details: [
      { icon: '📍', l: 'Adresse', v: 'BlueBay Grand Esmeralda Puerto Juarez, Carretera Chetumal Km. 300, 77710 Playa del Carmen, Quintana Roo, Mexiko' },
      { icon: '📞', l: 'Telefon', v: '+52 984 233 0557' },
      { icon: '✉️', l: 'E-Mail', v: 'inspirationcatamaran42@gmail.com' },
    ],
    qrTitle: 'Folgen Sie uns',
    qrItems: [
      { icon: '📷', label: 'Instagram', sub: '@inspirationcatamaran', url: 'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4' },
      { icon: '📱', label: 'TikTok', sub: '@inspiration.catam', url: 'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS' },
      { icon: '💬', label: 'WhatsApp', sub: '+52 984 233 0557', url: 'https://wa.me/529842330557' },
      { icon: '📘', label: 'Facebook', sub: 'Inspiration Catamaran', url: 'https://www.facebook.com/InspirationCatamaran' },
    ],
    formTitle: 'Senden Sie uns eine Nachricht',
    fields: {
      name: 'Name', email: 'E-Mail', phone: 'Telefon', service: 'Service', msg: 'Nachricht',
      people: 'Anzahl der Personen',
      allergies: 'Haben Sie Allergien?', allergyDetail: 'Wogegen sind Sie allergisch?',
      swim: 'Können alle schwimmen?', nonSwimmers: 'Wie viele Personen können nicht schwimmen?',
      celebration: 'Feiern Sie etwas Besonderes?',
    },
    placeholders: {
      name: 'Ihr Name', email: 'Sie@email.com', phone: '+49 30 ...', msg: 'Erzählen Sie uns von Ihrer idealen Reise...',
      allergyDetail: 'Z.B. Meeresfrüchte, Nüsse, Laktose...',
    },
    services: ['Privatreise', 'Sportfischen', 'Live Aboard & Safari', 'Veranstaltung', 'Andere'],
    yesNo: { yes: 'Ja', no: 'Nein' },
    swimOptions: { all: 'Ja, alle können schwimmen', notAll: 'Nein, nicht alle können schwimmen' },
    warnings: {
      extraCost: `Gruppen mit mehr als ${EXTRA_COST_THRESHOLD} Personen haben Mehrkosten von ${EXTRA_COST_PER_PERSON_USD} USD pro Person.`,
      swim: 'Bitte geben Sie in Ihrer Nachricht an, wie viele Personen nicht schwimmen können, aus Sicherheitsgründen an Bord.',
      celebration: 'Bitte geben Sie in Ihrer Nachricht an, was Sie feiern, damit wir etwas Besonderes vorbereiten können.',
    },
    submit: 'Nachricht senden', sending: 'Wird gesendet...',
    footnote: 'Unverbindlich. Wir antworten innerhalb von 24 Stunden.',
    successTitle: 'Nachricht gesendet!', successMsg: 'Danke, wir werden uns bald bei Ihnen melden.', successBtn: 'Weitere Nachricht senden',
    errorMsg: 'Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns dirzekt per WhatsApp.',
  },
};

const initialForm = {
  name: '', email: '', phone: '', service: '', msg: '',
  people: '',
  allergies: '', allergyDetail: '',
  swim: '', nonSwimmers: '',
  celebration: '',
};

export default function Contact() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => {
      const next = { ...p, [name]: value };
      if (name === 'allergies' && value !== 'yes') next.allergyDetail = '';
      if (name === 'swim' && value !== 'notAll') next.nonSwimmers = '';
      return next;
    });
  };

  const peopleNum = parseInt(form.people, 10) || 0;
  const showExtraCostWarning = peopleNum > EXTRA_COST_THRESHOLD;
  const showAllergyDetail = form.allergies === 'yes';
  const showNonSwimmers = form.swim === 'notAll';
  const showCelebrationWarning = form.celebration === 'yes';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const summaryLines = [
      `${c.fields.name}: ${form.name}`,
      `${c.fields.email}: ${form.email}`,
      `${c.fields.phone}: ${form.phone || '—'}`,
      `${c.fields.service}: ${form.service}`,
      `${c.fields.people}: ${form.people}`,
      `${c.fields.allergies}: ${form.allergies === 'yes' ? c.yesNo.yes : c.yesNo.no}${form.allergies === 'yes' ? ` — ${form.allergyDetail}` : ''}`,
      `${c.fields.swim}: ${form.swim === 'notAll' ? c.swimOptions.notAll : c.swimOptions.all}${form.swim === 'notAll' ? ` — ${form.nonSwimmers}` : ''}`,
      `${c.fields.celebration}: ${form.celebration === 'yes' ? c.yesNo.yes : c.yesNo.no}`,
      '',
      `${c.fields.msg}:`,
      form.msg || '—',
    ];

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Nueva reserva — ${form.name || 'Sin nombre'} (${form.service || 'Sin servicio'})`,
      from_name: form.name,
      email: form.email,
      Telefono: form.phone,
      Servicio: form.service,
      Personas: form.people,
      Alergias: form.allergies === 'yes' ? `Sí — ${form.allergyDetail}` : 'No',
      'Todos saben nadar': form.swim === 'notAll' ? `No — ${form.nonSwimmers} no saben nadar` : 'Sí',
      'Celebración especial': form.celebration === 'yes' ? 'Sí' : 'No',
      message: summaryLines.join('\n'),
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Request failed');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus('idle');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-header reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="wave-div" style={{ margin: '1rem auto' }} />
          <p className="section-sub">{c.sub}</p>
        </div>
        <div className="contact-body">
          {/* Left: info + social links */}
          <div className="reveal">
            <div className="contact-info-title">{c.infoTitle}</div>
            {c.details.map((d, i) => (
              <div key={i} className="contact-detail">
                <div className="cd-icon-wrap">{d.icon}</div>
                <div>
                  <span className="cd-label">{d.l}</span>
                  <span className="cd-value">{d.v}</span>
                </div>
              </div>
            ))}
            {/* Social section */}
            <div className="qr-block">
              <span className="qr-block-title">{c.qrTitle}</span>
              <div className="qr-codes">
                {c.qrItems.map((q, i) => (
                  <a
                    key={i}
                    href={q.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qr-item"
                    aria-label={q.label}
                  >
                    <div className="qr-box">{SOCIAL_ICONS[q.label] || q.icon}</div>
                    <div className="qr-label">{q.label}</div>
                    <div className="qr-sublabel">{q.sub}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-card reveal reveal-delay-2">
            {status !== 'sent' ? (
              <>
                <div className="form-card-title">{c.formTitle}</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-field">
                      <label>{c.fields.name}</label>
                      <input name="name" type="text" placeholder={c.placeholders.name} value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                      <label>{c.fields.email}</label>
                      <input name="email" type="email" placeholder={c.placeholders.email} value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                      <label>{c.fields.phone}</label>
                      <input name="phone" type="tel" placeholder={c.placeholders.phone} value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-field">
                      <label>{c.fields.service}</label>
                      <select name="service" value={form.service} onChange={handleChange} required>
                        <option value="">—</option>
                        {c.services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Number of people */}
                    <div className="form-field">
                      <label>{c.fields.people}</label>
                      <input
                        name="people"
                        type="number"
                        min="1"
                        max={MAX_PEOPLE}
                        placeholder={`1-${MAX_PEOPLE}`}
                        value={form.people}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Allergies */}
                    <div className="form-field">
                      <label>{c.fields.allergies}</label>
                      <select name="allergies" value={form.allergies} onChange={handleChange} required>
                        <option value="">—</option>
                        <option value="no">{c.yesNo.no}</option>
                        <option value="yes">{c.yesNo.yes}</option>
                      </select>
                    </div>
                    {showAllergyDetail && (
                      <div className="form-field form-field--full">
                        <label>{c.fields.allergyDetail}</label>
                        <input
                          name="allergyDetail"
                          type="text"
                          placeholder={c.placeholders.allergyDetail}
                          value={form.allergyDetail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    )}

                    {showExtraCostWarning && (
                      <div className="form-field form-field--full">
                        <div className="form-warning">⚠️ {c.warnings.extraCost}</div>
                      </div>
                    )}

                    {/* Swimming */}
                    <div className="form-field">
                      <label>{c.fields.swim}</label>
                      <select name="swim" value={form.swim} onChange={handleChange} required>
                        <option value="">—</option>
                        <option value="all">{c.swimOptions.all}</option>
                        <option value="notAll">{c.swimOptions.notAll}</option>
                      </select>
                    </div>
                    {showNonSwimmers && (
                      <div className="form-field">
                        <label>{c.fields.nonSwimmers}</label>
                        <input
                          name="nonSwimmers"
                          type="number"
                          min="1"
                          max={MAX_PEOPLE}
                          value={form.nonSwimmers}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    )}
                    {showNonSwimmers && (
                      <div className="form-field form-field--full">
                        <div className="form-warning">⚠️ {c.warnings.swim}</div>
                      </div>
                    )}

                    {/* Celebration */}
                    <div className="form-field">
                      <label>{c.fields.celebration}</label>
                      <select name="celebration" value={form.celebration} onChange={handleChange} required>
                        <option value="">—</option>
                        <option value="no">{c.yesNo.no}</option>
                        <option value="yes">{c.yesNo.yes}</option>
                      </select>
                    </div>
                    {showCelebrationWarning && (
                      <div className="form-field form-field--full">
                        <div className="form-warning">🎉 {c.warnings.celebration}</div>
                      </div>
                    )}

                    <div className="form-field form-field--full">
                      <label>{c.fields.msg}</label>
                      <textarea name="msg" placeholder={c.placeholders.msg} value={form.msg} onChange={handleChange} />
                    </div>
                  </div>

                  {status === 'error' && <p className="form-error">{c.errorMsg}</p>}

                  <button type="submit" className="form-submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? c.sending : c.submit}
                  </button>
                  <p className="form-footnote">{c.footnote}</p>
                </form>
              </>
            ) : (
              <div className="form-success">
                <span className="form-success-icon">⛵</span>
                <h3>{c.successTitle}</h3>
                <p>{c.successMsg}</p>
                <button className="btn-primary" onClick={resetForm}>{c.successBtn}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}