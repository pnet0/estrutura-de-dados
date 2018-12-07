function Fila() { // cria estrutura de objeto usando notação de função

    this.fila = []; // inicializa o array Fila

    /*
        nome: insereFila
        @param param - Elemento a ser adicionado na fila
        funcionalidade: adiciona um elemento a fila
    */

    // define uma função como propriedade do objeto.
    this.insereFila = function(param){    
        this.fila[this.fila.length] = param;
        console.log( 'inserido ' + param );
    }
    /*
        nome: removeFila
        funcionalidade
    */
    // define uma função como propriedade do objeto.
    this.removeFila = function(){ // 

        if (this.fila.length > 0) {

            // let, variável visível somente no escopo onde declarada
            let obj = this.fila[0];

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
            this.fila.splice(0,1);
            console.log('item removido da fila...');
            return obj;
        } else {
            return "0 Elementos na fila";
        }

    }
    /*
        nome: getFila
        funcionalidade: retorna fila
    */
    this.getFila = function(){
        return this.fila;
    }
    /*
        nome: clearFila
        funcionalidade: limpar fila
    */
    this.clearFila = function(){
        this.fila = [];
        console.log('fila limpa');
    }

}

var fila = new Fila();

/*Operaçãoes na fila*/

fila.insereFila(1); //inserido 1
fila.insereFila(2); //inserido 2
fila.insereFila(3); //inserido 3

console.log( fila.getFila(), 'Em String: ' + fila.getFila().toString() );
// Array(3) [1, 2, 3] "Em String: 1,2,3"

fila.insereFila(4); //inserido 4
fila.insereFila(5); //inserido 5
fila.insereFila(6); //inserido 6

console.log( fila.getFila(), 'Em String: ' + fila.getFila().toString() );
// Array(6) [1, 2, 3, 4, 5, 6] "Em String: 1,2,3,4,5,6"

fila.removeFila(); // item removido da fila...
fila.removeFila(); // item removido da fila...

console.log( fila.getFila(), 'Em String: ' + fila.getFila().toString() );
// Array(4) [3, 4, 5, 6] "Em String: 3,4,5,6"

fila.clearFila();
// fila limpa

console.log( fila.getFila() );
// []

