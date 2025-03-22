
import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 container py-6 md:py-8 px-4">
        {children}
      </div>
      <footer className="py-6 border-t border-border/40 bg-card/30">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
