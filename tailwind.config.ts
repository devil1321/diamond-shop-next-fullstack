import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor:{
        'figma-purple':'#FA00FF'
      },
      gradients:{
        'figma-purple-green':'linear-gradient(90deg,#FA00FF,#00FFFF)',
        'figma-green-purple':'linear-gradient(90deg,#00FFFF,#FA00FF)',
        'figma-gray-black':'linear-gradient(45deg,#A4A3A3,#000000)',
        'figma-black-grey':'linear-gradient(0deg,#000000,#A4A3A3)',
        'figma-light-gray-black':'linear-gradient(45deg,#A9A5A5,#000000)',
        'figma-light-black-grey':'linear-gradient(0deg,#000000,#A9A5A5)'
      },
      backgroundColor:{
        'figma-green':'#00FFFF',
        'figma-purple':'#FA00FF',
        'figma-orange':'#F1D129',
        'figma-strong-green':'#5CE72B',
        'figma-dark-gray':'#7B7575',
        'figma-brown':'#4B0000'
      }
    },
    
  },
  plugins: [],
};
export default config;
