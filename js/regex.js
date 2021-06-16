var valorAvaliado = '72871-523';

var expCnpj = new RegExp(/\d{5}-\d{3}/, 'g');

var verificaCnpj = expCnpj.exec(valorAvaliado);

console.log(verificaCnpj);
console.log(expCnpj.test(verificaCnpj));


// Telefone \(?\d{2}\)?[\s]?\d{4,5}-?\d{4}

//CNPJ \d{2}\.\d{3}\.\d{3}\/0001-\d{2}

//E-mail ([\w].{3,20})@([\w].+)\.([\w]{3,5})

// CPF \d{3}\.\d{3}\.\d{3}-\d{2}

//PLACA PADRÃO ANTIGO [a-zA-Z]{3}-\d{4}