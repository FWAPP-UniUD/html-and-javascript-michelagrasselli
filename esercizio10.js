const CheckBox = document.getElementById("check");
const ParteDisabilitata = document.getElementById("pd");

CheckBox.addEventListener("click", Abilita)

function Abilita(){
    if(!CheckBox.checked) {ParteDisabilitata.setAttribute("disabled","disabled");}
    else {ParteDisabilitata.removeAttribute("disabled");}
}