# MEDULON PHARMA PRIVATE LIMITED

Official website for MEDULON PHARMA PRIVATE LIMITED — a Bangalore-based pharmaceutical company with a clinic and store in Madhupur, Nagaon, Assam.

**Live Site:** [https://medulonpharma.in](https://medulonpharma.in)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (New York style) |
| Animation | Framer Motion |
| Icons | Lucide React + React Icons |
| Forms | EmailJS Browser |
| Notifications | React Hot Toast |
| Package Manager | Bun |
| Deployment | GitHub Pages (GitHub Actions) |

---

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives (Button, Card, Input, Textarea)
│   ├── AboutSection.tsx # Bangalore HQ + Assam Store story
│   ├── ClinicInfo.tsx   # 13 doctors profile + schedule
│   ├── Contact.tsx      # Contact form (EmailJS) + map + info
│   ├── ContactCTA.tsx   # Floating WhatsApp + Phone buttons
│   ├── Footer.tsx       # Site footer with links
│   ├── Hero.tsx         # Landing hero with CTAs
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── Reveal.tsx       # Scroll animation wrapper
│   └── StorePreview.tsx # Product catalog with filters
├── config/
│   └── config.ts        # Centralized config (phone, email, addresses, EmailJS)
├── lib/
│   └── utils.ts         # cn() helper for Tailwind class merging
├── pages/
│   └── Home.tsx         # Page composition
├── App.tsx
├── main.tsx
└── index.css            # Tailwind v4 entry point

public/
├── products/            # MEDULON product images
├── hero/                # Hero background images
└── favicon assets
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun install` | Install dependencies |
| `bun run dev` | Start development server (`http://localhost:5173`) |
| `bun run build` | Type-check and build for production (`dist/`) |
| `bun run preview` | Preview production build locally |
| `bun run lint` | Run ESLint |

---

## Configuration

All business details are centralized in `src/config/config.ts`:

- Phone numbers (`orgPhoneNumber`, `orgAltPhoneNumber`)
- WhatsApp number (`phoneWhatsAppCTA`)
- Email address (`orgEmail`)
- Assam store address (`orgAddresss`)
- Bangalore marketing HQ address (`marketingAddress`)
- Social media URLs

### EmailJS Setup

Contact form uses EmailJS. Set these in `.env`:

```
VITE_EMAIL_JS_SERVICE_ID=your_service_id
VITE_EMAIL_JS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_PUBLIC_KEY=your_public_key
```

---

## Deployment

This project deploys automatically to **GitHub Pages** via GitHub Actions.

### GitHub Actions Workflow

File: `.github/workflows/deploy.yml`

**Triggers:**
- Push to `main` branch
- Manual dispatch (`workflow_dispatch`)

**Steps:**
1. Checkout code
2. Setup Bun runtime
3. Install dependencies (`bun install`)
4. Build (`bun run build`)
5. Upload `dist/` artifact to GitHub Pages
6. Deploy

### Custom Domain

The site is configured for `medulonpharma.in`. To activate:

1. Go to **GitHub Repo → Settings → Pages → Custom domain**
2. Enter: `medulonpharma.in`
3. GitHub will create a `CNAME` file automatically
4. Update your DNS: add a **CNAME record** pointing `medulonpharma.in` → `yourusername.github.io`

---

## Key Features

- **Mobile-first responsive design** — Tailwind v4 with `sm:`, `md:`, `lg:` breakpoints
- **13 Doctor profiles** — Real qualifications, registration numbers, and specialties
- **9 MEDULON products** — Real product images with working category filters (React state)
- **WhatsApp ordering** — One-click product order via WhatsApp API with pre-filled messages
- **Prescription upload** — Rx-marked products require prescription verification via WhatsApp
- **Dual-location branding** — Prominently features Bangalore HQ + Assam store to build trust
- **EmailJS contact form** — Appointment and inquiry submissions
- **SEO-ready** — JSON-LD schema with all 13 doctors, Open Graph, Twitter Cards, rich keywords
- **Scroll animations** — Framer Motion `Reveal` component throughout all sections
- **Fixed floating CTAs** — WhatsApp and Phone buttons always accessible

---

## License

Private — MEDULON PHARMA PRIVATE LIMITED. All rights reserved.
