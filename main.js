/*
const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error ('CEP não Existe'); //erro de lançamento
    } else
    console.log(r);
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído!'))

console.log(consultaCEP);
*/

async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
    
        if (consultaCEPConvertida.erro) {
             throw Error('CEP não Existe');
        }
        console.log(consultaCEPConvertida); 
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro)

    }

}

var cep = document.getElementById('cep');








/* exercicio transforme a requisição abaixo em assincrono com async
var requisicao = fetch("https://localhost:5000/")
.then(resposta => resposta.json())
.then(respostaConvertida => console.log(respostaConvertida));

async function buscaRequisicao () {
    var requisicao = await fetch("https://localhost:5000/");
    var requisicaoConvertida = await requisicao.json();
    console.log(requisicaoConvertida);
}
*/

/* soma números
var number = 5
var number_2 = 6

function somaNumeros (number, number_2) {
  return number / number_2;
}

alert(somaNumeros(number, number_2));
*/
