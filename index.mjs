/**
 *
 * NOTA: Para que esse código funcionasse no contexto
 * do NodeJS, precisei alterar a extensão dos arquivos
 * para .mjs
 *
 */
import { Agenda } from "./Agenda.mjs";
import { Contato } from "./Contato.mjs";
/**
 * Imaginem que cada instância de Contato seja criada
 * através de um formulário de cadastro...
 */
const contato1 = new Contato("Mika", "47 99999-9999");
const contato2 = new Contato("Juca", "47 99999-9998");
const contato3 = new Contato("José", "47 99999-9997");
const contato4 = new Contato("João", "47 99999-9996");

const minhaAgenda = new Agenda();
minhaAgenda.adicionarContato(contato1);
minhaAgenda.adicionarContato(contato2);
minhaAgenda.adicionarContato(contato3);
minhaAgenda.adicionarContato(contato4);

/**
 * Executem o código e vejam o que acontece! :D
 */
minhaAgenda.listar();

// =================!!BONUS!!====================
/**
 * Imaginem que, a cada vez que um novo contato é criado
 * e o botão do formulário é acionado, uma instância de
 * Contato é criada e o método adicionarContato é chamado.
 */

// Remova o comentário e execute o código abaixo!

// const outraAgenda = new Agenda();
// outraAgenda.adicionarContato(new Contato("Estevão", "47 99999-9995"));
// outraAgenda.adicionarContato(new Contato("Fernanda", "47 99999-9994"));
// outraAgenda.adicionarContato(new Contato("Tatiane", "47 99999-9993"));
// outraAgenda.adicionarContato(new Contato("Grazi", "47 99999-9992"));
// outraAgenda.listar();
