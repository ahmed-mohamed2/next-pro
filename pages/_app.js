import { ThemeProvider } from "@mui/material";
import Layout from "../Layout";
import "../styles/globals.css";
import { theme } from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
