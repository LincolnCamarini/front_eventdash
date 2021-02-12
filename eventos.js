function validaUser() {
    var userStr = localStorage.getItem("userDASH");
    if (!userStr) {
        window.location = "index.html";
    }
}

function gerarRelatorio() {
    var txtIni = document.getElementById("txtDataInicio").value;
    var txtFim = document.getElementById("txtDataFim").value;

    var d1= new Date;
    d1 =txtIni;

    var url = `http://localhost:8088/buscarpordata?inicio=${txtIni}&fim=${txtFim}`;

    if(txtFim >= txtIni){
        fetch(url).then(resposta => resposta.json()).then(lista => preencheRelatorio(lista));
    }
    else {
        console.log("A data fim deve ser maior ou igual a data inicial");
        alert("Atenção: a data fim não pode ser menor que a data inicial !");
    }
    

}

function preencheRelatorio(lista) {

    var strRelatorio = '';
    for (i = 0; i < lista.length; i++) {
        var evento = lista[i];
        var linha = "";
        if(i%2 ==0 ){
            linha = "linhaPar";

        }else
            linha = "linhaImpar";

        strRelatorio = strRelatorio + `<div class="row linhaRelatorio ${linha}" style="margin-bottom:10px;">
                                          <div class="col-1 text-wrap">
                                             ${evento.numSeq}
                                          </div>
                                          <div class="col-1 text-wrap">
                                             ${evento.dataEvento}
                                          </div>
                                          <div class="col-2 text-wrap">
                                             ${evento.alarme.nome}
                                          </div>
                                          <div class="col-4 text-wrap">
                                             ${evento.alarme.descricao}
                                          </div>
                                          <div class="col-2 text-wrap">
                                             ${evento.equipamento.hostname}
                                          </div>
                                          <div class="col-2 text-wrap">
                                             ${evento.equipamento.ipAddr}
                                          </div>
                                      </div>`;
    }

    document.getElementById("relatorio").innerHTML = strRelatorio;
}

function imprimir(){
    document.getElementById("botao").style = "visibility:hidden";
    document.getElementById("botaoLogout").style = "visibility:hidden";
    document.getElementById("botaoVoltar").style = "visibility:hidden";
    document.getElementById("botaoGerarRelatorio").style = "visibility:hidden";

    window.print();
    document.getElementById("botao").style = "visibility:visible";
    document.getElementById("botaoLogout").style = "visibility:visible";
    document.getElementById("botaoVoltar").style = "visibility:visible";
    document.getElementById("botaoGerarRelatorio").style = "visibility:visible";

    
   
    

   
}


function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}