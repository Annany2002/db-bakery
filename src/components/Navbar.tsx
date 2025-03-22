
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, History, Settings, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <Database className="w-5 h-5" /> },
    { name: 'Connections', path: '/connect', icon: <Database className="w-5 h-5" /> },
    { name: 'Backups', path: '/backups', icon: <History className="w-5 h-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-display font-medium"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Database className="h-4 w-4 text-white" />
              </div>
            </motion.div>
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-medium"
            >
              DB Backup
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-border/50 bg-background"
        >
          <div className="container px-4 py-3 mx-auto">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
