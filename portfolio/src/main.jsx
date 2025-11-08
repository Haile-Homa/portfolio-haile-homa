// 🔹 Core Imports
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';

// 🔹 Context Providers
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext.jsx';
import { ToastProvider } from './contexts/ToastContext.jsx';
import { AnimationProvider } from './contexts/AnimationContext';

// 🔹 Router Import
import { BrowserRouter } from 'react-router-dom';

// 🔹 Render the App
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
          <AppProvider>
            <AnimationProvider>
              <App />
            </AnimationProvider>
          </AppProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


//  PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('SW registered: ', registration)
      },
      (registrationError) => {
        console.log('SW registration failed: ', registrationError)
      }
    )
  })
}