# James McNeely Portfolio Website

A modern, professional portfolio website for James McNeely, showcasing 20+ years of IT Service Management experience and a transition into Cybersecurity.

## 🚀 Live Demo

Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/james-mcneely-portfolio)

## ✨ Features

- **Modern Design**: Dark theme with smooth animations and professional aesthetics
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Built with Next.js 14+ for optimal performance
- **SEO Ready**: Comprehensive meta tags and Open Graph configuration
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **ATS-Optimized Resumes**: Two downloadable PDF versions tailored for different roles

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Plus Jakarta Sans, DM Sans)
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/james-mcneely-portfolio.git
cd james-mcneely-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add assets to the `public/` directory:
   - `james-mcneely-photo.png` - Professional photo
   - `googleitsupportprofessionalcertificatev2.png` - Google IT Support Certificate
   - `googlecybersecurityprofessionalcertificatev2.png` - Google Cybersecurity Certificate
   - `James_McNeely_IT_Service_Manger_Resume_ATS_Optimized.pdf` - IT Service Manager Resume
   - `James_McNeely_Cybersecurity_Resume_ATS.pdf` - Cybersecurity Resume

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Required Assets

Place the following files in the `public/` directory:

### Images
- `james-mcneely-photo.png` - Professional headshot/work photo
- `googleitsupportprofessionalcertificatev2.png` - Google IT Support Professional Certificate
- `googlecybersecurityprofessionalcertificatev2.png` - Google Cybersecurity Professional Certificate

### Documents
- `James_McNeely_IT_Service_Manger_Resume_ATS_Optimized.pdf` - Resume for IT Service Manager positions
- `James_McNeely_Cybersecurity_Resume_ATS.pdf` - Resume for Cybersecurity Analyst positions

**Note**: The website will display placeholder graphics if these assets are not present. Add them before deploying to production.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import your repository in Vercel:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure settings

3. Deploy!

Alternatively, use the Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

## 📄 Project Structure

```
james-mcneely-portfolio/
├── public/                     # Static assets (PDFs, images, certificates)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main page integrating all components
│   │   └── globals.css        # Global styles and Tailwind directives
│   └── components/
│       ├── Navbar.tsx         # Navigation with mobile menu
│       ├── Hero.tsx           # Hero section with stats
│       ├── About.tsx          # Professional narrative
│       ├── Capabilities.tsx   # Core capabilities grid
│       ├── Experience.tsx     # Timeline of experience
│       ├── Certifications.tsx # Certifications showcase
│       ├── Skills.tsx         # Technical skills with progress bars
│       ├── ResumeDownload.tsx # Resume download section
│       ├── Contact.tsx        # Contact form and info
│       └── Footer.tsx         # Footer with links
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. Main colors:
- **Primary**: Electric blue (`#0ea5e9`)
- **Accent**: Emerald green (`#10b981`)
- **Background**: Deep navy/slate

### Content

Update content in component files:
- Personal info: `src/components/Hero.tsx`, `src/components/Contact.tsx`
- Professional summary: `src/components/About.tsx`
- Work history: `src/components/Experience.tsx`
- Skills: `src/components/Skills.tsx`

### Metadata & SEO

Update SEO metadata in `src/app/layout.tsx`:
- Title, description, keywords
- Open Graph tags for social sharing
- Author information

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 🔍 SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Proper heading hierarchy
- Alt text for images (when assets are added)
- Mobile-friendly viewport configuration

## 🐛 Known Issues

- Contact form is frontend-only (demo). Integrate with a backend service like Formspree, EmailJS, or custom API for production.
- Social media links (LinkedIn, GitHub) are placeholders. Update with actual profile URLs in `src/components/Contact.tsx`.
- Asset images show placeholders until actual files are added to `public/` directory.

## 📝 License

This project is created for James McNeely. All rights reserved.

## 📞 Contact

**James McNeely**
- Email: liquidblu25@gmail.com
- Phone: 337-356-3218
- Location: Youngsville, LA 70592

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
