const links = document.querySelectorAll("#interno");
const conteudos = document.querySelectorAll(".topico");

// Função recebe o alvo, faz um loop entre todas as divs que podem ser o alvo
// ao encontrar o alvo (pelo data-link) seleciona o top, subtrai 20 (pra dar um respiro na tela)
// e rola suavemente até lá.
const scrollTo = target => {
  conteudos.forEach(conteudo => {
    const topicoAlvo = conteudo.getAttribute("data-link");
    if (topicoAlvo === target) {
      const cordenadaY = conteudo.offsetTop - 20;
      window.scroll({
        top: cordenadaY,
        behavior: "smooth"
      });
    }
  });
};

// Cada link recebe um listener de click e passa o seu "alvo" para a função que de fato rola até esse alvo
links.forEach(link => { 
  const target = link.getAttribute("data-link");
  link.addEventListener("click", () => {
    scrollTo(target);
  });
});
