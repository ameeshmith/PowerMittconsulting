# PowerMitt Consulting — Electrical Power Systems & Energy Engineering

[![React](https://img.shields.io/badge/React-19.0-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Private-teal.svg)](#)

A modern, high-performance web platform for **PowerMitt Consulting Pty Ltd**, an independent Australian engineering consultancy based in Perth, Western Australia. Founded by **Dinesh Mithanthaya** (*Principal Power Engineer* with 20+ years of specialist industry experience), PowerMitt delivers technical due diligence, grid integration, and heavy electrical infrastructure engineering across Australia and the Asia-Pacific region.

---

## ⚡ Core Engineering Capability Areas

- **Electrical Power Systems:** Power system studies (load flow, short circuit, protection coordination), HV/LV distribution design, substation engineering, and grid connection compliance (NEM/WEM).
- **Renewable Energy & Decarbonisation:** Battery Energy Storage Systems (BESS), solar PV, wind, hydrogen, and industrial electrification strategies within real power-system constraints.
- **Carbon Capture & Storage (CCS):** Electrical engineering support for mega-compressor motor drives, medium-voltage VSD topologies, and power infrastructure for CCUS terminals.
- **Industrial & Mining Infrastructure:** Underground mining power distribution, mineral processing electrical design, trailing cables, VSD drive systems, and brownfield modernisations.
- **Owner's Engineering:** Independent technical due diligence, design verification, vendor evaluation, and project execution advisory for asset owners.

---

## 🛠️ Technology Stack

- **Frontend Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Icons & Typography:** `lucide-react`, Poppins (`@fontsource/poppins` & Google Fonts)
- **Styling:** Custom Vanilla CSS Design System with dark industrial tokens, CSS Custom Properties, and keyframe reveal animations
- **Data & Content Management:** Local persistence service (`localStorage` API) combined with static dataset fallbacks and hooks for Sanity CMS integration
- **Contact Submissions:** [Web3Forms](https://web3forms.com/) API integration

---

## 📁 Repository Structure

```text
PowerMittconsulting/
├── public/                  # Static public assets, sitemap.xml, robots.txt, and 404 handler
│   └── assets/images/       # High-resolution background & banner images
├── src/
│   ├── components/          # Modular UI components (Hero, Navbar, Footer, ServiceCard, etc.)
│   ├── config/              # Form integrations and external credentials config
│   ├── data/                # Static starter datasets (articles, services, industries, projects)
│   ├── hooks/               # Custom React hooks (useScrollReveal, useScrollToTop)
│   ├── pages/               # Page views (Home, About, Services, Industries, Insights, Admin, Contact)
│   ├── services/            # Content management API & localStorage synchronization service
│   ├── styles/              # Design tokens (variables.css), global reset (global.css), keyframes
│   └── utils/               # Asset path resolution utilities
├── .env.example             # Environment variable configuration template
├── index.html               # Main HTML entry point & single-page app redirect handler
├── package.json             # Project dependencies and npm scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.js           # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system:
```bash
node -v
npm -v
```

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ameeshmith/PowerMittconsulting.git
   cd PowerMittconsulting
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the `.env.example` file to create a local `.env` file:
   ```bash
   cp .env.example .env
   ```

   Update your `.env` file with your credentials:
   ```ini
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   VITE_ADMIN_PASSCODE=your_admin_passcode
   VITE_SITE_URL=https://ameeshmith.github.io/PowerMittconsulting
   ```

---

## 💻 Local Development & Building

- **Run Development Server:**
  ```bash
  npm run dev
  ```
  Open `http://localhost:5173` in your browser to view the application with hot module replacement (HMR).

- **Type Check & Production Build:**
  ```bash
  npm run build
  ```
  Generates optimized production assets in the `dist/` directory.

- **Preview Production Build Locally:**
  ```bash
  npm run preview
  ```

- **Deploy to GitHub Pages:**
  ```bash
  npm run deploy
  ```

---

## 🔐 Author Portal & Article Management

The platform includes a dedicated **Author Portal** accessible at `/admin`:
- Protected by passcode authentication configured via `VITE_ADMIN_PASSCODE`.
- Allows drafting, publishing, editing, and deleting technical articles and engineering whitepapers.
- Automatically persists published articles to the user's local storage and merges them with the starter articles catalog.

---

## 📄 License & Ownership

© 2026 **PowerMitt Consulting Pty Ltd**. All rights reserved.  
Headquartered in Perth, Western Australia.
