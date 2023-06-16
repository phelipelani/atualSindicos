import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar os campos do formulário aqui antes de enviar o e-mail

    // Enviar o formulário usando o EmailJS
    emailjs
      .sendForm(
        "SEU_SERVICE_ID", // Substitua pelo seu Service ID do EmailJS
        "SEU_TEMPLATE_ID", // Substitua pelo seu Template ID do EmailJS
        e.target,
        "SEU_USER_ID" // Substitua pelo seu User ID do EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          // Limpar o formulário após o envio
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          // Exibir uma mensagem de sucesso ou redirecionar para outra página
          alert("E-mail enviado com sucesso!");
        },
        (error) => {
          console.log(error.text);
          // Exibir uma mensagem de erro ou tratar o erro adequadamente
          alert(
            "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente."
          );
        }
      );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="message">Mensagem:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;