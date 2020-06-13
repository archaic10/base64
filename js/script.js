const BaseUpload = document.getElementById("upload");
const arquivo = document.getElementById("arquivo");
$("#arquivo").attr("hidden",true);
BaseUpload.addEventListener("click",function(){   
    arquivo.click();
});