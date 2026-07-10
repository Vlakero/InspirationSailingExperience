import React, { useState, useContext } from 'react';
import { LangContext } from './Layout';
import './Calendar.css';

const copy = {
  es: { label:'Disponibilidad', title:'Calendario de reservas', sub:'Consulta la disponibilidad en tiempo real y sincroniza con TimeTree para mantenerte al día.', days:['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'], months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'], avail:'Disponible', booked:'Reservado', partial:'Parcial', today:'Hoy', sync:'Sincronizado con TimeTree', syncBtn:'Abrir en TimeTree', note:'Los horarios son referenciales. Contáctanos para confirmar disponibilidad.' },
  en: { label:'Availability', title:'Booking Calendar', sub:'Check real-time availability and sync with TimeTree to stay up to date.', days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], months:['January','February','March','April','May','June','July','August','September','October','November','December'], avail:'Available', booked:'Booked', partial:'Partial', today:'Today', sync:'Synced with TimeTree', syncBtn:'Open in TimeTree', note:'Times are indicative. Contact us to confirm availability.' },
  fr: { label:'Disponibilité', title:'Calendrier des réservations', sub:'Consultez la disponibilité en temps réel et synchronisez avec TimeTree.', days:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'], months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'], avail:'Disponible', booked:'Réservé', partial:'Partiel', today:"Aujourd'hui", sync:'Synchronisé avec TimeTree', syncBtn:'Ouvrir dans TimeTree', note:'Les horaires sont indicatifs. Contactez-nous pour confirmer.' },
  de: { label:'Verfügbarkeit', title:'Buchungskalender', sub:'Prüfen Sie die Echtzeitverfügbarkeit und synchronisieren Sie mit TimeTree.', days:['So','Mo','Di','Mi','Do','Fr','Sa'], months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'], avail:'Verfügbar', booked:'Gebucht', partial:'Teilweise', today:'Heute', sync:'Mit TimeTree synchronisiert', syncBtn:'In TimeTree öffnen', note:'Zeiten sind Richtwerte. Kontaktieren Sie uns zur Bestätigung.' },
};

// Mock booking data
const BOOKINGS = {
  '2026-05-05': 'booked',  '2026-05-06': 'booked',
  '2026-05-10': 'partial', '2026-05-13': 'booked',
  '2026-05-14': 'booked',  '2026-05-17': 'partial',
  '2026-05-20': 'booked',  '2026-05-21': 'booked',
  '2026-05-24': 'partial', '2026-05-28': 'booked',
};

function pad(n) { return String(n).padStart(2, '0'); }
function key(y, m, d) { return `${y}-${pad(m+1)}-${pad(d)}`; }

export default function Calendar() {
  const { lang } = useContext(LangContext);
  const c = copy[lang] || copy.es;
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, type: 'other' });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const k = key(year, month, d);
    const status = BOOKINGS[k] || 'avail';
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    cells.push({ day: d, type: 'current', status, isToday, k });
  }
  while (cells.length % 7 !== 0) cells.push({ day: cells.length - firstDay - daysInMonth + 1, type: 'other' });

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const eventLabel = (status) => {
    if (status === 'booked') return c.booked;
    if (status === 'partial') return c.partial;
    return '';
  };

  return (
    <section id="calendar" className="calendar-section">
      <div className="calendar-inner">
        <div className="calendar-header reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="wave-div" style={{margin:'1rem auto'}} />
          <p className="section-sub">{c.sub}</p>
        </div>
        <div className="cal-wrap reveal reveal-delay-1">
          <div className="cal-top">
            <div className="cal-nav">
              <button className="cal-nav-btn" onClick={prevMonth}>‹</button>
              <span className="cal-month">{c.months[month]} {year}</span>
              <button className="cal-nav-btn" onClick={nextMonth}>›</button>
            </div>
            <div className="cal-legend">
              <div className="cal-legend-item"><div className="cal-dot cal-dot--today" />{c.today}</div>
              <div className="cal-legend-item"><div className="cal-dot cal-dot--avail" />{c.avail}</div>
              <div className="cal-legend-item"><div className="cal-dot cal-dot--partial" />{c.partial}</div>
              <div className="cal-legend-item"><div className="cal-dot cal-dot--booked" />{c.booked}</div>
            </div>
          </div>
          <div className="cal-grid">
            {c.days.map(d => <div key={d} className="cal-day-label">{d}</div>)}
            {cells.map((cell, i) => (
              <div key={i} className={[
                'cal-cell',
                cell.type === 'other' ? 'cal-cell--other' : '',
                cell.isToday ? 'cal-cell--today' : '',
                cell.status === 'booked' ? 'cal-cell--booked' : '',
                cell.status === 'partial' ? 'cal-cell--partial' : '',
              ].join(' ')}>
                <div className="cal-date">{cell.day}</div>
                {cell.status && cell.status !== 'avail' && (
                  <div className={`cal-event cal-event--${cell.status}`}>{eventLabel(cell.status)}</div>
                )}
                {cell.status === 'avail' && cell.type === 'current' && (
                  <div className="cal-event cal-event--avail">{c.avail}</div>
                )}
              </div>
            ))}
          </div>
          <div className="cal-sync-bar">
            <div className="cal-sync-info">
              <div className="cal-sync-icon">📅</div>
              <span>{c.sync}</span>
            </div>
            <a href="https://timetreeapp.com" target="_blank" rel="noopener noreferrer" className="cal-sync-link">
              📅 {c.syncBtn} ↗
            </a>
          </div>
        </div>
        <p style={{textAlign:'center', marginTop:'1rem', fontSize:'0.75rem', color:'var(--text-light)', fontStyle:'italic'}}>{c.note}</p>
      </div>
    </section>
  );
}
