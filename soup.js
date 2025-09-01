function dropMenu(x) {
  x.classList.toggle("change");
  document.getElementById("menuDropdown").classList.toggle("show");

}
// Prevent window.onclick from closing the dropdown when clicking the button
document.querySelector('.menuDrop').addEventListener('click', function(event) {
  event.stopPropagation();
});
window.onclick = function(event) {
    if (!event.target.matches('.menuDrop')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }