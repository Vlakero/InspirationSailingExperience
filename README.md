# ⛵ Inspiration Catamaran — Website

Landing page for **Inspiration**, a 40ft Fountain Pajot catamaran in Playa del Carmen.

---

## 🚀 How to run in VS Code (including fixing "npm is not recognized")

### Step 1 — Install Node.js (fixes "npm is not recognized")

If you open the terminal in VS Code and see:
```
'npm' is not recognized as an internal or external command
```
It means Node.js is not installed. Here is how to fix it:

1. Go to **https://nodejs.org**
2. Download the **LTS** version (the green button on the left)
3. Run the installer — click Next → Next → Finish
4. **Important:** When the installer shows "Add to PATH", make sure it is checked ✅
5. After install, **close VS Code completely** and reopen it
6. Open a new terminal and type `node -v` — it should show a version number

---

### Step 2 — Open the project in VS Code

1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `inspiration-catamaran` folder
4. Open the integrated terminal: **View → Terminal** (or press `Ctrl + backtick`)

---

### Step 3 — Install dependencies

In the terminal type:
```bash
npm install
```
This downloads React, Vite, and all dependencies into a `node_modules` folder.
It only needs to be done **once**.

---

### Step 4 — Start the development server

```bash
npm run dev
```

You will see something like:
```
  VITE v5.x  ready in 300ms
  ➜  Local:   http://localhost:5173/
```

Open your browser and go to **http://localhost:5173** — the site is live with hot reload.

---

### Step 5 — Build for production

When you are ready to deploy:
```bash
npm run build
```
This creates an optimized `dist/` folder ready for any web host (Vercel, Netlify, etc.).

---

## 📁 Project Structure

```
inspiration-catamaran/
├── index.html                 ← HTML entry point
├── package.json               ← Dependencies & scripts
├── vite.config.js             ← Vite configuration
└── src/
    ├── main.jsx               ← React entry point
    ├── App.jsx                ← Root — assembles all sections
    ├── styles.css             ← Global CSS variables & utilities
    └── components/
        ├── Layout.jsx/.css    ← Navbar (with language dropdown) + Footer
        ├── Hero.jsx/.css      ← Full-width hero section
        ├── Services.jsx/.css  ← 4-column services grid
        ├── About.jsx/.css     ← Catamaran info + specs
        ├── Experiences.jsx/.css ← 2×2 gallery cards
        ├── Pricing.jsx/.css   ← 3-column pricing cards
        ├── Calendar.jsx/.css  ← Booking calendar (TimeTree sync)
        └── Contact.jsx/.css   ← Form + contact info + QR codes
```

---

## 🌐 Language system

The language dropdown (ES / EN / FR / DE) is built into `Layout.jsx`.
It uses React Context (`LangContext`) so every section reads the selected language.

**To add a new language:**
1. Add an entry to the `LANGS` array in `Layout.jsx`
2. Add a matching entry to `NAV_COPY` in `Layout.jsx`
3. Add a matching entry to the `copy` object inside each section component

---

## 🎨 Design Tokens

All colors are in `src/styles.css` under `:root {}`:

| Variable         | Value      | Used for                     |
|------------------|------------|------------------------------|
| `--teal`         | `#2a9fd8`  | Buttons, links, accents      |
| `--teal-dark`    | `#1a7aaa`  | Hover states                 |
| `--teal-light`   | `#e8f6fd`  | Icon backgrounds, highlights |
| `--navy`         | `#1a3a5c`  | Headings, navbar, footer     |
| `--gold`         | `#e8c84a`  | Dividers, badges, pricing    |
| `--off-white`    | `#f8fafc`  | Alternate section background |

---

## 🔌 API Integration Points

| File            | Where to add your API          |
|-----------------|-------------------------------|
| `Contact.jsx`   | `handleSubmit()` function      |
| `Calendar.jsx`  | Replace `BOOKINGS` object with `fetch('/api/availability')` |
| `Pricing.jsx`   | Replace hardcoded prices with `fetch('/api/pricing')`       |

---

## 📅 TimeTree Calendar Sync

The calendar in `Calendar.jsx` currently uses mock booking data.
To connect it to TimeTree:

1. Create a **public calendar** on https://timetreeapp.com
2. Go to calendar Settings → Share → Get public URL
3. Replace the `BOOKINGS` mock object in `Calendar.jsx` with a `fetch()` call to the TimeTree API
4. TimeTree API docs: https://developers.timetreeapp.com
