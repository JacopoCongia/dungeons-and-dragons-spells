import "@/styles/globals.css";
import { SpellsProvider } from "@/context/spells";

export default function App({ Component, pageProps }) {
  return (
    <SpellsProvider>
      <Component {...pageProps} />
    </SpellsProvider>
  );
}
