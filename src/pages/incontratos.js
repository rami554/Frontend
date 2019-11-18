import React from "react";
import axios from "axios";
import Header from "D:/Tsis-2019/Frontend/src/components/Header"
const initialState = {
  start_date: "",
  end_date: "",
  comments: "",
  cines: "",
  start_dateError: "",
  end_dateError: "",
  commentsError: "",
  cinesError: ""
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
    let cinesError= "";

    if (!this.state.start_date) {
      start_dateError = "Este campo no puede estar vacio";
    }
    if (!this.state.end_date) {
      end_dateError = "Este campo no puede estar vacio";
    }
    if (!this.state.comments) {
      commentsError = "Este campo no puede estar vacio";
    }
    if (!this.state.cines) {
      cinesError = "Este campo no puede estar vacio";
    }
    
    if (
        start_dateError ||
        end_dateError ||
        commentsError ||
        cinesError    
    ) {
      this.setState({
        start_dateError,
        end_dateError,
        commentsError,
        cinesError
      });
      return false;
    }
    return true;
  };
  submitHandler = e => {
    e.preventDefault();
    let esValido = this.validar();
    if (esValido) {
  const params ={
    cinema:this.state.cines
  }  
      axios
        .post("https://localhost:44356/api/ContractDetail"
        , { params,
            start_date:this.state.start_date,
            end_date: this.state.end_date,
            comments: this.state.comments
           // cinema: this.state.cines
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
/*Funcion Para llamar lista de cines
constructor(props){
  super(props);
  this.state ={
    cine:[]
  }
}  
  getplanes() {
    axios
      .get("https://localhost:44356/api/Cinema")
      .then(res => {
        const cine = JSON.parse(res.data);
        this.setState({ cine });
        console.log(cine);
      })
      .catch(error => {
        console.log(error);
      });
  }*/
  render() {
    return (
      <div>
        <Header />
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

          <select
            name='cines'
            value={this.state.cines}
            onChange={e => this.change(e)}
          >
            <option>Seleccionar</option>
            <option value='Multicine'>Multicine</option>
            <option value='Megacenter'>Megacenter</option>
            <option value='Otro'>Otro</option>
          </select>
            

          <br></br>

          <button type='submit'>Registrarme</button>
        </form>
      </div>
    );
  }
}
export default incontratos;