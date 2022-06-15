// function Carro(marcaAtribuida, precoAtribuida) {
//     this.marca = marcaAtribuida;
//     this.preco = precoAtribuida;
// }

// const honda = new Carro('Honda', 3000);
// const fiat = new Carro('Fiat', 5000);
// fiat.marca = 'Fiat';
// honda.teste = 'oi'





// console.log(honda);
// console.log(Carro)


// const Dom = {
//     seletor: 'li',
//     element() {
//         return elementoSelecionado = document.querySelector(this.seletor);

//     },
//     ativar() {
//         this.element().classList.add('Ativar');
//     }
// }


const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'Andou');
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(this.nome + 'Andou')
    }
}


const joao = new Pessoa('João', 20);
const maria = new Pessoa('maria', 25);
const bruno = new Pessoa('bruno', 15);







function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
}

const listaItens = new Dom('li');
listaItens.addClass('ativar')
