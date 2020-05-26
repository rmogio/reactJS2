import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'
import Header from './Header'
import Tabela from './Tabela'
import Form from './Formulario'
import PopUp from './PopUp'


class App extends Component {
  state = {
    autores : [
      {
        nome: 'Ricardo',
        livro: 'Sei la',
        preco: '1'
      },
  
      {
        nome: 'Gabi',
        livro: 'Sei la2',
        preco: '2'
      },
  
      {
        nome: 'Amy',
        livro: 'Roubando',
        preco: '3'
      },
  
      {
        nome: 'Luna',
        livro: 'Petisco',
        preco: '4'
      }
    ],
  }

  removeAutor = index =>{
    const {autores} = this.state

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index
      })
    })

    PopUp.exibeMensagem('error', 'Autor removido com sucesso')
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores : [...this.state.autores, autor] })
    PopUp.exibeMensagem('success', "Autor adicionado com sucesso")
  }

  render(){
    return (
      <Fragment>
          <Header />
        <div className='container mb-10'>
          <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor} />
          <Form escutadorDeSubmit = {this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
