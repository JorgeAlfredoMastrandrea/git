/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",    
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentes/ComponentesChartJS/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/renderizar/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{html,js}'
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-500',
    'text-white',
    'container px-8 mx-auto',
    'text-center grid grid-cols-1 gap-8 sm:grid-cols-3 bg-blue-500',
    'text-center columns-3 text-white p-5 col-span-2',
    'bg-red-200',
    'text-center',
    'grid h-screen'
    // Agrega aquí todas las clases que uses dinámicamente
  ],
};
