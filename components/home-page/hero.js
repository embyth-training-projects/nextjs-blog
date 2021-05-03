import Image from "next/image";

import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={`/images/site/max.png`}
          alt={`An image showing Max`}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        Its blog about web development - especially frontend frameworks like
        React or VueJS.
      </p>
    </section>
  );
}

export default Hero;
