function ContactForm() {
  return (
    <section id="contact">
      <form>
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Mensagem" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
