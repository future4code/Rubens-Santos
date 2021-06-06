/*Exercício de interpretação de código 1
    Matheus Nachtergaele
    Virginia Cavendish
    { canal: 'Globo', horario: '14h' }
*/

/*Exercício de interpretação de código 2

idade: 3
nome: "Juca"
raca: "SRD"

idade: 3
nome: "Juba"
raca: "SRD"

idade: 3
nome: "Jubo"
raca: "SRD"

O spread faz com que o novo objeto herde as propriedades de outro objeto.

*/


/*Exercício de interpretação de código 3


*/



//Exercício de escrita de código 1

const pessoa1 = {
    nome: "Rubens",
    apelidos: ["Rub", "Rubinho", "Ru"]
}
const pessoa2 = {
    ...pessoa1,
    apelidos: ["R", "U", "B"]
}

const imprimePessoa = (pessoa) => {
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]} ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `
}
console.log(imprimePessoa(pessoa1))

console.log(imprimePessoa(pessoa2))


//Exercício de escrita de código 2

const p1 = {
    nome: "carla",
    idade: 45,
    profissao: "médica",
}

const p2 = {
    nome: "carlos",
    idade: 54,
    profissao: "programador",
}

const informacoes = (pessoas) => {
    const arrayInformacoes = [pessoas.nome, pessoas.nome.length, pessoas.idade, pessoas.profissao, pessoas.profissao.length]
    return arrayInformacoes
}

console.log(informacoes(p1))


//Exercício de Escrita de Código 3

const carrinho = []

const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Uva",
    disponibilidade: true
}


const fruta3 = {
    nome: "Pera",
    disponibilidade: true
}

const colocaNoCarrinho = (fruta) => {
    carrinho.push(fruta)
    return carrinho
}

colocaNoCarrinho(fruta1)
colocaNoCarrinho(fruta2)
colocaNoCarrinho(fruta3)

console.log(carrinho)

