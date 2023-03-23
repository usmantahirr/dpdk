import { type NextPage } from "next";
import Head from "next/head";

import Hero from "~/components/Hero";
import Filter from "~/components/Filter";
// import Navbar from "~/components/navbar";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/*<Navbar />*/}
        <Hero />
        <div className="container mx-auto">
          <Filter />
        </div>
      </main>
    </>
  );
};

export default Home;
