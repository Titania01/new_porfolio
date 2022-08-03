import "../styles/globals.scss";
import "../styles/_base.scss";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { portfolioTheme } from "../utils/entity";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = portfolioTheme.use();
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      return;
    }
    document.documentElement.classList.add(theme);
  }, [theme]);
  return <Component {...pageProps} />;
}

export default MyApp;
