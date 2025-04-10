import { defineConfig } from "@chakra-ui/react";

export const customConfig = defineConfig({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        green: "#A9CBB7",
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.green}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});
