function Contact() {
  return (
    <div>
      <h2>Contact Form</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "8px",
          marginTop: "auto",
        }}
      >
        <div className="form-input">
          <label>Nome: </label>
          <input />
        </div>

        <div className="form-input">
          <label>Email: </label>
          <input type="email" />
        </div>

        <div className="form-input">
          <label>Mensagem: </label>
          <textarea />
        </div>

        <div className="form-input">
          <button> Submeter</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
