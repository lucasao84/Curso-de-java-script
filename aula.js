///console.log("BEM VINDO MEU E LUCAS")
//console.log("oi meu nome e lucas e ja sei um pouco sobre java script")

//let idade = 5 ;
//console.log("IDADE É IGUAL A" , idade, "= idade")
//let caneta = 20;
//console.log(caneta , "é igual a caneta")
//let altura = 1800;
//console.log(altura)

let name = 'lucas'

let cor = null ; 

let pessoa = {
    nome: 'leticia' ,
    idade: 25, 
    estarAprovado: true,
    sobreNome: 'de souza',
    cidde: 'vale do paraiso',
    religiao: 'Cristão',
    profisao: 'engenheiro de software'
    

}

console.log(pessoa)

//arrays

let familia = [24,25,21,25,27,28]
console.log(` lucas tem ${familia[3]} anos` )
console.log(familia.length, 'indice')


//fuction

let corSite = 'azul'

function Resetar(){
    corSite =''
}

console.log(corSite)
Resetar()
console.log(corSite)

//function

let colp = 'azul'
function reseTar(cor, tonalidade) {
colp = cor + tonalidade
}

console.log(colp)
reseTar("vermelho", " verde")
console.log(colp)