import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
/** @type {import('tailwindcss').Config} */
export default defineConfig({
  darkMode: "class", // Use class strategy for dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [react(), tailwindcss()],
});
