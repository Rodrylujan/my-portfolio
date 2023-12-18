import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { HeaderSecction } from "./HeaderSecction";

export const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    const name = form.current.elements.user_name.value;
    const email = form.current.elements.user_email.value;
    const message = form.current.elements.message.value;

    if (!name || !email || !message) {
      setFormStatus("error");
      return;
    }

    emailjs
      .sendForm(
        "service_4i3xphb",
        "template_48eijco",
        form.current,
        "rqw27sCtnf12WTQkh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setFormStatus("error");
        }
      );
  };
  return (
    <section id="contact">
      <HeaderSecction
        subTitle="Contact"
        description="In this section, you can get in touch with me by sending me an email"
      ></HeaderSecction>
      <Form ref={form} className="body-contact" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="user_name">
          <Form.Label>Full name (*)</Form.Label>
          <Form.Control type="text" placeholder="Your name" name="user_name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="user_email">
          <Form.Label>Email address (*)</Form.Label>
          <Form.Control
            type="user_email"
            placeholder="name@example.com"
            name="user_email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message (*)</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <button type="submit" className="button-project">
          Enviar
        </button>
      </Form>
      {formStatus === "success" && (
        <div className="success-message">The email was sent successfully.</div>
      )}
      {formStatus === "error" && (
        <div className="error-message">
          An error was detected, please check that all fields are filled out.
        </div>
      )}
    </section>
  );
};
