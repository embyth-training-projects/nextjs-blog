import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../helpers/posts";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name="description"
          content="I post about programming web applications"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
    revalidate: 300, // 5 min
  };
}

export default HomePage;
