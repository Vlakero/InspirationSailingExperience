import React, { useState, useEffect, useRef } from 'react';
import './Layout.css';

/* ── Available languages ───────────────────────── */
const LANGS = [
  { code: 'es', label: 'Español',  flag: '🇲🇽' },
  { code: 'en', label: 'English',  flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
];

/* ── Per-language navbar copy ──────────────────── */
const NAV_COPY = {
  es: { links:['Inicio','Experiencias','Precios','Contacto'], book:'Reservar',
        tagline:'Catamarán de 40 pies · Playa del Carmen, Quintana Roo, México',
        copy:'© 2026 Inspiration. Todos los derechos reservados.' },
  en: { links:['Home','Experiences','Pricing','Contact'],      book:'Reserve',
        tagline:'40ft Catamaran · Playa del Carmen, Quintana Roo, Mexico',
        copy:'© 2026 Inspiration. All rights reserved.' },
  fr: { links:['Accueil','Expériences','Tarifs','Contact'],    book:'Réserver',
        tagline:'Catamaran 40 pieds · Playa del Carmen, Quintana Roo, Mexique',
        copy:'© 2026 Inspiration. Tous droits réservés.' },
  de: { links:['Start','Erlebnisse','Preise','Kontakt'],     book:'Buchen',
        tagline:'40 Fuß Katamaran · Playa del Carmen, Quintana Roo, Mexiko',
        copy:'© 2026 Inspiration. Alle Rechte vorbehalten.' },
};

const HREFS = ['#hero','#experiences','#pricing','#contact'];

/* ── Shared language context ───────────────────── */
export const LangContext = React.createContext({ lang: 'es', setLang: () => {} });

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang,     setLang]     = useState('es');
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  /* close dropdown on outside click */
  useEffect(() => {
    const close = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  /* sticky nav shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t   = NAV_COPY[lang];
  const cur = LANGS.find(l => l.code === lang);

  const chooseLang = (code) => { setLang(code); setDropOpen(false); };

  return (
    <LangContext.Provider value={{ lang, setLang }}>

      {/* ── Navbar ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* Brand */}
          <a href="#hero" className="navbar-brand">
            <span className="brand-anchor">⚓</span>
            <span className="brand-name">Inspiration</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {t.links.map((label, i) => (
              <li key={i}>
                <a href={HREFS[i]}>{label}</a>
              </li>
            ))}

            {/* ── Language dropdown ── */}
            <li>
              <div
                className={`lang-dropdown ${dropOpen ? 'open' : ''}`}
                ref={dropRef}
              >
                {/* Trigger button */}
                <button
                  className="lang-selected"
                  onClick={() => setDropOpen(o => !o)}
                  aria-haspopup="listbox"
                  aria-expanded={dropOpen}
                >
                  <span className="lang-flag">{cur.flag}</span>
                  <span>{cur.code.toUpperCase()}</span>
                  <span className="lang-caret">▼</span>
                </button>

                {/* Dropdown list */}
                <ul className="lang-menu" role="listbox">
                  {LANGS.map(l => (
                    <li
                      key={l.code}
                      className={`lang-option ${lang === l.code ? 'active' : ''}`}
                      role="option"
                      aria-selected={lang === l.code}
                      onClick={() => chooseLang(l.code)}
                    >
                      <span className="lang-flag">{l.flag}</span>
                      {l.label}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <a href="#contact" className="nav-cta">{t.book}</a>
            </li>
          </ul>

          {/* Hamburger (mobile) */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {t.links.map((label, i) => (
            <a key={i} href={HREFS[i]} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}

          {/* Mobile lang buttons */}
          <div className="mobile-lang-row">
            {LANGS.map(l => (
              <button
                key={l.code}
                className={`mobile-lang-btn ${lang === l.code ? 'active' : ''}`}
                onClick={() => { chooseLang(l.code); setMenuOpen(false); }}
              >
                {l.flag} {l.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      {/* ── Footer ── */} 
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <span className="footer-anchor">⚓</span>
              <span className="footer-brand-name">Inspiration</span>
            </div>
            <p className="footer-tagline">{t.tagline}</p>
          </div>
          <p className="footer-copy">{t.copy}</p>
        </div>
      </footer>

    </LangContext.Provider>
  );
}
