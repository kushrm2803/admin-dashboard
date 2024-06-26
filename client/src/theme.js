export const tokensDark = {
  grey: {
    0: "#f0f0f0",
    10: "#e0e0e0",
    50: "#c2c2c2",
    100: "#a3a3a3",
    200: "#858585",
    300: "#666666",
    400: "#525252",
    500: "#3d3d3d",
    600: "#292929",
    700: "#141414",
    800: "#0a0a0a",
    900: "#000000",
  },
  primary: {
    // dark grey
    100: "#d3d3d3", // lighter grey
    200: "#a6a6a6", // medium grey
    300: "#7a7a7a", // dark grey
    400: "#4d4d4d", // darker grey
    500: "#333333", // dark grey main color
    600: "#2b2b2b",
    700: "#232323",
    800: "#1a1a1a",
    900: "#121212",
  },
  secondary: {
    // teal
    100: "#ccf0ea",
    200: "#99e1d5",
    300: "#66d2bf",
    400: "#33c3aa",
    500: "#00b496",
    600: "#00907a",
    700: "#006c5e",
    800: "#004842",
    900: "#002426",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Mukta", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Mukta", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Mukta", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Mukta", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Mukta", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Mukta", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Mukta", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
