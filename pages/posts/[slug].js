import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/post-detail/post-content";

import { getPostData, getPostFiles } from "../../helpers/posts";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
      revalidate: 600, // 10 min
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
