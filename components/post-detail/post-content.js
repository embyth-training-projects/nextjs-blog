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
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
