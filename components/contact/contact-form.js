import { useRef } from "react";

import styles from "./contact-form.module.css";

function ContactForm() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  function sendMessageHandler(evt) {
    evt.preventDefault();

    fetch(`/api/contact`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        name: nameInputRef.current.value,
        message: messageInputRef.current.value,
      }),
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required ref={messageInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
