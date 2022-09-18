import "../styles/globals.css";
import { useThema, Thema } from "@igara.github.io/ui";

function MyApp({ Component, pageProps }) {
  const { variables, themaName } = useThema();

  return (
    <Thema variables={variables} themaName={themaName}>
      <Component {...pageProps} />
    </Thema>
  );
}

export default MyApp;
