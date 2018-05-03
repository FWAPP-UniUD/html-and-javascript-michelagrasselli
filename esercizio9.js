const placeholder = document.getElementById("placeholder");	
function NuovoParagrafo() { 
  const nuovo_paragrafo = document.createElement('p');
  const contenuto_paragrafo = document.createTextNode("Lorem ipsum...");
  nuovo_paragrafo.appendChild(contenuto_paragrafo);
  document.getElementById("placeholder").appendChild(nuovo_paragrafo);	
  if(placeholder) {
    placeholder.appendChild(nuovo_paragrafo);
  }
  placeholder.style.visibility = "visible";
}
document.querySelector("button")[0].addEventListener("click", NuovoParagrafo);

function NascondiParagrafo(){
  if(placeholder.style.visibility === 'visible'){
    placeholder.style.visibility = "hidden"
  }
}
document.querySelector("button")[1].addEventListener("click", NascondiParagrafo);