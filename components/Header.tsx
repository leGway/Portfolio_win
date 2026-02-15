import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
// On importe les icônes nécessaires (Menu et X pour le mobile)
import { 
  Sun, Moon, Github, Linkedin, Mail, Phone, Menu, X 
} from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // 1. L'état qui gère l'ouverture du menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Tes liens de navigation (J'ai bien inclus Dashboard)
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blogs', href: '/blogs' },
  ];

  // Tes réseaux sociaux corrigés (Note: je passe le composant, pas le JSX, pour gérer la taille dynamiquement)
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayita-godwin-68838a253/' },
    { icon: Mail, href: 'mailto:legodway@gmail.com' },
    { icon: Phone, href: 'https://wa.me/0619251267' },
    { icon: Github, href: 'https://github.com/leGway' },
  ];

  // Fonction pour fermer le menu automatiquement quand on clique sur un lien
  const handleNavClick = () => setIsMobileMenuOpen(false);

  if (!mounted) return null;

  return (
    // Z-50 impératif pour passer au-dessus de tout
    <header className="fixed top-0 left-0 w-full bg-neutral-900/95 backdrop-blur-md z-50 border-b border-white/5 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          onClick={handleNavClick}
        >
          GA
        </Link>

        {/* --- DESKTOP NAV (Caché sur mobile) --- */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ label, href }) => {
            const isActive = router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-cyan-400' : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Séparateur */}
          <div className="h-4 w-px bg-white/20" />

          {/* Socials & Thème Desktop */}
          <div className="flex items-center space-x-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-cyan-400 transition"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </nav>

        {/* --- MOBILE HAMBURGER BUTTON (Visible uniquement sur mobile) --- */}
        <div className="md:hidden flex items-center gap-4">
             <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white/70"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* C'est ce bouton qui ouvre/ferme le menu */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-cyan-400 focus:outline-none p-1"
                aria-label="Menu principal"
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY (Le panneau déroulant) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-white/10 shadow-2xl py-4 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col px-4 space-y-2">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={handleNavClick} // Ferme le menu au clic
                className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors block ${
                   router.pathname === href 
                   ? 'bg-white/10 text-cyan-400' 
                   : 'text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            
            {/* Socials Mobile */}
            <div className="flex justify-center space-x-8 pt-4 mt-2 border-t border-white/10">
               {socialLinks.map(({ icon: Icon, href }) => (
                <a 
                  key={href} 
                  href={href} 
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-cyan-400 transition"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}