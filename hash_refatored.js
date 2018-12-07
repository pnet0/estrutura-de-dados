// cria estrutura de objeto usando notação de função
/*
    @param: obj (obj a ser preenchido na tabela hash)
*/

function HashTable(obj)
{

    this.length = 0; // tamanho do hash

    this.itens = {}; // objeto hash


    /* 
        Estrutura for em JS

        for( propriedade 'in' objeto )
        
    */
    for (var p in obj) { // for each no objeto

        // função - hasOwnProperty - verifica se o parametro enviado ( String ) é uma propriedade do objeto em questão 

        if (obj.hasOwnProperty(p)) {
            this.itens[p] = obj[p]; // atribui a propriedade ao objeto
            this.length++; // incrementa o tamanho da tabela hash
        }
    }


    /*
        nome: setItem
        @param chave: nome da propriedade
        @param valor: valor da propriedade
        funcionalidade : adiciona um "item" a tabela hash
    */
    this.setItem = function(chave, valor)
    {

        var retorno;
        var previous = undefined; // O valor global undefined representa um valor indefinido. Trata-se de um dos tipos primitivos do JavaScript.

        if (this.pesquisa(chave)) { // pesquisa item (propriedade) no hash
            previous = this.itens[chave];
            retorno = 'chave ' + chave + ' já existe';
        }
        else {
            this.length++; // se não encontrado, aumenta o tamanho da tabela hash
            retorno = 'chave ' + chave + ' adicionada';
        }
        this.itens[chave] = valor; // em seguida seta a propriedade


        return retorno;
    }

    /*
        nome: getItem
        @param chave
        funcionalidade: retorna valor da tabela (se encontado), pelo parâmetro enviado
    */
    this.getItem = function(chave) {
        return this.pesquisa(chave) ? this.itens[chave] : undefined; // pesquisa pelo item (propriedade) na tabela hash
        // utilizou-se operação ternária
    }

    /*
        nome: pesquisa
        @param chave
        funcionalidade: verifica se objeto contém propriedade em questão
    */
    this.pesquisa = function(chave)
    {
        // função - hasOwnProperty - verifica se o parametro enviado ( String ) é uma propriedade do objeto em questão
        return this.itens.hasOwnProperty(chave);

        // retorna Boolean

    }

    /*
        nome: removeItem
        @param  chave
        funcionalidade: remove item (propriedade) da tabela hash
    */
   
    this.removeItem = function(chave)
    {
        if (this.pesquisa(chave)) { // verifica se item (propriedade) existe na tabela  hash
            previous = this.itens[chave]; //valor do item
            this.length--; //diminui o tamanho da tabela
            // função - delete - remove propriedade de um objeto de acordo com o parâmetro enviado, se o objeto tiver a propriedade e for removida retorna 'true' senão, false
            delete this.itens[chave];
            return previous;
        }
        else {
            // mensagem de erro se item (propriedade) não encontrada
            console.log('item não encontrado');
            return undefined;
        }
    }

    /*
        nome: printHash
        @Param tipo
        funcionalidade: printa na tela propriedades da tabela hash de acordo com o parâmetro(tipo) passado..
    */

    this.printHash = function(tipo)
    {
        if(tipo == 'valores'){ // retorna valores da tabela hash
            var valors = [];
            for (var k in this.itens) {
                if (this.pesquisa(k)) {
                    // funçao - push - adiciona um elemento à um array
                    valors.push(this.itens[k]);
                }
            }
            return valors;
        }

        if(tipo == 'chaves'){ // retorna chaves da tabela hash
            var valors = [];
            for (var k in this.itens) {
                // funçao - push - adiciona um elemento à um array
                valors.push( k );
            }
            return valors;
        }

        if(tipo == 'tudo'){ // retorna a tabela hash ( chave - valor )
            var valors = [];
            for (var k in this.itens) {
                if (this.pesquisa(k)) {

                    // funçao - push - adiciona um elemento à um array
                    valors.push( k + ' - ' + this.itens[k]);
                }
            }
            return valors;
        }else{
            console.log('comando não encontrado');
        }
    }

    /*
        nome: clear
        funcionalidade : limpa tabela hash
    */
    this.clear = function()
    {
        this.itens = {}
        this.length = 0;
        console.log('hash limpo');
    }
}

/*
    objeto a ser enviado para tabela hash
*/
var itensHash = {
    um: 1, 
    dois: 2, 
    tres: 3, 
    "nSou4": 5
};

var h = new HashTable(itensHash);

console.log('tamanho do Hash: ' + h.length);
//tamanho do hash 4 

console.log('valor da chave "um": ' + h.getItem('um'));
// valor da chave "um": 1

console.log('pesquisa chave 6 ' + h.pesquisa(6));
// pesquisa chave 6: false

console.log( h.setItem(6, '6'));
// chave 6 adicionada

console.log('novo tamanho do hash ' + h.length);
// novo tamanho do hash

console.log(' get item chave 6: ' + h.getItem(6));
// get item chave 6: '6'

console.log('print hash: ', h.printHash('tudo'), 'Em String: ' +  h.printHash('tudo').toString());
// print hash:  (5) ["6 - 6", "um - 1", "dois - 2", "tres - 3", "nSou4 - 5"] Em String: 6 - 6,um - 1,dois - 2,tres - 3,nSou4 - 5

console.log('print hash chaves: ', h.printHash('chaves'), 'Em String: ' + h.printHash('chaves').toString() );
// print hash chaves:  (5) ["6", "um", "dois", "tres", "nSou4"] Em String: 6,um,dois,tres,nSou4

console.log('print hash values: ', h.printHash('valores'), 'Em String: ' + h.printHash('valores').toString() );
// print hash values:  (5) ["6", 1, 2, 3, 5] Em String: 6,1,2,3,5

h.clear();
// hash limpo

console.log('tamanho apos limpar: ' + h.length);
// tamanho apos limpar: 0