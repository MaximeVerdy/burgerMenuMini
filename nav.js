const bouton = document.querySelector('#bouton');
const ul = document.querySelector("ul")

bouton.addEventListener("click", () => {

     const visiblity = ul.getAttribute('visible')

     if (visiblity == "yes") {
          ul.setAttribute("visible", "no")
          bouton.innerHTML = "MENU";
     } else {
          ul.setAttribute("visible", "yes")
          bouton.innerHTML = "X";
     }
})