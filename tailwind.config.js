/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F81539",
          gradient: "linear-gradient(180deg, #F81539 0%, #FC4308 100%)",
        },
        secondary: {
          100: "#FC4308",
        },
        gray: {
          100: "#F5F5F5",
          900: "#C3C3C3",
          
        },
        black: {
          100: "#3E3232",
          
        },
        dark: {
          100: "#000000",
        },
      },
      container: {
        center: true,
      },
      boxShadow: {
        normal: "0px 0px 32px rgba(0, 0, 0, 0.07)",
      },
      screens: {
        mobile: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        "Robot": "Robot",
    
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
