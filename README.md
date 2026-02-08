# Staronly Website

Star-level digital solutions for cooperatives, SMEs, and public institutions.

## Setup Instructions

### 1. Install Dependencies
Run this command in the project directory:
```bash
npm install
```

### 2. Add Required Assets

Place the following images in the specified directories:

### 3. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
staronly/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PartnerLogos.tsx
│   ├── Products.tsx
│   ├── Services.tsx
│   ├── Help.tsx
│   └── FAQ.tsx
├── public/
│   └── assets/
│       └── partners/
└── Configuration files
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library
