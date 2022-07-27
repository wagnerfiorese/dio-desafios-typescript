/* Como podemos melhorar o esse código usando TS? 


let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}

*/

// Resposta:

enum WorkType {
    Judge,
    Coach,
    Butcher,
    WebDeveloper
}

type Human = {
    name: string,
    age: number,
    profession: WorkType
}

let person1: Human = {
    name: 'Wagner',
    age: 30,
    profession: WorkType.WebDeveloper
}

let person2: Human = {
    name: 'Stephanie',
    age: 29,
    profession: WorkType.Coach
}