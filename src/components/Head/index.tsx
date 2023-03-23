import NextHead from "next/head";

type PropTypes = {
  title: string;
}

const Head = ({ title }: PropTypes) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content="Pokedex app" />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;