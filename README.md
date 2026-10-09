# PowerMitt Consulting — Electrical Power Systems & Energy Engineering

[![Status](https://img.shields.io/badge/Status-Production%20Corporate%20Platform-0066FF.svg)](#)
[![License](https://img.shields.io/badge/License-Proprietary%20%26%20Confidential-red.svg)](#)
[![React](https://img.shields.io/badge/React-19.0-61DAFB.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?logo=vite)](https://vitejs.dev/)

> **⚠️ OFFICIAL NOTICE — COMMERCIAL CORPORATE REPOSITORY**  
> This repository contains the official production digital platform for **PowerMitt Consulting Pty Ltd** (Perth, Western Australia).  
> **This is NOT a personal, student, or open-source sandbox project.**  
> 
> **Strict Policy on Testing & Form Submissions:**  
> - **DO NOT submit test, spam, or automated bot enquiries** via the website contact form or API endpoints. Forms route directly to active principal engineering inboxes and client advisory dispatch.
> - **DO NOT conduct unauthorized penetration testing, vulnerability scanning, or automated fuzzing** against this production repository or its hosted domains.
> - All intellectual property, engineering capability statements, project case studies, and brand identity are strictly proprietary.

---

## ⚡ Corporate Overview

**PowerMitt Consulting Pty Ltd** is an independent Australian specialist electrical engineering consultancy based in Perth, Western Australia. Led by **Dinesh Mithanthaya** (*Principal Power Engineer* with 20+ years of tier-one experience across Australia and internationally), PowerMitt delivers high-rigour power systems design, grid connection compliance, and technical due diligence across Australia’s critical resources and energy sectors.

### Primary Engineering Capabilities:
- **Electrical Power Systems:** Power system studies (load flow, fault analysis, dynamic stability, protection coordination), HV/LV distribution, substation engineering, and grid compliance (NEM/WEM).
- **Renewable Energy & Decarbonisation:** Utility-scale Battery Energy Storage Systems (BESS), solar PV, wind, hydrogen, and industrial process electrification.
- **Offshore Oil & Gas:** Electrical engineering for offshore platforms, Normally Unattended Facilities (NUF), gas compression drives, and brownfield life extension.
- **Mining & Resources:** Surface and underground mine power networks, mineral processing, electric heavy fleet charging, and remote microgrids.
- **Energy & Utilities:** Transmission, distribution, substation design, network connections, and utility asset management.
- **Heavy Industrial & Manufacturing:** Power quality, harmonic mitigation, variable speed drives (VSDs), and plant electrification.
- **Owner's Engineering:** Independent technical advisory, design verification, FAT/SAT oversight, and lender's due diligence.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) (Production Build)
- **Tooling & Bundler:** [Vite 5.4](https://vitejs.dev/) with code splitting and modern ES module optimization
- **Routing:** [React Router v7](https://reactrouter.com/) with GitHub Pages SPA redirect router
- **Design System:** Custom Vanilla CSS Design System with dark and light consulting modes, CSS Custom Properties, and micro-interactions
- **Typography:** Plus Jakarta Sans & Be Vietnam Pro (`@fontsource/*`)
- **Icons:** `lucide-react`
- **Content Management:** Remote Headless CMS ([Sanity.io](https://www.sanity.io/)) with local storage caching and starter datasets
- **Form Dispatch:** [Web3Forms](https://web3forms.com/) with client-side and server-side anti-spam honeypot integration

---

## 📁 Repository Structure

```text
PowerMittconsulting/
├── public/                  # Public production assets, favicon, robots.txt, sitemap.xml, 404 handler
│   └── assets/images/       # Corporate brand logo, sector imagery, and hero photography
├── src/
│   ├── components/          # Reusable enterprise UI components (Navbar, Footer, Hero, Cards, etc.)
│   ├── config/              # Centralized environment integrations (forms, API configuration)
│   ├── data/                # Corporate datasets (articles, services, industries, projects, navigation)
│   ├── hooks/               # Custom lifecycle hooks (useScrollReveal, useScrollToTop)
│   ├── pages/               # Enterprise routes:
│   │   ├── Home/            # Hero overview, core sectors, engineering rigour, and recent projects
│   │   ├── About/           # Corporate leadership, credentials, and guiding principles
│   │   ├── Services/        # Service hub & 5 dedicated engineering practice areas
│   │   ├── Industries/      # Industry hub & 4 specialized sector landing pages
│   │   ├── Projects/        # Engineering project case study portfolio
│   │   ├── Insights/        # Technical papers, whitepapers, and industry insights
│   │   ├── Admin/           # Authorized internal Author Portal (protected by access passkey)
│   │   └── Contact/         # Commercial enquiry dispatch with spam honeypot
│   ├── services/            # CMS client (Sanity) and local storage synchronization
│   ├── styles/              # Design tokens (variables.css), global reset, animations
│   └── utils/               # Asset path resolvers, markdown parser, date formatter
├── .env.example             # Configuration reference for authorized deployment environments
├── index.html               # Production HTML template with SPA redirect resolution
├── package.json             # Pinned enterprise dependencies
└── vite.config.js           # Production build and base path configuration
```

---

## 🔐 Internal Development & Deployment

> **Note:** Access and deployment are restricted to authorized PowerMitt Consulting team members and designated technical contractors.

### Local Setup (Authorized Team Members Only)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ameeshmith/PowerMittconsulting.git
   cd PowerMittconsulting
   ```

2. **Install Pinned Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   ```
   Configure required credentials (`VITE_WEB3FORMS_ACCESS_KEY`, `VITE_ADMIN_PASSCODE`, and optional Sanity CMS keys).

4. **Run Local Dev Server:**
   ```bash
   npm run dev
   ```

5. **Production Build & Verification:**
   ```bash
   npm run build
   ```

---

## 🛡️ Security & Responsible Disclosure

If you have identified a legitimate technical security vulnerability, please contact our engineering team directly and privately at:  
📧 **dmithanthaya@gmail.com** or **mithameesh@gmail.com**

Please do **NOT** open public GitHub issues for security vulnerabilities or perform disruptive testing against live production endpoints.

---

## 📄 Proprietary Notice & Copyright

© 2026 **PowerMitt Consulting Pty Ltd** (ABN registered). All rights reserved.  
Headquartered in Perth, Western Australia.

**All rights reserved.** No part of this codebase, design architecture, engineering literature, or branding may be reproduced, reverse-engineered, or distributed without explicit written permission from PowerMitt Consulting Pty Ltd.
