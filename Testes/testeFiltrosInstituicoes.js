dadosBrtutos = ("")


var cnpj_instituicoes = formataDadosCampo(CNPJ_BD);



function formataDadosCampo(campo){
    var retn = campo.value();
    retn = retn.replace(/(\r\n|\n|\r)/gm,"");
    var lista_total = retn.split(';');
    return lista_total;
}