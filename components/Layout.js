import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

const Lay = styled.div`
height:100vh;
max-height:100vh;
overflow:hidden;
`

function Layout({ title, keywords, description, children }) {
  return (
    <Lay>
      <Head>
        <title>{title}</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;700&display=swap" rel="stylesheet"/>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>{children}</div>
    </Lay>
  );
}
Layout.defaultProps = {
  title: "GDSC NIT Patna",
  keywords: "..",
  description: "..",
};
export default Layout;
