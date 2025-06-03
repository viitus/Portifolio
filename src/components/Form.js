import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Seu Nome:</label>
        <input type="text" placeholder="Nome" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Assunto</label>
        <input type="text" placeholder="Assunto" />
        <label>Messagem</label>
        <textarea rows="6" placeholder="Escreva sua mensagem aqui"></textarea>
        <button className="btn">Enviar</button>
      </form>

    </div>
  )
}

export default Form