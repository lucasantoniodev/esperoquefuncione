import { ThemeProvider } from "styled-components";

const DefaultTheme = {
  colors: {
    default: "#ffff",
    defaultText: "#574E41",
    hoverPrimaryButtonColor: "#6F8564",
    primaryColor: "#4B5944",
    secondColor: "#F2BC66",
    secondColorHover: "#FFDDA7",
    gradientBackground:
      "linear-gradient(180deg, #57714A 0%, rgba(87, 113, 74, 0.75) 100%)",
    navbarBackground: "#57714a",
    formColor: "#FDFDFD",
    formPlaceholder: "#AFAFAF",
    deletePostButton: "#C31C1C",
    deletePostButtonHover: "#c03a3a",
  },

  fontSize: {
    xs: ".5rem",
    sm: ".75rem",
    md: ".875rem",
    xm: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
    xxxl: "4rem",
  },
};

interface Props {
  children: React.ReactNode;
}

const ThemesProvider = ({ children }: Props) => (
  <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
);

export default ThemesProvider;
