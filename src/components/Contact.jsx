import "../style/Contact.css";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  return (
    <section id="contact">
      <h1>About me</h1>
      <div className="description-seccition">
        In this section, you will find information about my skills and the
        technologies I work with
      </div>

      <Form className="body-contact">
        <Form.Group className="mb-3" controlId="full-name">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <button className="button-project">
          Enviar
        </button>
      </Form>
    </section>
  );
};
