import React, { Component } from 'react';
import axios from 'axios';

const Imc = props => (
  <tr>
    <td>{props.imc.genero}</td>
    <td>{props.imc.altura}</td>
    <td>{props.imc.massa}</td>
    <td>{props.imc.valor}</td>

  </tr>
)

export default class ImcList extends Component {
  constructor(props) {
    super(props);

    //this.deleteImc = this.deleteImc.bind(this)

    this.state = {imc: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/imc/')
      .then(response => {
        this.setState({ imc: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/imc/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      imc: this.state.imc.filter(el => el._id !== id)
    })
  }

  imcList() {
    return this.state.imc.map(currentimc => {
      return <Imc imc={currentimc} deleteImc={this.deleteImc} key={currentimc._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>IMC</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Genero</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>Valor</th>

            </tr>
          </thead>
          <tbody>
            { this.imcList() }
          </tbody>
        </table>
      </div>
    )
  }
}