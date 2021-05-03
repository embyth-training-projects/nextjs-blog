import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";

import styles from "./post-content.module.css";

const DUMMY_POST = {
  title: `Getting Started With NextJS`,
  image: `getting-started-nextjs.png`,
  slug: `getting-started-with-nextjs`,
  date: `2021-02-10`,
  content: `# This is a first post!`,
};

function PostContent() {
  return (
    <article className={styles.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.image}`}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
