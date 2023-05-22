function escrever() {
    var caixa = document.getElementById('caixa');
    document.getElementById('caixa-after').style.opacity="1";
    document.getElementById('text').innerHTML = '<textarea id="text_encr">' + texto_encriptografado + '</textarea>';
    document.getElementById('text_encr').disabled = true;
}

var texto;
var texto_encriptografado;

function criptografar() {
    texto = document.getElementById('campo-texto');
    var substituir = true;
    if (texto.value == ""){
        texto.focus();
        mensagem("Insira um texto.", 3000);
    } 
    else{
        if (texto.value != texto.value.toLowerCase()){
            substituir = false;
            mensagem("Apenas letras minúsculas.", 3000);
        }
        if (verificarAcentos(texto.value)) {
            substituir = false;
            mensagem("Apenas letras sem acentos.", 3000);
        }
        if (verificarNumeros(texto.value)) {
            substituir = false;
            mensagem("Não use números.", 3000);
        }
        if (substituir) {
            texto_encriptografado = texto.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");  
            escrever();
        }
    }
}
function descriptografar() {
    texto = document.getElementById('campo-texto');
    var substituir = true;
    if (texto.value == ""){
        texto.focus();
        mensagem("Insira um texto.", 3000);
    } 
    else{
        if (texto.value != texto.value.toLowerCase()){
            substituir = false;
            mensagem("Apenas letras minúsculas.", 3000);
        }
        if (verificarAcentos(texto.value)) {
            substituir = false;
            mensagem("Apenas letras sem acentos.", 3000);
        }
        if (verificarNumeros(texto.value)) {
            substituir = false;
            mensagem("Não use números.", 3000);
        }
        if (substituir) {
            texto_encriptografado = texto.value.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");  
            escrever();
        }
    }
} 

function copiar() {
    var texto_copiar = document.getElementById('text_encr');
    texto_copiar.disabled = false;
    texto_copiar.select();
    document.execCommand('copy');
    texto.value = "";
    texto_copiar.value = "";
    texto_copiar.disabled = true;
    document.getElementById('caixa-after').style.opacity="0";

    /* MENSAGEM TEMPORÁRIA NA TELA */

    mensagem("Texto copiado com sucesso!", 3000);
}

function mensagem (text, time) {
        /* MENSAGEM TEMPORÁRIA NA TELA */

        var mensagem = document.createElement('div');
        mensagem.innerHTML = text;
        document.body.appendChild(mensagem);
        mensagem.style.backgroundColor='#2E2E2E';
        mensagem.style.color='white';
        mensagem.style.width='328px';
        mensagem.style.height='67px';
        mensagem.style.fontSize='24px';
        mensagem.style.textAlign='center';
        mensagem.style.lineHeight='67px';
    
        mensagem.style.position='fixed';
        mensagem.style.bottom='40px';
        mensagem.style.left='5%';
    
        setTimeout(function (){
            mensagem.parentNode.removeChild(mensagem);
        }, time);
}

function verificarAcentos(texto) {
    var acentos = /[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙãõÃÕâêîôûÂÊÎÔÛäëïöüÄËÏÖÜ]/;
    if (acentos.test(texto)) {
        return true;
    } else {
        return false;
    }
}

function verificarNumeros(texto) {
    var numeros = /[0123456789]/;
    if (numeros.test(texto)) {
        return true;
    } else {
        return false;
    }
}

  
  
  
  
  
  

