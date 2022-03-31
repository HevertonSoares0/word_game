var tempoInicial = 10
var campo = $(".campo-digitacao")

$(document).ready(function () {
    atualizaFrase()
    initContador()
    iniciaTempo()
    $("#reset").click(reset)
})

function atualizaFrase() {
    var frase = $(".frase").text() // MODO DE UTILIZAR O DOM NO JQUERY
    var numeroDePalavras = frase.split(/\S+/).length // SPLIT PARA PEGAR O TAMANHO DAS PALAVRAS QUE ESTÃO SEPARADAS POR ESPAÇOS

    var tamanho_frase = $("#tamanho-frase").text(numeroDePalavras)
}

function initContador() {
    campo.on("input", function () {// MANEIRA DE DECLARAR A FUNÇÃO ON CLICL ON INPUT ON...
        var conteudo = campo.val() // MANEIRA DE DIZER O VALUE NO JQUERY
        var qtdPalavras = conteudo.split(/\S+/).length - 1

        $('.contador-palav').text(qtdPalavras)

        var caracteres = conteudo.length


        $('.contador-carac').text(caracteres)


    })
}

function iniciaTempo() {
    var time = $("#time").text()

    campo.one("focus", function () { //Funão one funciona como a função on, porém, apenas uma vez será executada, já o on, fica voltando sempre
        var cronometroId = setInterval(function () {
            time--

            $("#time").text(time)

            if (time <= 0) {
                clearInterval(cronometroId)// Para parar a contagem precisamos utilizar a função clear interval com o id da função setinterval como parametro, toda função setInterval já é o própio id
                finalizaJogo()
            }
        }, 1000);
    })
}

function finalizaJogo() {
    campo.attr("disabled", true) // FUNÇÃO PARA MODIFICAR ATRIBUTOS = .attr
    alert("Game Over")
    campo.addClass("campo-finalizado")
    insertPlacar();

}

var frase = $(".frase").text()

campo.on("input", function () {
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);//SUBSTR pega o pedaço digitado

    if (digitado == comparavel) {
        campo.addClass("campo-correto")
        campo.removeClass("campo-incorreto")
    } else {
        campo.addClass("campo-incorreto")
        campo.removeClass("campo-correto")
    }


})



function reset() {
    var button = $("#reset")

    // button.click((function () { //Outra forma de declarar a função ON CLICK

    campo.attr("disabled", false)
    campo.val("")
    $('.contador-carac').text("0")
    $('.contador-palav').text("0")
    $("#time").text(tempoInicial)
    campo.removeClass("campo-finalizado")
    campo.removeClass("campo-correto")
    campo.removeClass("campo-incorreto")
    iniciaTempo()



}

