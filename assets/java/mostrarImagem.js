var option = 1;
const coracao = document.querySelector("#carrossel-1");
const veneno = document.querySelector("#carrossel-2");
const engasgo = document.querySelector("#carrossel-3");
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const back = document.querySelector("#arrow-icon-left");
const front = document.querySelector("#arrow-icon-right");
const coracaotittle = document.querySelector("#banner-tittle-text-1");
const venenotittle = document.querySelector("#banner-tittle-text-2");
const engasgotittle = document.querySelector("#banner-tittle-text-3");
option1.style.background="white";
option2.style.background="white";
option3.style.background="white";
if(option==1){
    coracao.style.display="flex";
    coracaotittle.style.display="flex";
    option1.style.background="black";
}
else if(option==2){
    coracao.style.display="none";
    coracaotittle.style.display="none";
    option1.style.background="white";
    veneno.style.display="flex";
    venenotittle.style.display="flex";
    option2.style.background="black";
}
else if(option==3){
    coracao.style.display="none";
    coracaotittle.style.display="none";
    option1.style.background="white";
    veneno.style.display="none";
    venenotittle.style.display="none";
    option2.style.background="white";
    engasgo.style.display="flex";
    engasgotittle.style.display="flex";
    option3.style.background="black";
}
