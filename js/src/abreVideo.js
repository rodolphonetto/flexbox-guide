const containerVideo = document.querySelectorAll(".topico__video");
const btnAbreVideo = document.querySelectorAll("#btnVideo");

const aberturaVideo = buttonData => {
  containerVideo.forEach(video => {
    const playerData = video.getAttribute("data-video");

    if (playerData === buttonData) {

      if (video.classList.contains("topico__video--ativo")) {
        video.classList.remove("topico__video--ativo");
        video.children[0].src = ""
      } else {
        video.children[0].src = playerData
        video.classList.add("topico__video--ativo");
      }
    }
  });
};

btnAbreVideo.forEach(button => {
  const buttonData = button.getAttribute("data-video");
  button.addEventListener("click", () => {
    aberturaVideo(buttonData);
  });
});
