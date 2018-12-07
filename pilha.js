function Pilha() { // cria estrutura de objeto usando notação de função
    
    this.pilha = []; // inicializa o array Fila

    /*
        nome: inserePilha
        @param  param - Elemento a ser adicionado na Pilha
        funcionalidade: adiciona um elemento a fila
    */

    // define uma função como propriedade do objeto.
    this.inserePilha = function(param){
    	this.pilha[this.pilha.length] = param; // insere item 
        console.log( 'inserindo: ' + param );
    }

    /*
        nome: removePilha
        funcionalidade: remove item  da pilha
    */
    this.removePilha = function(){

    	if (this.pilha.length > 0) {

            // let, variável visível somente no escopo onde declarada
            let obj = this.pilha[this.pilha.length - 1];
            
            /*
                Função nativa Splice
                Paramêtro 1:
                    Índice o qual deve iniciar a alterar a lista. Se maior que o tamanho total da mesma, nenhum elemento será alterado. 
                    Se negativo, irá iniciar a partir daquele número de elementos a partir do fim.
                Paramêtro 2:
                    Um inteiro indicando o número de antigos elementos que devem ser removidos.
                    Se o 'parâmetro 1' não é especificado, ou se é maior que o número de elementos restantes na lista iniciando pelo índice,
                    então todos os elementos até o fim da lista serão deletados.
            */
            this.pilha.splice(this.pilha.length - 1, 1);
            
            console.log(obj + ' removido');
        } else {
            // se pilha vazia, retorna mensagem
            return "Sem elementos na pilha";
        }
    }

    /*
        nome: getPilha
        funcionalidade: retorna pilha
    */

    this.getPilha = function(){
        return this.pilha;
    }

    /*
        nome: clearPilha
        funcionalidade: limpa a pilha
    */

    this.clearPilha = function(){
        this.pilha = [];
        return this.pilha;
    }
}

var pilha = new Pilha();


/* Operações na pilha */

pilha.inserePilha(1); //inserindo: 1
pilha.inserePilha(2); //inserindo: 2
pilha.inserePilha(3); //inserindo: 3

console.log( pilha.getPilha(), 'Em string: ' + pilha.getPilha().toString() );
// Array(3) [1,2,3] "Em string: 1,2,3"

pilha.inserePilha(4); //inserindo: 4
pilha.inserePilha(5); //inserindo: 5
pilha.inserePilha(6); //inserindo: 6

console.log( pilha.getPilha(), 'Em string: ' + pilha.getPilha().toString() );
// Array(3) [1,2,3,4,5,6] "Em string: 1,2,3,4,5,6"

pilha.removePilha(); // 6 removido
pilha.removePilha(); // 5 removido

console.log( pilha.getPilha(), 'Em string: ' + pilha.getPilha().toString() );
// Array(4) [1, 2, 3, 4] "Em string: 1,2,3,4"

pilha.removePilha(); // 4 removido

console.log( pilha.getPilha(), 'Em string: ' + pilha.getPilha().toString() );
//(3) [1, 2, 3] "Em string: 1,2,3"

console.log( 'limpar pilha: ', pilha.clearPilha() );
// limpar pilha: [];
