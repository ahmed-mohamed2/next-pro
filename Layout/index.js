import Head from "next/head";
import { Footer, Navbar } from "../components";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Teeela</title>
        <link rel="shortcut icon" href="/logo.svg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
