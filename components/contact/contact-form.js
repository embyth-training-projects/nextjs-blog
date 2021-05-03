import { useEffect, useRef, useState } from "react";

import Notification from "../ui/notification";

import styles from "./contact-form.module.css";

async function sendContactData(contactData) {
  const response = await fetch(`/api/contact`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `Something went wrong!`);
  }
}

function getNotificationData(status, error) {
  switch (status) {
    case `pending`:
      return {
        status,
        title: `Sending message...`,
        message: `Your message is on its way!`,
      };
    case `success`:
      return {
        status,
        title: `Success!`,
        message: `Message sent successfully!`,
      };
    case `error`:
      return {
        status,
        title: `Error!`,
        message: error || `Something went wrong!`,
      };
    default:
      return null;
  }
}

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState(null);
  const [requestError, setRequestError] = useState(null);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  useEffect(() => {
    if (requestStatus === `success` || requestStatus === `error`) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(evt) {
    evt.preventDefault();

    setRequestStatus(`pending`);

    try {
      await sendContactData({
        email: emailInputRef.current.value,
        name: nameInputRef.current.value,
        message: messageInputRef.current.value,
      });

      setRequestStatus(`success`);
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus(`error`);
    }
  }

  const notification = getNotificationData(requestStatus, requestError);

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
      {notification && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;
