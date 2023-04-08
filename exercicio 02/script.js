/*
Bora praticar e rever tudo o que foi ensinado na aula? 💜

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Icaro",
    n1: 7,
    n2: 9   
  },
  {
    name: "Amanda",
    n1: 4,
    n2: 7   
  },
  {
    name: "Silvio",
    n1: 10,
    n2: 9   
  },
  {
    name: "Felipe",
    n1: 2,
    n2: 4   
  }
]

for(let i = 0; i < students.length; i++){
  //console.log(students[i].n1)
 
  let averageOne = (students[0].n1 + students[0].n2)/2
 console.log(averageOne)
  if(averageOne>7) {
  alert(`Parabéns, ${students[0].name}! Você foi aprovado com média ${averageOne}`) 
  
} else { 
  alert(` Puxa, ${students[0].name}, 
  Sua média foi ${averageOne}
  Parece que não foi dessa vez`)
}
let averageTwo = (students[1].n1 + students[1].n2)/2
if(averageTwo>7) {
 alert(`Parabéns, ${students[1].name}! Você foi aprovado com média ${averageTwo}`) 
} else {
 alert(` Puxa, ${students[1].name}, 
 Sua média foi ${averageTwo}
 Parece que não foi dessa vez`)
}

let averageThree = (students[2].n1 + students[2].n2)/2
if(averageThree>7) {
 alert(`Parabéns, ${students[2].name}! Você foi aprovado com média ${averageThree}`) 
} else {
 alert(` Puxa, ${students[2].name}, 
 Sua média foi ${averageThree}
 Parece que não foi dessa vez`)
}

let averageFour = (students[3].n1 + students[3].n2)/2
if(averageFour>7) {
 alert(`Parabéns, ${students[3].name}! Você foi aprovado com média ${averageFour}`) 
} else {
 alert(` Puxa, ${students[3].name}, 
 Sua média foi ${averageFour}
 Parece que não foi dessa vez`)
 break;
}
}