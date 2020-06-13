var posicoes = [];
var valores =[];                        
var duplica = 1;
    
var aqui;
$("input[type='file']").change(function(){
var conteudo = "";
var arquivos = $("input[type='file']")[0].files;

$.each(arquivos,function(chave,valor){
    if(aqui == null){
        aqui = 0
    }
    var new_id = (Math.floor(Math.random() * 100) )+""+(Math.floor(Math.random() * 100) )+""+(Math.floor(Math.random() * 100) );
    conteudo = "<input type='hidden' id='campo"+new_id+"' name='campo"+new_id+"' value=''>";
    document.getElementById("convert").innerHTML+=conteudo;
    /*
    document.getElementById("popular").innerHTML+=
        "<tr id='linha"+new_id+"'>"+
            "<td style='display:none;'><input type='text' style='display:none;' id='id_input"+aqui+"' name='id_input"+aqui+"' value='"+new_id+"'> </td>"+
                "<td> <img id='output"+new_id+"' src='' width='200' height='150'>  </td>"+
                "<td><input class='form-control' type='text' id='descricao"+new_id+"' name='descricao"+new_id+"' value=''> </td>"+
                "<td><button type='button' class='btn red' id='deletar"+new_id+"' onclick='deletar("+new_id+")' >Remover</button></td>"+
            "</tr>";*/
    /*document.getElementById('output'+new_id).src = window.URL.createObjectURL($("input[type='file']")[0].files[chave]);*/
    aqui = aqui + 1;
});
$.each($("input[type='hidden']"),function(i,v){
    
        if(v.id.length != 0){

        
        if(posicoes.length ==0){
            
            posicoes[i]="#"+v.id;
        }else{
        
         duplica =(((i+1)-posicoes.length));
        
            if(!duplica == 0){                                  
                posicoes[i]= "#"+v.id;
            }
                
            
        }
    }
    
    });

    if(!duplica == 0){
        anexar($("input[type='file']"));
    }

$("input[type='file']")[0].files;
});
$("button[name='cancelamento']").click(function(){


});
    // document.getElementsByName();
function anexar(id){

beforeSubmit(id);
};
//function to check file size before uploading.
function beforeSubmit(id) {

//check whether browser fully supports all File API
if (window.File && window.FileReader && window.FileList && window.Blob) {
var n_arquivos = $("input[type='file']")[0].files;

$.each(n_arquivos,function(chave,valor){

var fsize = id[0].files[chave].size; //get file size
var ftype = id[0].files[chave].type; // get file type

//allow only valid image file types
switch (ftype) {
case 'application/pdf':
break;
case'image/jpeg':
break;
case'image/png':
break;
case'image/gif':
break;        
default:      
return alert('Arquivo não suportado!');
}

//Allowed file size is less than 1 MB (1048576)
if (fsize > 9048576) {

return false
}


encodeImageFileAsURL(ftype,id, chave,n_arquivos);
//$(".resp_validator").html('<div class="alert alert-success alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>  <strong>Sucesso: </strong> Arquivo anexado </div>');
alert("Arquivo anexado com sucesso!");
window.setTimeout(function() {
//$(".alert").addClass('hidden'); 
}, 4000); 
//alert('arquivo anexado com sucesso');

});

}
else {
//Output error to older unsupported browsers that doesn't support HTML5 File API
return false;
}
}
function encodeImageFileAsURL(ftype,id,chave,n_arquivos){

var fileUpload = id.get(0);
var file = fileUpload.files;

if (file.length > 0)
{
var fileToLoad = file[chave];

var fileReader = new FileReader();

fileReader.onload = function(fileLoadedEvent) {
var srcData = fileLoadedEvent.target.result; // <--- data: base64

upload(srcData,ftype,id,chave,n_arquivos);
};
fileReader.readAsDataURL(fileToLoad);
}
}

function upload(base64Image,ftype,id,chave,n_arquivos){

var resultado = (chave+1) -posicoes.length;

if (resultado < 0){


if(n_arquivos.length == 1){

var novo_indice = chave+ (resultado *-1);          


$(posicoes[novo_indice]).val(base64Image);

valores.push(base64Image);
for(var r = novo_indice; r < posicoes.length; r++ ){     

$(posicoes[r]).val(valores[r-1]);
}
}else{

var novo_indice = chave +1;
$(posicoes[chave+1]).val(base64Image);
valores.push(base64Image);
for(var r = novo_indice; r < posicoes.length; r++ ){   
$(posicoes[r]).val(valores[r-1]);
}

}
// }else{
//     var novo_indice = chave+ (resultado *-1);     
//     $(posicoes[chave+1]).val(base64Image);
//     valores.push(base64Image);
// }

}else{

$(posicoes[chave]).val(base64Image);
valores.push(base64Image);


}


// AJAX Code To Submit Form.

}

function bytesToSize(bytes) {
var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes == 0) return '0 Bytes';
var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
/*
function closeFile(tag){

$(tag).parent().remove();

}*/
/*
function remover(){
var id = $("input[type='hidden']");
posicoes = [];
valores = [];
$.each(id,function(id, valor){
$("#"+valor.id).remove();

});

$("table tbody").children().remove();
}*/