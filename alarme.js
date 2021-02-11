function validaUser() {
    var userStr = localStorage.getItem("userDASH");
    if (!userStr) {
        window.location = "index.html";
    }
    var url = `http://localhost:8088/alarmes`;
    
    fetch(url).then(resposta => resposta.json()).then(lista => preencheRelatorio(lista));
}


function preencheRelatorio(lista) {

    var strRelatorio = '';
    for (i = 0; i < lista.length; i++) {
        var alarme = lista[i];

        strRelatorio = strRelatorio + `<div class="row">
                                          <div class="col-1 text-wrap">
                                             ${alarme.idAlarme}
                                          </div>
                                          <div class="col-4 text-wrap">
                                             ${alarme.nome}
                                          </div>
                                          <div class="col-7 text-wrap">
                                             ${alarme.descricao}
                                          </div>
                                        </div>`;
    }

    document.getElementById("relatorio").innerHTML = strRelatorio;
}

function logout() {
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}
