function hidePopix(e) {
  e.preventDefault();
  popx_modal.style.display = "none";
  popx_overlay.style.display = "none";
}

function showPopix(e) {
  e.preventDefault();
  popx_image.setAttribute("src", this.getAttribute("src").replace("thumbs", "fulls"));
  popx_label.innerText = this.parentNode.nextSibling.nextSibling.innerText;
  popx_overlay.style.display = "block";
  popx_modal.style.display = "inline";
}

// Teste s'il est possible d'agrandir les photos
var aide = document.getElementsByClassName("aide")[0];
var disp = window.getComputedStyle(aide, null).getPropertyValue("display");
if (disp === "block") {
  // Ajout de containers vide pour la lightbox
  document.body.innerHTML += "<div id='popx_overlay'></div><div id='popx_modal'><img src='' alt='' /><p></p></div>";

  // Retrouve une référence sur ces nouveaux containers
  var popx_overlay = document.getElementById("popx_overlay");
  var popx_modal = document.getElementById("popx_modal");
  var popx_image = popx_modal.getElementsByTagName("img")[0];
  var popx_label = popx_modal.getElementsByTagName("p")[0];

  // Ajout d'évènements pour cacher la lightbox
  popx_overlay.onclick = hidePopix;
  popx_modal.onclick = hidePopix;

  // Ajout d'une lightbox pour agrandir les photos
  var popx = document.getElementById("photos").getElementsByTagName("img");
  for (var i = 0; i < popx.length; i++) { popx[i].onclick = showPopix; }
  for (var i = 0; i < popx.length; i++) { console.log(popx[i]); }
}
