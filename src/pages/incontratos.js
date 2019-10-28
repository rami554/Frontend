import React from "react";
import axios from "axios";
const initialState = {
  start_date: "",
  end_date: "",
 // comments: "",
  cinema: "Multicine",
  start_dateError: "",
  end_dateError: "",
  commentsError: "",
 // cinemaError: ""
};
class incontratos extends React.Component {
  state = initialState;
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validar = () => {
    let start_dateError= "";
    let end_dateError= "";
    let commentsError= "";
  //  let cinemaError= "";

    if (!this.state.start_date) {
      start_dateError = "Este campo no puede estar vacio";
    }
    if (!this.state.end_date) {
      end_dateError = "Este campo no puede estar vacio";
    }
    if (!this.state.comments) {
      commentsError = "Este campo no puede estar vacio";
    }
 /*   if (!this.state.cinema) {
      cinemaError = "Este campo no puede estar vacio";
    }*/
    
    if (
        start_dateError ||
        end_dateError ||
        commentsError
       // cinemaError    
    ) {
      this.setState({
        start_dateError,
        end_dateError,
        commentsError,
      //  cinemaError
      });
      return false;
    }
    return true;
  };
  submitHandler = e => {
    e.preventDefault();
    let esValido = this.validar();
    if (esValido) {
      axios
        .post("https://localhost:44356/api/ContractDetail/?cinema=Multicine", {
            start_date:this.state.start_date,
            end_date: this.state.end_date,
            comments: this.state.comments,
            //cinema: this.state.cinema
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        REGISTRAR CONTRATOS
        <form onSubmit={this.submitHandler}>
          <br></br>
          <div>Fecha de Inicio</div>
          <input
            name='start_date'
            type='date'
            selected={this.state.start_date}
            placeholder='start_date'
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.start_dateError}
          </div>
          
          <div>Fecha de Conclucion</div>
          <input
            name='end_date'
            type='date'
            selected={this.state.start_date}
            placeholder='end_date'
            onChange={e => this.change(e)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.end_dateError}
          </div>

          <div>Comentarios</div> 
          <input
            name='comments'
            placeholder='comments'
            value={this.state.comments}
            onChange={e => this.change(e)}
          ></input>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.commentsError}
          </div>
{/*}
          <div>Cines</div>
          <select
            name='cinema'
            value={this.state.cinema}
            onChange={e => this.state.change(e)}>
            <option value='Hombre'>Multicine</option>
            <option value='Mujer'>Megacenter</option>
            <option value='Otro'>Otro</option>
          </select>*/}

          <br></br>

          <button type='submit'>Registrarme</button>
        </form>
      </div>
    );
  }
}
export default incontratos;