import React, { useState, useContext } from 'react';
import { LangContext } from './Layout';
import './Contact.css';

const copy = {
  es: { label:'Contacto', title:'Reserva tu experiencia', sub:'Completa el formulario y te respondemos en menos de 24 horas.', infoTitle:'Información', details:[{icon:'📍',l:'Dirección',v:'Marina Playa del Carmen, Quintana Roo, México'},{icon:'📞',l:'Teléfono',v:'+52 984 123 4567'},{icon:'✉️',l:'Email',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Horario',v:'Lun–Dom: 7:00 AM – 8:00 PM'}], qrTitle:'Síguenos en redes', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcat'},{icon:'📱',label:'TikTok',sub:'@inspirationcat'},{icon:'💬',label:'WhatsApp',sub:'+52 984 123 4567'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran'}], formTitle:'Envíanos un mensaje', fields:{name:'Nombre',email:'Email',phone:'Teléfono',service:'Servicio',msg:'Mensaje'}, placeholders:{name:'Tu nombre',email:'tu@email.com',phone:'+52 984 ...',msg:'Cuéntanos sobre tu viaje ideal...'}, services:['Tour Compartido','Tour Privado','Pesca Deportiva','Evento / Boda','Otro'], submit:'Enviar Mensaje', footnote:'Sin compromiso. Te respondemos en menos de 24 horas.', successTitle:'¡Mensaje enviado!', successMsg:'Gracias, te contactaremos pronto para confirmar tu reserva.', successBtn:'Enviar otro mensaje' },
  en: { label:'Contact', title:'Book your experience', sub:'Fill out the form and we will reply within 24 hours.', infoTitle:'Information', details:[{icon:'📍',l:'Address',v:'Marina Playa del Carmen, Quintana Roo, Mexico'},{icon:'📞',l:'Phone',v:'+52 984 123 4567'},{icon:'✉️',l:'Email',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Hours',v:'Mon–Sun: 7:00 AM – 8:00 PM'}], qrTitle:'Follow us', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcat'},{icon:'📱',label:'TikTok',sub:'@inspirationcat'},{icon:'💬',label:'WhatsApp',sub:'+52 984 123 4567'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran'}], formTitle:'Send us a message', fields:{name:'Name',email:'Email',phone:'Phone',service:'Service',msg:'Message'}, placeholders:{name:'Your name',email:'you@email.com',phone:'+52 984 ...',msg:'Tell us about your ideal trip...'}, services:['Shared Tour','Private Tour','Sport Fishing','Event / Wedding','Other'], submit:'Send Message', footnote:'No commitment. We reply within 24 hours.', successTitle:'Message sent!', successMsg:'Thank you, we will contact you soon to confirm your booking.', successBtn:'Send another message' },
  fr: { label:'Contact', title:'Réservez votre expérience', sub:'Remplissez le formulaire et nous vous répondrons dans les 24 heures.', infoTitle:'Informations', details:[{icon:'📍',l:'Adresse',v:'Marina Playa del Carmen, Quintana Roo, Mexique'},{icon:'📞',l:'Téléphone',v:'+52 984 123 4567'},{icon:'✉️',l:'Email',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Horaires',v:'Lun–Dim : 7h00 – 20h00'}], qrTitle:'Suivez-nous', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcat'},{icon:'📱',label:'TikTok',sub:'@inspirationcat'},{icon:'💬',label:'WhatsApp',sub:'+52 984 123 4567'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran'}], formTitle:'Envoyez-nous un message', fields:{name:'Nom',email:'Email',phone:'Téléphone',service:'Service',msg:'Message'}, placeholders:{name:'Votre nom',email:'vous@email.com',phone:'+52 984 ...',msg:'Parlez-nous de votre voyage idéal...'}, services:['Tour Partagé','Tour Privé','Pêche Sportive','Événement / Mariage','Autre'], submit:'Envoyer le message', footnote:'Sans engagement. Nous répondons sous 24h.', successTitle:'Message envoyé !', successMsg:'Merci, nous vous contacterons bientôt pour confirmer votre réservation.', successBtn:'Envoyer un autre message' },
  de: { label:'Kontakt', title:'Buchen Sie Ihr Erlebnis', sub:'Füllen Sie das Formular aus und wir antworten innerhalb von 24 Stunden.', infoTitle:'Informationen', details:[{icon:'📍',l:'Adresse',v:'Marina Playa del Carmen, Quintana Roo, Mexiko'},{icon:'📞',l:'Telefon',v:'+52 984 123 4567'},{icon:'✉️',l:'E-Mail',v:'reservas@inspirationcat.mx'},{icon:'🕐',l:'Öffnungszeiten',v:'Mo–So: 7:00 – 20:00 Uhr'}], qrTitle:'Folgen Sie uns', qrItems:[{icon:'📷',label:'Instagram',sub:'@inspirationcat'},{icon:'📱',label:'TikTok',sub:'@inspirationcat'},{icon:'💬',label:'WhatsApp',sub:'+52 984 123 4567'},{icon:'📘',label:'Facebook',sub:'Inspiration Catamaran'}], formTitle:'Senden Sie uns eine Nachricht', fields:{name:'Name',email:'E-Mail',phone:'Telefon',service:'Service',msg:'Nachricht'}, placeholders:{name:'Ihr Name',email:'Sie@email.com',phone:'+52 984 ...',msg:'Erzählen Sie uns von Ihrer idealen Reise...'}, services:['Gemeinschaftsreise','Privatreise','Sportfischen','Veranstaltung / Hochzeit','Andere'], submit:'Nachricht senden', footnote:'Unverbindlich. Wir antworten innerhalb von 24 Stunden.', successTitle:'Nachricht gesendet!', successMsg:'Danke, wir werden uns bald bei Ihnen melden.', successBtn:'Weitere Nachricht senden' },
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
          {/* Left: info + QR */}
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
            {/* QR Section */}
            <div className="qr-block">
              <span className="qr-block-title">{c.qrTitle}</span>
              <div className="qr-codes">
                {c.qrItems.map((q, i) => (
                  <div key={i} className="qr-item">
                    <div className="qr-box">{q.icon}</div>
                    <div className="qr-label">{q.label}</div>
                    <div className="qr-sublabel">{q.sub}</div>
                  </div>
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
