import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Index' },
    { path: '/writing', label: 'Writing' },
    { path: '/reflections', label: 'Reflections' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-paper">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-sm border-b border-mist/30">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="mono text-slate hover:text-ink transition-colors duration-200"
            >
              Index
            </Link>
            
            <div className="flex items-center space-x-8">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mono transition-colors duration-200 relative ${
                    isActive(item.path) 
                      ? 'text-ink' 
                      : 'text-slate hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-px bg-ink" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {children}
      </main>

      <footer className="border-t border-mist/30 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4 text-sm text-slate">
              <span className="mono">© 2024</span>
              <span>—</span>
              <span>Crafted with intention</span>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mono text-slate hover:text-ink transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
          
          <p className="text-sm text-ash italic text-center max-w-md mx-auto">
            A living document — constantly evolving as thoughts develop and perspectives shift.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
