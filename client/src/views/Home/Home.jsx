import React from "react";
import Helmet from "react-helmet";

import logo from "../../assets/logo.svg";
import NavBar from "../../components/NavBar/NavBar";
const Home = () => {
  return (
    <main>
      <NavBar />

      <Helmet>
        <title>Home | Mercado libre</title>
        <meta
          content="La comunidad de compra y venta online más grande de América Latina."
          name="description"
        />
        <meta content="Home | Mercado libre" property="og:title" />
        <meta content={logo} property="og:image" />
        <meta
          content="La comunidad de compra y venta online más grande de América Latina."
          property="og:description"
        />
      </Helmet>
    </main>
  );
};

export default Home;
