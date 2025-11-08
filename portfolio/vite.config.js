import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // binds to 0.0.0.0
    port: 5173, // optional, default is 5173
  },
})
  


/* // vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import typography from '@tailwindcss/typography'

//  Vite Configuration with React + TailwindCSS
export default defineConfig({
  plugins: [
    react(),       // Enables React Fast Refresh & JSX support
    tailwindcss({
      config: {
        theme: {
          extend: {},
        },
        plugins: [
          typography, // <-- use the ES module import here
        ],
        variants: {
          extend: {
            customVariant: ['dark'],
          },
        },
      },
    }), // Integrates TailwindCSS with Vite
  ],
  server: {
    host: true, // binds to 0.0.0.0
    port: 5173, // optional, default is 5173
  },
});
 */