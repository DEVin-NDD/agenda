/**
 * Esta é nossa classe de agenda telefonica.
 */
export class Agenda {
  /**
   * A propriedade contatos é uma lista de contatos.
   * Não pretendo adicionar nenhuma lógica especial,
   * então resolvi deixar ela pública.
   */
  contatos = [];

  constructor() {
    /**
     * Gostei de usar o Object.seal em aula, então resolvi
     * usar aqui :P
     *
     * Quero garantir que minha instancia de Agenda só tenha
     * a propriedade "contatos".
     */
    Object.seal(this);
  }

  adicionarContato(contato) {
    /**
     * Aqui, nenhuma novidade. Um método simples que
     * adiciona um contato à lista.
     */
    this.contatos.push(contato);
  }

  /**
   * Um método para listar os contatos de maneira
   * formatada e bonitinha
   */
  listar() {
    this.contatos.forEach((contato) => {
      console.log(`Nome: ${contato.nome} | Tel: ${contato.telefone}`);
    });
  }
}
