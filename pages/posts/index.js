import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../helpers/posts";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related articles from my blog"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 300, // 5 min
  };
}

export default AllPostsPage;
