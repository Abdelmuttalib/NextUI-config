import { NextUIProvider } from "@nextui-org/react";
import { theme, globalStyles } from "../src/Theme";

function MyApp({ Component, pageProps }) {
  // Page Global styles and resets
  globalStyles();
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
