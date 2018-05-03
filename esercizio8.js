const immagine = document.getElementById("immagine")
immagine.addEventListener("mouseover", FunctionMouseover);
immagine.addEventListener("mouseout", FunctionMouseout);
immagine.addEventListener("click", FunctionClick);
immagine.addEventListener("contextmenu", FunctionContextmenu);

function FunctionMouseover() {
    immagine.src = "https://findicons.com/files/icons/963/very_emotional_emoticons/128/128_15.png";
}

function FunctionMouseout() {
    immagine.src = "https://findicons.com/files/icons/963/very_emotional_emoticons/128/128_22.png";
}

function FunctionClick() {
    immagine.src = "https://findicons.com/files/icons/1035/human_o2/128/face_angel.png";
}

function FunctionContextmenu() {
    immagine.src = "https://findicons.com/files/icons/963/very_emotional_emoticons/128/128_16.png";
}