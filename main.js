document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    padding: "2rem",
    focus: "center",
  });

  splide.mount();
});

history.replaceState(null, null, "http://127.0.0.1:9001/SplideJS");
