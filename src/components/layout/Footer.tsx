import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8" id="footer">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo color="light" size="medium" withLink={false} />
            <p className="mt-4 text-gray-300">
              Cap Avenir CIEL accompagne les bacheliers professionnels CIEL dans la construction d’un projet d’études ambitieux,
              réaliste et aligné sur les besoins du numérique.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Raccourcis</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#reasons" className="hover:text-gold">Pourquoi poursuivre ?</a></li>
              <li><a href="#pathways" className="hover:text-gold">Parcours conseillés</a></li>
              <li><a href="#testimonials" className="hover:text-gold">Témoignages</a></li>
              <li><a href="#resources" className="hover:text-gold">Ressources utiles</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacts des écoles</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <span className="block font-semibold text-white">IUT de Vélizy (BUT Réseaux & Télécoms)</span>
                <a
                  href="https://iut-velizy-rt.uvsq.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  iut-velizy-rt.uvsq.fr
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">Lycée Turgot – BTS SIO</span>
                <a
                  href="https://lycee-turgot.fr/formation/bts-sio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  lycee-turgot.fr
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">CESI École d’Ingénieurs</span>
                <a
                  href="https://www.cesi.fr/formation/ingenieur-specialite-informatique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  cesi.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Restez informé·e</h3>
            <p className="text-gray-300 text-sm mb-4">
              Inscrivez-vous pour recevoir les dates clés des salons, les journées portes ouvertes et les webinaires d’orientation
              dédiés au bac pro CIEL.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                name="newsletter"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-2 rounded-md transition-colors"
              >
                Je m’inscris
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Cap Avenir CIEL. Ressource indépendante inspirée d’Onisep et de l’Étudiant.</p>
          <div className="flex flex-wrap gap-6">
            <a href="https://www.onisep.fr" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Onisep
            </a>
            <a href="https://www.letudiant.fr" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              L’Étudiant
            </a>
            <a href="#hero" className="hover:text-gold">Haut de page</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
