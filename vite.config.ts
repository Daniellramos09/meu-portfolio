import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// O three.js não é importado estaticamente: só entra via import dinâmico das cenas
// do hero, então o Rollup o separa automaticamente em um chunk carregado sob demanda.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
