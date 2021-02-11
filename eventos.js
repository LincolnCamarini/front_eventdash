function validaUser() {
    var userStr = localStorage.getItem("userDASH");
    if (!userStr) {
        window.location = "index.html";
    }
}

function gerarRelatorio() {
    var txtIni = document.getElementById("txtDataInicio").value;
    var txtFim = document.getElementById("txtDataFim").value;

    var url = `http://localhost:8088/buscarpordata?inicio=${txtIni}&fim=${txtFim}`;
    fetch(url).then(resposta => resposta.json()).then(lista => preencheRelatorio(lista));

}

function preencheRelatorio(lista) {

    var strRelatorio = '';
    for (i = 0; i < lista.length; i++) {
        var evento = lista[i];

        strRelatorio = strRelatorio + `<div class="row">
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-1 col-xl-1">
                                             ${evento.numSeq}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.dataEvento}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.alarme.nome}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                             ${evento.alarme.descricao}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.equipamento.hostname}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.equipamento.ipAddr}
                                          </div>
                                      </div>`;
    }

    document.getElementById("relatorio").innerHTML = strRelatorio;
}

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}