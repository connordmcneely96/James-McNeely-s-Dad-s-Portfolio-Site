import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import ResumeDownload from '@/components/ResumeDownload';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Experience />
      <Certifications />
      <Skills />
      <ResumeDownload />
      <Contact />
      <Footer />
    </main>
  );
}
