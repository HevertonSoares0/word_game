function insertPlacar() {
    var table = $(".placar").find("tbody")
    var user = "Heverton"
    var numPalavras = $(".contador-palav").text()
    
    var linha = novaLinha(user, numPalavras)

    linha.find(".botao-remover").click(removeLinha)
    table.append(linha)// adiciona dps
    // table.prepend(linha)//Adiciona antes
}

function novaLinha(user, numPalavras) {
    var linha = $("<tr>");
    var colunaUser = $("<td>").text(user)
    var colunaPalavras = $("<td>").text(numPalavras)
    var colunaRemove = $("<td>")

    var link = $("<a>").addClass("botao-remover").attr("href", "#")
    var icon = $("<i>").addClass("material-icons").text("delete ")

    link.append(icon)
    colunaRemove.append(link)

    linha.append(colunaUser)
    linha.append(colunaPalavras)
    linha.append(colunaRemove)

    return linha
}
function removeLinha(){
$(".botao-remover").click(function (event) {
    event.preventDefault()
    $(this).parent().parent().remove()
})
}