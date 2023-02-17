module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      colors: {
        SliderBar: "hsl(174, 77%, 80%)",
        SliderBg: "hsl(174, 86%, 45%)",
        MainBg: "hsl(230, 100%, 99%)",
        CtaBg: "hsl(227, 35%, 25%)",
        ToggleBg: "hsl(223, 50%, 87%)",
        Text: "hsl(225, 20%, 60%)",
        BoxBg: "hsl(0, 0%, 100%)",
      },
      screens: {
        laptop: "1440px",
        tablet: { min: "520px", max: "767px" },
      },
    },
  },
  plugins: [],
};
