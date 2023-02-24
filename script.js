function encriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();

  var textoCifrado = texto.replaceAll(/e/igm,"enter");
  var textoCifrado = textoCifrado.replaceAll(/o/igm,"ober");
  var textoCifrado = textoCifrado.replaceAll(/i/igm,"imes");
  var textoCifrado = textoCifrado.replaceAll(/a/igm,"ai");
  var textoCifrado = textoCifrado.replaceAll(/u/igm,"ufat");

  document.getElementById("ocultar").style.display = "none";
  document.getElementById("outputTexto").innerHTML = textoCifrado;
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";
  document.getElementById("outputTexto").style.height = "80%";
  document.getElementById("outputTexto").style.fontSize = "22px";
}

function desencriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();

  var textoCifrado = texto.replaceAll(/enter/igm,"e");
  var textoCifrado = textoCifrado.replaceAll(/ober/igm,"o");
  var textoCifrado = textoCifrado.replaceAll(/imes/igm,"i");
  var textoCifrado = textoCifrado.replaceAll(/ai/igm,"a");
  var textoCifrado = textoCifrado.replaceAll(/ufat/igm,"u");

  document.getElementById("ocultar").style.display = "none";
  document.getElementById("outputTexto").innerHTML = textoCifrado;
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";
  document.getElementById("outputTexto").style.height = "80%";
  document.getElementById("outputTexto").style.fontSize = "22px";
}

function copiar() {
  var contenido = document.querySelector("#outputTexto");
  contenido.select(); document.execCommand("copy");
}