$(function() {
  $("#item").click(function() {
    $("#submenu").slideToggle(500);
  });
});
$(function() {
  $("#itemtwo").click(function() {
    $("#submenutwo").slideToggle(500);
  });
});

/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function toggleTheme() {
  const theme = document.getElementById("stylesheetlink");
  if (theme.getAttribute("href") == "index-light.css") {
    theme.setAttribute("href", "index-dark.css");
  } else {
    theme.setAttribute("href", "index-light.css");
  }
}
