//Exercício de escrita de código 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a
const arrayNomes = []
const nomePets = pets.map((pet) => {
    let nome = pet.nome
    return arrayNomes.push(nome)

})

console.log(arrayNomes)

