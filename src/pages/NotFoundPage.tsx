import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold text-teal mb-4">404</h1>
          <h2 className="text-3xl font-heading font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 max-w-md mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
            <Link to="/">
              <Button variant="outline">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;