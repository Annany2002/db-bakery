
import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <motion.div 
        className="flex-1 container py-6 md:py-10 px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
      <footer className="py-6 border-t border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} DB Backup Utility. All rights reserved.</div>
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
