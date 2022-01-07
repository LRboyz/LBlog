import "styles/global.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import AppLayout from "components/Layout/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
