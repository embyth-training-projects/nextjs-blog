import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";

import styles from "./post-content.module.css";

function PostContent(props) {
  const { title, image, content } = props.post;
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={`/images/posts/${image}`} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
