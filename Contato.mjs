/**
 * Observem o nome do arquivo: Contato.js
 *
 * Quando criamos um módulo javascript que exporta uma
 * classe, usamos como convenção o nome do arquivo igual
 * ao nome da classe, incluindo o CamelCase!
 *
 * Vamos exportar nossa classe com um export nomeado:
 */

export class Contato {
  // Nossos contatos possuem 3 propriedades privadas
  #id;
  #nome;
  #telefone;

  /**
   * No construtor, vamos receber nome e numero de
   * telefone, e um id vai ser gerado automagicamente
   * com a função Math.floor(Math.random() * 1000);
   */
  constructor(valorNome, valorTelefone) {
    this.#id = Math.floor(Math.random() * 1000);
    this.nome = valorNome;
    this.#telefone = valorTelefone;
  }

  /**
   * Em aula, nós implementamos esse método para
   * mostrar o ID. Vou deixar ele comentado aqui,
   * pois na nossa aplicação eu não quero que o
   * id seja exposto em nenhum lugar por enquanto.
   */

  // get id() {
  //   return `CONTATO-${this.#id}`;
  // }

  /**
   * O método setter "nome" é definido com esta regra
   * abaixo. Assim, teremos o controle do valor da
   * propriedade. Esse método está sendo chamado, também,
   * no nosso constructor (observem o this.nome sem a # lá
   * no constructor!)
   */
  set nome(novoNome) {
    if (novoNome.length === 0) {
      this.#nome = "Desconhecido";
    } else {
      this.#nome = novoNome;
    }
  }

  /**
   * Quero deixar apenas o nome e o telefone disponíveis
   * de forma externa. Criei dois métodos para isso.
   */
  get nome() {
    return this.#nome;
  }
  get telefone() {
    return this.#telefone;
  }
}
