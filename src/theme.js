import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const colorTokens = () => ({
  primaryBlue: {
    100: "#cce5ff",
    200: "#99caff",
    300: "#66b0ff",
    400: "#3395ff",
    500: "#007bff",
    600: "#0062cc",
    700: "#004a99",
    800: "#003166",
    900: "#001933",
  },

  secondaryGrey: {
    100: "#f6f6f6",
    200: "#ececec",
    300: "#e3e3e3",
    400: "#d9d9d9",
    500: "#d0d0d0",
    600: "#a6a6a6",
    700: "#7d7d7d",
    800: "#535353",
    900: "#2a2a2a",
  },

  tertiaryBlack: {
    100: "#cfcfcf",
    200: "#a0a0a0",
    300: "#707070",
    400: "#414141",
    500: "#111111",
    600: "#0e0e0e",
    700: "#0a0a0a",
    800: "#070707",
    900: "#030303",
  },

  accentOrange: {
    100: "#ffeacc",
    200: "#ffd699",
    300: "#ffc166",
    400: "#ffad33",
    500: "#ff9800",
    600: "#cc7a00",
    700: "#995b00",
    800: "#663d00",
    900: "#331e00",
  },

  accentCyan: {
    100: "#d4f4f8",
    200: "#a8e8f0",
    300: "#7ddde9",
    400: "#51d1e1",
    500: "#26c6da",
    600: "#1e9eae",
    700: "#177783",
    800: "#0f4f57",
    900: "#08282c",
  },
});

export const themeSettings = (mode) => {
  const colors = colorTokens();
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primaryBlue[500],
            },
            secondary: {
              main: colors.secondaryGrey[700],
            },
            neutral: {
              dark: colors.tertiaryBlack[500],
              light: colors.secondaryGrey[200],
              mainBlack: colors.tertiaryBlack[400],
              mainGrey: colors.secondaryGrey[400],
              mainBlue: colors.primaryBlue[300],
            },
            accentWarm: {
              dark: colors.accentOrange[700],
              main: colors.accentOrange[500],
              light: colors.accentOrange[400],
            },
            accentCool: {
              dark: colors.accentCyan[700],
              main: colors.accentCyan[500],
              light: colors.accentCyan[400],
            },
            background: {
              default: colors.tertiaryBlack[800],
            },
            text1: {
              default: colors.secondaryGrey[300],
            },
            text2: {
              default: colors.secondaryGrey[200],
            },
          }
        : {
            primary: {
              main: colors.primaryBlue[500],
            },
            secondary: {
              main: colors.secondaryGrey[300],
            },
            neutral: {
              dark: colors.tertiaryBlack[500],
              light: colors.secondaryGrey[100],
              mainBlack: colors.tertiaryBlack[300],
              mainGrey: colors.secondaryGrey[300],
              mainBlue: colors.primaryBlue[300],
            },
            accentWarm: {
              dark: colors.accentOrange[600],
              main: colors.accentOrange[500],
              light: colors.accentOrange[300],
            },
            accentCool: {
              dark: colors.accentCyan[600],
              main: colors.accentCyan[500],
              light: colors.accentCyan[300],
            },
            background: {
              default: colors.secondaryGrey[200],
            },
            text1: {
              default: colors.tertiaryBlack[600],
            },
            text2: {
              default: colors.tertiaryBlack[500],
            },
          }),
    },

    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
