window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", function () {
      sounds[index].play();
    });
  });
});
