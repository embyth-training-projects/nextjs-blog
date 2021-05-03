import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: `Getting Started With NextJS`,
    image: `getting-started-nextjs.png`,
    slug: `getting-started-with-nextjs`,
    date: `2021-02-10`,
    excerpt: `NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ship with build-in SSR.`,
  },
  {
    title: `Getting Started With NextJS`,
    image: `getting-started-nextjs.png`,
    slug: `getting-started-with-nextjs2`,
    date: `2021-05-22`,
    excerpt: `NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ship with build-in SSR.`,
  },
  {
    title: `Getting Started With NextJS`,
    image: `getting-started-nextjs.png`,
    slug: `getting-started-with-nextjs3`,
    date: `2021-03-14`,
    excerpt: `NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ship with build-in SSR.`,
  },
  {
    title: `Getting Started With NextJS`,
    image: `getting-started-nextjs.png`,
    slug: `getting-started-with-nextjs4`,
    date: `2021-03-14`,
    excerpt: `NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ship with build-in SSR.`,
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
