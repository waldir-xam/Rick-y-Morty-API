const objetoCharacter = JSON.parse(localStorage.getItem("character"))

const imgDetail = document.querySelector("#img-detail");
const statusCharacter = document.querySelector("#status");
const nameCharacter = document.querySelector("#name");

imgDetail.src = objetoCharacter.image
nameCharacter = objetoCharacter.name
statusCharacter = objetoCharacter.status