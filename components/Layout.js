import { StylesContext } from "@material-ui/styles";
import Head from "next/head";
import styles from "../styles/LandingPage.module.css";
import Image from "next/image";

// images

function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>{children}</div>
    </div>
  );
}
Layout.defaultProps = {
  title: "Welcome to DSC",
  keywords: "..",
  description: "..",
};
export default Layout;
