import React from "react";
import { useState } from "react";
import ThankYou from "./Components/ThankYou";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/d2f84f80-7267-11ed-90d2-f5e5b36b68af"; // TODO - fill on the later step

const ContactForm = () => {


  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <ThankYou/>
      </>
    );
  }

  return (
    <form  className="form"
      id="contactform"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
     <h1>Contact Me</h1>
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button  value="Download CTA" type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;
