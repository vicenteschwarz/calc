/*
function mostrarNumero(event){
    let value = parseFloat(event.target.dataset.value);
    total = total + value  
    console.log(`${eval(total)}`)
}
let total = 0

document.getElementById('btns').addEventListener('click', mostrarNumero);
*/
document.getElementById('btns').addEventListener('click', mostrarNumero);
let calculo = ''

let lista = ['AC', 'CE', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '.', '*', '/', '=', '%']

function mostrarNumero(event) {
    
    let value = event.target.value
    
    if( !value) { 
      return;
      }

    if(value == 'AC'){
        limpar()
        exibirNoDisplay(0)
        return
    }

    if(value == 'CE'){
      limparCE()
      calculo = calculo.substring(0, calculo.length -1)
      exibirNoDisplay(calculo)
      return
    }


    if(value == '='){
    
      let resultado = (`${eval(calculo)}`)
      console.log(resultado)
      exibirNoDisplay(calculo && resultado)
      return
  
    }
    calculo += value;
    exibirNoDisplay(calculo)
  
  
  }

  function limpar(){
    calculo = ''
    console.log(calculo)
  }

  function limparCE(){ 
    console.log(calculo.substring(0, calculo.length -1))
  }

  function exibirNoDisplay(texto) {
    let display = document.getElementById('resultado').textContent = texto
}
