import { globalCss } from "@nextui-org/react";

export const globalStyles = globalCss({
  "*": {
    "box-sizing": "border-box",
  },
  body: {
    padding: 0,
    margin: 0,
    fontFamily: {
      sans: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono' 'Bitstream Vera Sans Mono'",
    },
  },
  a: { color: "inherit", "text-decoration": "none" },
});

export default globalStyles;
