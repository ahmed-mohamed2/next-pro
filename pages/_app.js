import { ThemeProvider } from "@mui/material";
import { ProductCard } from "../components/common/";
import Layout from "../Layout";
import "../styles/globals.css";
import { theme } from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <ProductCard />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
