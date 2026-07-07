import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container-custom py-16">
      <div className="text-center">
        <div className="text-8xl mb-4">404</div>
        <h1 className="text-4xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex items-center gap-2">
          <Home size={18} /> Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;