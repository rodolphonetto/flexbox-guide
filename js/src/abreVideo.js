const videos = document.querySelectorAll(".topico__video");
const btnAbreVideo = document.querySelectorAll("#btnVideo");

const aberturaVideo = videoSelecionado => {
  videos.forEach(video => {
    video.classList.add("topico__video--ativo");
  });
};

btnAbreVideo.forEach(button => {
  const videoSelecionado = button.getAttribute("data-video");
  button.addEventListener("click", () => {
    aberturaVideo(videoSelecionado);
  });
});
