import * as React from "react";
import Head from "next/head";
import Container from "../../../containers/checkout-success";
import Top from "../../../components/top-bar";
import Bar from "../../../components/search";
import Layout from "../../../components/layout";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <React.Fragment>
      <Top />
      <Layout>{page}</Layout>
    </React.Fragment>
  );
};
