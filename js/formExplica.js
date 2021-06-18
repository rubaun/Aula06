var valorCep = document.querySelector('#cep');
var expCep = new RegExp(/(\d{5})-(\d{3})/, 'g'); //Se declarar a expressão como global, deve-se executar antes de testar.
var btnSubmit = document.getElementsByName('enviar');

function verificaCep(){
   
    var verificaCep = expCep.test(valorCep.value); //Inicializa 
    var mensagem = '';
    
    
    if(verificaCep){
        valorCep.className = 'azul';
        //btnSubmit[0].disabled = false;
        
    }else{
        valorCep.className = 'vermelho';
        mensagem = 'Digite o CEP com apenas números.';
        //btnSubmit[0].disabled = true;
    }
    valorCep.setCustomValidity(mensagem);

    console.log(verificaCep);
}