import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Layers, Target, Users, Calendar, FileText, Sparkles, Lightbulb, Building2 } from 'lucide-react';

const pathwayCards = [
  {
    title: 'BTS Services Informatiques aux Organisations',
    subtitle: 'Option SISR ou SLAM',
    description:
      'Deux ans pour approfondir l’administration des réseaux ou le développement applicatif. Formation très demandée qui accueille chaque année de nombreux bacheliers pro CIEL.',
    highlights: ['Stage de 8 à 12 semaines', 'Poursuites possibles en licence pro ou école spécialisée', 'Admission sur dossier Parcoursup'],
    link: 'https://www.onisep.fr/ressources/univers-formation/formations-post-bac/bts-services-informatiques-aux-organisations',
  },
  {
    title: 'BUT Réseaux & Télécoms ou Informatique',
    subtitle: 'IUT en 3 ans',
    description:
      'Un cursus professionnalisant avec un fort encadrement, idéal pour viser un niveau bac+3. Le BUT valorise les projets tutorés et les périodes en entreprise.',
    highlights: ['Accès à la licence ou aux écoles d’ingénieurs en apprentissage', 'Spécialisation progressive dès la 2e année', 'Possibilité de parcours anglophone selon les IUT'],
    link: 'https://www.onisep.fr/ressources/univers-formation/formations-post-bac/but-reseaux-et-telecommunications',
  },
  {
    title: 'Licences professionnelles & Écoles spécialisées',
    subtitle: 'Cybersécurité, Cloud, IoT…',
    description:
      'Après un BTS ou un BUT, ces formations ciblées renforcent votre expertise technique. Certaines écoles privées proposent également des cursus en alternance accessibles après un bac pro.',
    highlights: ['Alternance plébiscitée par les recruteurs', 'Taux d’insertion rapides (6 mois après le diplôme)', 'Réseau d’anciens et projets concrets'],
    link: 'https://www.letudiant.fr/etudes/licence-pro.html',
  },
];

const successPillars = [
  {
    icon: <GraduationCap className="h-6 w-6 text-teal" />,
    title: 'Valoriser ses acquis',
    description: 'Le bac pro CIEL offre une expérience pratique en maintenance, réseaux et cybersécurité : des atouts majeurs sur Parcoursup.',
  },
  {
    icon: <Layers className="h-6 w-6 text-teal" />,
    title: 'Construire par étapes',
    description: 'Du BTS au BUT, chaque palier vous permet de consolider vos compétences et de choisir une spécialisation porteuse.',
  },
  {
    icon: <Target className="h-6 w-6 text-teal" />,
    title: 'Se projeter dans les métiers',
    description: 'Technicien systèmes, administrateur cybersécurité, développeur full stack… Les métiers du numérique recrutent massivement.',
  },
];

const timeline = [
  {
    period: 'Novembre - Janvier',
    title: 'Explorer & tester ses envies',
    details: 'Salons de l’orientation (Salon de l’Étudiant, Studyrama), immersion dans les IUT et lycées, rencontres avec les anciens élèves.',
  },
  {
    period: 'Janvier - Mars',
    title: 'Dossiers Parcoursup',
    details: 'Constitution du dossier, lettres de motivation “Projet de formation motivé”, choix des spécialités et vœux groupés.',
  },
  {
    period: 'Avril - Juin',
    title: 'Entretiens & tests',
    details: 'Certains BTS/BUT organisent des oraux ou évaluations techniques. Préparez un portfolio de projets réalisés en bac pro.',
  },
  {
    period: 'Juin - Septembre',
    title: 'Décisions & rentrée',
    details: 'Phase d’admission, inscriptions administratives, recherche de logement ou d’entreprise pour l’alternance.',
  },
];

const testimonials = [
  {
    quote:
      '« Nos apprentis issus du bac pro CIEL sont opérationnels très rapidement. Leur culture réseau et cybersécurité est un vrai plus sur les projets SOC. »',
    author: 'Responsable pédagogique – BTS SIO, Lycée Turgot (Paris)',
  },
  {
    quote:
      '« Après mon bac pro, j’ai intégré le BUT Réseaux & Télécoms de l’IUT de Vannes. Les projets tutorés et l’alternance m’ont permis de rejoindre Orange en CDI dès la diplomation. »',
    author: 'Maëlys, promo 2023',
  },
  {
    quote:
      '« Les admissions parallèles en écoles d’ingénieurs sont accessibles aux profils motivés. Les bacs pro se distinguent par leur sens pratique et leur maturité. »',
    author: 'CESI École d’Ingénieurs – Service Admissions',
  },
];

const resources = [
  {
    title: 'Fiche formation BTS SIO – Onisep',
    description: 'Programme détaillé, compétences visées et débouchés après le BTS Services Informatiques aux Organisations.',
    link: 'https://www.onisep.fr/ressources/univers-formation/formations-post-bac/bts-services-informatiques-aux-organisations',
  },
  {
    title: 'Calendrier Parcoursup 2024 – L’Étudiant',
    description: 'Toutes les dates clés pour ne manquer aucune étape de la procédure.',
    link: 'https://www.letudiant.fr/etudes/parcoursup/calendrier-parcoursup.html',
  },
  {
    title: 'Trouver une alternance en cybersécurité – Onisep',
    description: 'Conseils pratiques pour postuler en apprentissage dans les métiers du numérique.',
    link: 'https://www.onisep.fr/ressources/univers-formation/les-metiers-en-region/ile-de-france/alternance-cybersecurite',
  },
  {
    title: 'Guide des BUT numériques – L’Étudiant',
    description: 'Comparatif des BUT Informatique, R&T, MMI… avec témoignages et taux d’insertion.',
    link: 'https://www.letudiant.fr/etudes/but.html',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage = () => {
  return (
    <div className="bg-white" id="hero">
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg')] bg-cover bg-center" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy-dark/80 to-navy-dark/60"></div>
        <div className="container-custom relative z-10 py-24">
          <motion.div
            className="max-w-3xl text-white space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.span className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm uppercase tracking-wide" variants={fadeInUp}>
              Bac Pro CIEL → Réussir sa poursuite d’études
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl font-bold" variants={fadeInUp}>
              Cap sur l’avenir : toutes les clés pour poursuivre après un bac pro CIEL
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-gray-100" variants={fadeInUp}>
              Comparez les BTS, BUT, licences professionnelles et écoles d’ingénieurs qui recrutent les talents du numérique.
              Inspirez-vous de témoignages d’étudiants et d’équipes pédagogiques pour bâtir votre projet.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
              <a href="#pathways" className="btn btn-secondary inline-flex items-center text-base">
                Explorer les parcours
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#resources"
                className="btn btn-outline border-white text-white hover:text-navy-dark hover:bg-white"
              >
                Consulter les ressources
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="reasons" className="py-20 bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2>Pourquoi poursuivre ses études après un bac pro CIEL ?</h2>
            <p className="mt-4 text-navy">
              Les entreprises recherchent des profils capables de sécuriser les infrastructures et de développer des solutions numériques.
              En prolongeant vos études, vous gagnez en autonomie, en crédibilité et en niveau de recrutement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successPillars.map((pillar) => (
              <div key={pillar.title} className="card p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-light/20 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-dark">{pillar.title}</h3>
                <p className="text-navy">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pathways" className="py-20">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center bg-teal-light/20 text-teal-dark rounded-full px-4 py-1 text-sm font-medium uppercase tracking-wide">Parcours en lumière</span>
            <h2 className="mt-4">Les formations qui recrutent les bacheliers pro CIEL</h2>
            <p className="mt-4 text-navy">
              Ces cursus s’appuient sur les compétences techniques et professionnelles acquises en bac pro. Ils offrent des débouchés rapides
              ou la possibilité de poursuivre jusqu’au niveau ingénieur.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pathwayCards.map((pathway) => (
              <article key={pathway.title} className="card h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-navy-dark">{pathway.title}</h3>
                      <p className="text-sm uppercase tracking-wide text-teal-dark font-semibold mt-2">{pathway.subtitle}</p>
                    </div>
                    <Sparkles className="h-6 w-6 text-gold" />
                  </div>
                  <p className="mt-4 text-navy flex-1">{pathway.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-navy-dark/80">
                    {pathway.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-teal"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={pathway.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center text-teal hover:text-teal-dark font-semibold"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-dark/95 to-navy-dark" id="timeline">
        <div className="container-custom text-white space-y-12">
          <div className="max-w-3xl">
            <h2>Votre feuille de route Parcoursup</h2>
            <p className="mt-4 text-gray-200">
              Anticipez chaque étape pour maximiser vos chances d’admission : visites, dossiers, entretiens et installation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeline.map((step) => (
              <div key={step.period} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-teal-light font-semibold">
                    <Calendar className="h-4 w-4" />
                    {step.period}
                  </span>
                  <FileText className="h-5 w-5 text-gold-light" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-gray-200">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container-custom space-y-12">
          <div className="max-w-2xl">
            <h2>Ils et elles témoignent</h2>
            <p className="mt-4 text-navy">
              Des équipes pédagogiques et des anciens élèves confirment la réussite des parcours post-bac pro CIEL.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author} className="card h-full p-6 flex flex-col justify-between bg-cream">
                <Users className="h-10 w-10 text-teal" />
                <blockquote className="mt-4 text-navy italic leading-relaxed">{testimonial.quote}</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-navy-dark">{testimonial.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream" id="resources">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl">
            <h2>Ressources incontournables</h2>
            <p className="mt-4 text-navy">
              Sélection de contenus fiables inspirés d’Onisep, de l’Étudiant et d’établissements partenaires pour approfondir chaque piste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <article key={resource.title} className="card p-6 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-teal-light/30 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-teal" />
                  </div>
                  <Building2 className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy-dark">{resource.title}</h3>
                <p className="mt-3 text-navy flex-1">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-teal hover:text-teal-dark font-semibold"
                >
                  Consulter la ressource
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom bg-gradient-to-r from-teal-dark to-navy-dark text-white rounded-3xl px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold">Prêt·e à lancer votre dossier ?</h2>
            <p className="text-gray-100">
              Téléchargez notre checklist “Dossier Parcoursup spécial bac pro CIEL” et planifiez un rendez-vous avec un conseiller en orientation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base"
            >
              Télécharger la checklist
            </a>
            <a
              href="mailto:contact@cap-avenir-ciel.fr"
              className="btn btn-outline border-white text-white hover:text-navy-dark hover:bg-white"
            >
              Écrire à un conseiller
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
