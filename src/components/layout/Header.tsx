import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Pourquoi continuer ?', href: '#reasons' },
    { name: 'Parcours possibles', href: '#pathways' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Ressources', href: '#resources' },
  ];

  const renderNavLinks = (onClick?: () => void) => (
    <nav className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
      {navigationLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-navy-dark hover:text-teal font-medium"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <a href="#hero" className="z-10" aria-label="Vers l'accueil">
              <Logo size={scrolled ? 'small' : 'large'} withLink={false} />
            </a>

            <div className="hidden md:block">{renderNavLinks()}</div>

            <div className="md:hidden z-10">
              <button
                className="text-navy-dark hover:text-teal"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden overflow-y-auto pt-24`}
      >
        <div className="container-custom pb-16 space-y-8">
          {renderNavLinks(closeMenu)}
          <div className="bg-cream border border-teal-light rounded-lg p-6 text-navy-dark">
            <h3 className="text-lg font-semibold mb-2">Besoin d'aide ?</h3>
            <p className="text-sm">
              Consultez nos ressources sélectionnées pour découvrir les dispositifs d'accompagnement Parcoursup, les salons et
              les journées portes ouvertes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
