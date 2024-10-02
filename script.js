let resposta = prompt("Qual é a sua idade?");

 if(resposta>=18) {
    console.log("Você é maior de idade");
   } else {
      console.log("Você é menor de idade");
   };

console.log("Sua idade é", resposta)

let numero=prompt("Digite um número");

function verificaParOuÍmpar(numero) {
    return numero%2 ===0 ? "Par":"Ímpar";
}

console.log(verificaParOuÍmpar(numero));

let número=prompt("Digite um número");
if (numero>0) {
    console.log("Número positivo");
}else if(numero<0) {
   console.log("Número negativo");
}else{
    console.log("Zero");
}

let a=prompt("Digite um número");

function tabuada(a) {
    for (let i=1; i<=10; i++){
        const resultado=a*i;
        console.log('${a}x${i}=${resultado}');
    }
}
tabuada(a);