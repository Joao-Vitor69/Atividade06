let ndm = ""
let  idm = 1000000000;

for (let i = 1; i <= 10; i++) {
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
    idade = parseFloat(idade)

if(idade<idm){
    idm = idade
    ndm = nome
}
}
alert("O nome da pessoa mais nova é: "+ndm)
