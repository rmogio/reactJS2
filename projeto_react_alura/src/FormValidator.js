import validator from 'validator'

class FormValidator{

  constructor(validacao){
    this.validacao = validacao
  }

  valida(state){
    const campoValor = state[this.validacao.campo.toString()]
    const metodoValidacao = validator[this.validacao.metodo]

    if(metodoValidacao(campoValor, [], state) === true){
      console.log("formulario invalido")
      return false
    }else{
      console.log('form valido')
      return true
    }
  }

}

export default FormValidator