import { Link } from 'react-router-dom';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'dark' | 'light';
};

const Logo = ({ size = 'medium', color = 'dark' }: LogoProps) => {
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

  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/logo.svg" 
        alt="Dahab.mode" 
        className={`${getSizeClass()} w-auto`} 
      />
    </Link>
  );
};

export default Logo;