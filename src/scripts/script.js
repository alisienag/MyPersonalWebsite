function openNewTab(url) {
  window.open(url, '_blank').focus();
}

function main() {
  document.getElementById("github-logo").onclick = function() {
    openNewTab("https://github.com/alisienag");
  }
  document.getElementById("linkedin-logo").onclick = function() {
    openNewTab("https://www.linkedin.com/in/alisiena-ghazal-4b0397289/");
  }
  document.getElementById("home_link").onclick = function() {
    window.scroll(0, 0);
  }
  document.getElementById("about_link").onclick = function() {
    document.getElementById("subtitle").scrollIntoView();
  }
}

window.addEventListener('load', function() {
  main()
})
