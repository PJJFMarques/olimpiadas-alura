/**
 * Função responsável por realizar uma pesquisa e exibir os resultados.
 *
 * Itera sobre um conjunto de dados e para cada dado, cria um elemento HTML
 * representando um resultado da pesquisa.
 *
 * @function pesquisar
 */
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string para armazenar os resultados em HTML
    let resultados = "";
  
    // Itera sobre cada dado e cria o HTML para o resultado
    for (let dado of dados) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Para mais informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
  }
  