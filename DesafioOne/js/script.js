var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#caixa");



function criptografar(){

  var titulo = textInput.value;

  var resultCriptografar = titulo.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('caixa').innerHTML = '<textarea readonly id="input-texto">' + resultCriptografar + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var titulo = textInput.value;

    var resultDescripto = titulo.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('caixa').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function copiar() {
  let textoCop = document.getElementById('input-texto');
  textoCop.select()
  document.execCommand('copy')
  alert('Conteúdo copiado com sucesso')
}