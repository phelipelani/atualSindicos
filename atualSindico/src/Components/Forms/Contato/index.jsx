import { useState } from "react";
import emailjs from "emailjs-com";
import { BodyForm, FormStyle, HeaderForm } from "./style";
import logo from "../../../Assets/LogoTipo.png";

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
        "service_edba4o8", // Substitua pelo seu Service ID do EmailJS
        "template_sqb290g", // Substitua pelo seu Template ID do EmailJS
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
    <FormStyle onSubmit={handleSubmit}>
      <HeaderForm>
        <img src={logo} alt="Logo Atual" />
        <h3>Preencha o formulário abaixo para solicitar mais informações</h3>
      </HeaderForm>
      <BodyForm>
        <div>
          {" "}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>{" "}
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </BodyForm>
    </FormStyle>
  );
};

export default ContactForm;
