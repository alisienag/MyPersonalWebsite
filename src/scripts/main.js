function main() {

  document.getElementById("cv_link").onclick = function() {
    window.open("./AlisienaCV.pdf", "_blank");
  }

}

window.addEventListener('load', function () {
  main();
})

