module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./molecules/**/*.{js,ts,jsx,tsx}",
    "./organisms/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        intro: "url('../../public/images/bg1.png')",
        intro: "url('../../public/images/bg2.png')",
        intro: "url('../../public/images/bg3.png')",
        intro: "url('../../public/images/bg4.png')",
        "dark-intro": "url('../../Public/darkBg1.png')",
        "dark-intro": "url('../../Public/darkBg2.png')",
        "dark-intro": "url('../../Public/darkBg3.png')",
        "dark-intro": "url('../../Public/darkBg4.png')",
      }),
    },
  },
  plugins: [],
};
