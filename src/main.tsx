
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import { AuthProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { toast } from 'sonner';

const queryClient = new QueryClient();

const AppWithProviders = () => {
  React.useEffect(() => {
    // Show alpha notification
    const timer = setTimeout(() => {
      toast.info("Welcome to Guard Alpha", {
        description: "We're still in early development. Your feedback helps us improve!",
        duration: 5000,
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <BrowserRouter>
            <AuthProvider>
              <App />
              <Toaster position="top-right" richColors closeButton />
            </AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

// Make sure we're mounting to a valid DOM node
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(<AppWithProviders />);
