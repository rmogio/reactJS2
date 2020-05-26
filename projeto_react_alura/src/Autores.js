import React, {Fragment, Component} from 'react'
import Header from './Header'
import DataTable from './DataTable'


class Autores extends Component{

  constructor(props){
    super(props)

    this.state={
      autores: [
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
      titulo: 'Autores'
    }
  }

  render(){
    return (
      <Fragment>
        <Header/>
        <div className="container">
          <h1>Página de Autores</h1>
          <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['nome']}/>
        </div>
      </Fragment>
    )
  }
}

export default Autores