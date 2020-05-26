import React, {Fragment, Component} from 'react'
import Header from './Header'
import DataTable from './DataTable'


class Livros extends Component{

  constructor(props){
    super(props)

    this.state={
      livros: [
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
      titulo: 'Livros'
    }
  }

  render(){
    return (
      <Fragment>
        <Header/>
        <div className="container">
          <h1>Página de Livros</h1>
          <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']}/>
        </div>
      </Fragment>
    )
  }
}

export default Livros