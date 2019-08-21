const links = document.querySelectorAll("#interno");
const conteudos = document.querySelectorAll(".topico")


const scrollTo = (target) => {
  conteudos.forEach(conteudo => {
    const topicoAlvo = conteudo.getAttribute("data-link");
    if (topicoAlvo === target) {
      conteudo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  })
}

links.forEach(link => {
  const target = link.getAttribute("data-link");
  link.addEventListener("click", () => {
    scrollTo(target)
  })
})