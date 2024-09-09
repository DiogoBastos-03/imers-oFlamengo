function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim()

    if(campoPesquisa == ""){
        section.innerHTML = "Nada foi encontrado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "" ; 

    for(let dado of dados){
        let nome = dado.nome.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">${dado.titulos}</p>
                    <p class="descriçao-meta">Deixou o flamengo no ano de : ${dado.anoSaida}</p>
            </div>
    ` 
        }
    }

    if (!resultados){
        resultados = "<p>Nada foi encontradi</p>"
    }
    

    section.innerHTML = resultados

};