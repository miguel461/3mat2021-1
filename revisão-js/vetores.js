let frutas = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamão']

// Exibir o vetor
console.log(frutas)


//tirar o ultimo elemento do vetor
let ultimafruta = frutas.pop()

console.log(frutas)
console.log(ultimafruta)

// tirar o primeiro elemento do vetor
let primeirafruta = frutas.shift()

console.log(frutas)
console.log(primeirafruta)

//tirar as posições intermediarias
//splice()
// 1° parametro = posição que sera removida (lembre-se que a contagem começa em zero)
let terceirafruta = frutas.splice(2, 1)

console.log(frutas)
console.log(terceirafruta)// splice() sempre retorna um vetor

//inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

//inserir um elemento no inicio do vetor
frutas.unshift('amora')
console.log(frutas)

//inserindo em posição intermediaria
//splice() para inserção
//1° parâmetro = a posição onde ocorrera a inserção
//2° parâmetro = quantos elementos serão excluidos (0)
//parametros seguintes = elementos a serem inseridos

//inserindo a 4° posição
frutas.splice(3 , 0, 'pessego')
console.log(frutas)

//inserindo 2 frutas na posição 3
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

//substituindo a posição 6
frutas.splice(5, 1, 'abacate')
console.log(frutas)