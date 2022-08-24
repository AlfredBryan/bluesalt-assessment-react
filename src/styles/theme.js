import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1200px",
  xl: "1441px",
};

const colors = {
  brand: {
    purple: "#990D81",
    black: "#333758",
  },
};

const styles = {
  global: {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    body: {
      fontSize: "1.4rem",
      fontFamily: "Inter",
      color: "#333758",
    },
    a: {
      color: "#333758",
    },
    "::placeholder": {
      color: "rgba(51, 55, 88, 0.3)",
    },
  },
};

const customTheme = extendTheme({ styles, colors, breakpoints });

export default customTheme;
