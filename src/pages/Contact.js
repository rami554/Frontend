import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form>
          <div>
              Nombre:
            <input type="text" name="name" />
          </div>
          <div>
              Comentario:
            <input type="text" name="coment" />
          </div>
            <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Contact;
