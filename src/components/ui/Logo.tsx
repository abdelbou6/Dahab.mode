import { Link } from 'react-router-dom';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'dark' | 'light';
  withLink?: boolean;
};

const Logo = ({ size = 'medium', color = 'dark', withLink = true }: LogoProps) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'h-8';
      case 'large':
        return 'h-12';
      case 'medium':
      default:
        return 'h-10';
    }
  };

  const logoImage = (
    <img
      src="/logo.svg"
      alt="Cap Avenir CIEL"
      className={`${getSizeClass()} w-auto ${color === 'light' ? 'brightness-0 invert' : ''}`}
    />
  );

  if (!withLink) {
    return <div className="flex items-center">{logoImage}</div>;
  }

  return (
    <Link to="/" className="flex items-center" aria-label="Retour à l'accueil">
      {logoImage}
    </Link>
  );
};

export default Logo;
