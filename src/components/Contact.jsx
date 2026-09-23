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

const copy = {
  es: { label:'Contacto', title:'Reserva tu experiencia', sub:'Completa el formulario y te respondemos en menos de 24 horas.', infoTitle:'Información', details:[{icon:'📍',l:'Dirección',v:'Marina Playa del Carmen, Quintana Roo, México'},{icon:'📞',l:'Teléfono',v:'+52 984 233 0557'},{icon:'✉️',l:'Email',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Horario',v:'Lun–Dom: 7:00 AM – 8:00 PM'}], qrTitle:'Síguenos en redes', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcatamaran',url:'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4'},{icon:'📱',label:'TikTok',sub:'@inspiration.catam',url:'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS'},{icon:'💬',label:'WhatsApp',sub:'+52 984 233 0557',url:'https://wa.me/529842330557'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran',url:'https://www.facebook.com/InspirationCatamaran'}], formTitle:'Envíanos un mensaje', fields:{name:'Nombre',email:'Email',phone:'Teléfono',service:'Servicio',msg:'Mensaje'}, placeholders:{name:'Tu nombre',email:'tu@email.com',phone:'+52 984 ...',msg:'Cuéntanos sobre tu viaje ideal...'}, services:['Tour Compartido','Tour Privado','Pesca Deportiva','Evento / Boda','Otro'], submit:'Enviar Mensaje', footnote:'Sin compromiso. Te respondemos en menos de 24 horas.', successTitle:'¡Mensaje enviado!', successMsg:'Gracias, te contactaremos pronto para confirmar tu reserva.', successBtn:'Enviar otro mensaje' },
  en: { label:'Contact', title:'Book your experience', sub:'Fill out the form and we will reply within 24 hours.', infoTitle:'Information', details:[{icon:'📍',l:'Address',v:'Marina Playa del Carmen, Quintana Roo, Mexico'},{icon:'📞',l:'Phone',v:'+52 984 123 4567'},{icon:'✉️',l:'Email',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Hours',v:'Mon–Sun: 7:00 AM – 8:00 PM'}], qrTitle:'Follow us', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcatamaran',url:'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4'},{icon:'📱',label:'TikTok',sub:'@inspiration.catam',url:'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS'},{icon:'💬',label:'WhatsApp',sub:'+52 984 233 0557',url:'https://wa.me/529842330557'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran',url:'https://www.facebook.com/InspirationCatamaran'}], formTitle:'Send us a message', fields:{name:'Name',email:'Email',phone:'Phone',service:'Service',msg:'Message'}, placeholders:{name:'Your name',email:'you@email.com',phone:'+52 984 ...',msg:'Tell us about your ideal trip...'}, services:['Shared Tour','Private Tour','Sport Fishing','Event / Wedding','Other'], submit:'Send Message', footnote:'No commitment. We reply within 24 hours.', successTitle:'Message sent!', successMsg:'Thank you, we will contact you soon to confirm your booking.', successBtn:'Send another message' },
  fr: { label:'Contact', title:'Réservez votre expérience', sub:'Remplissez le formulaire et nous vous répondrons dans les 24 heures.', infoTitle:'Informations', details:[{icon:'📍',l:'Adresse',v:'Marina Playa del Carmen, Quintana Roo, Mexique'},{icon:'📞',l:'Téléphone',v:'+52 984 123 4567'},{icon:'✉️',l:'Email',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Horaires',v:'Lun–Dim : 7h00 – 20h00'}], qrTitle:'Suivez-nous', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcatamaran',url:'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4'},{icon:'📱',label:'TikTok',sub:'@inspiration.catam',url:'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS'},{icon:'💬',label:'WhatsApp',sub:'+52 984 233 0557',url:'https://wa.me/529842330557'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran',url:'https://www.facebook.com/InspirationCatamaran'}], formTitle:'Envoyez-nous un message', fields:{name:'Nom',email:'Email',phone:'Téléphone',service:'Service',msg:'Message'}, placeholders:{name:'Votre nom',email:'vous@email.com',phone:'+52 984 ...',msg:'Parlez-nous de votre voyage idéal...'}, services:['Tour Partagé','Tour Privé','Pêche Sportive','Événement / Mariage','Autre'], submit:'Envoyer le message', footnote:'Sans engagement. Nous répondons sous 24h.', successTitle:'Message envoyé !', successMsg:'Merci, nous vous contacterons bientôt pour confirmer votre réservation.', successBtn:'Envoyer un autre message' },
  de: { label:'Kontakt', title:'Buchen Sie Ihr Erlebnis', sub:'Füllen Sie das Formular aus und wir antworten innerhalb von 24 Stunden.', infoTitle:'Informationen', details:[{icon:'📍',l:'Adresse',v:'Marina Playa del Carmen, Quintana Roo, Mexiko'},{icon:'📞',l:'Telefon',v:'+52 984 123 4567'},{icon:'✉️',l:'E-Mail',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Öffnungszeiten',v:'Mo–So: 7:00 – 20:00 Uhr'}], qrTitle:'Folgen Sie uns', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcatamaran',url:'https://www.instagram.com/inspirationcatamaran?igsi=aHF4ZDhtOXR0NTg4'},{icon:'📱',label:'TikTok',sub:'@inspiration.catam',url:'https://www.tiktok.com/@inspiration.catam?_r=1&_t=ZS-99NgJgM8JwS'},{icon:'💬',label:'WhatsApp',sub:'+52 984 233 0557',url:'https://wa.me/529842330557'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran',url:'https://www.facebook.com/InspirationCatamaran'}], formTitle:'Senden Sie uns eine Nachricht', fields:{name:'Name',email:'E-Mail',phone:'Telefon',service:'Service',msg:'Nachricht'}, placeholders:{name:'Ihr Name',email:'Sie@email.com',phone:'+52 984 ...',msg:'Erzählen Sie uns von Ihrer idealen Reise...'}, services:['Gemeinschaftsreise','Privatreise','Sportfischen','Veranstaltung / Hochzeit','Andere'], submit:'Nachricht senden', footnote:'Unverbindlich. Wir antworten innerhalb von 24 Stunden.', successTitle:'Nachricht gesendet!', successMsg:'Danke, wir werden uns bald bei Ihnen melden.', successBtn:'Weitere Nachricht senden' },
};

export default function Contact() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', msg:'' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-header reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="wave-div" style={{margin:'1rem auto'}} />
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
            {!sent ? (
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
                        {c.services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-field form-field--full">
                      <label>{c.fields.msg}</label>
                      <textarea name="msg" placeholder={c.placeholders.msg} value={form.msg} onChange={handleChange} />
                    </div>
                  </div>
                  <button type="submit" className="form-submit-btn">✈ {c.submit}</button>
                  <p className="form-footnote">{c.footnote}</p>
                </form>
              </>
            ) : (
              <div className="form-success">
                <span className="form-success-icon">⛵</span>
                <h3>{c.successTitle}</h3>
                <p>{c.successMsg}</p>
                <button className="btn-primary" onClick={() => setSent(false)}>{c.successBtn}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}