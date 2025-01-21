import "./form.css";

const Form = () => {
  return (
    <form action="">
      <input type="text" placeholder="Digite seu nome" />
      <input type="text" placeholder="Digite seu e-mail" />
      <textarea
        name=""
        id=""
        placeholder="Escreva sua sugestão, dúvida ou opinião"
      ></textarea>
      <button className="button-form">Enviar</button>
    </form>
  );
};
export default Form;
