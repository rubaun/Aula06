
//De acordo com a suite escolhida o hospede já tem marcados as refeições

var suiteEscolhida = [document.forms[0].elements[0], document.forms[0].elements[1], document.forms[0].elements[2]]

for (var i=[0]; i < suiteEscolhida.length; i++){

suiteEscolhida[i].addEventListener('change', function(){
    var almoco = document.forms[0].elements[11]
    var janta = document.forms[0].elements[12]
    almoco.checked = false;
    janta.checked = false;

    if(suiteEscolhida[0].checked){
        almoco.checked = true;
        janta.checked = true;
    }

    if(suiteEscolhida[1].checked){
        almoco.checked = true;
    }
        
})
}

//Tratando do CPF
var cpf = document.getElementById('cpf');

cpf.addEventListener('blur', function(){
    var cpfValor = cpf.value;
    var cpfCompleto = cpfValor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    function( valorRegex, argumento1, argumento2, argumento3, argumento4 ) {
           return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
   })  
   cpf.value = cpfCompleto; 
   
})


