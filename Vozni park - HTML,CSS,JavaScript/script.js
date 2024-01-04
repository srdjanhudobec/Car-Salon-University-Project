if(localStorage.length == 0){
    let objekat1 = { 

        "id": "1", 

        "proizvođač": "Volkwagen", 

        "model": "Polo", 

        "tip": "Gradski", 

        "cena": 4500, 

        "opis": "Povoljan" 

    }
    let objekat2 = 
        { 

            "id": "2", 
    
            "proizvođač": "Ford", 
    
            "model": "Fiesta", 
    
            "tip": "SUV", 
    
            "cena": 12000, 
    
            "opis": "Novo u ponudi" 
    
        }
    let objekat3 =  { 

        "id": "3", 

        "proizvođač": "Ford", 

        "model": "Focus", 

        "tip": "Gradski", 

        "cena": 8000, 

        "opis": "Klasik" 

    }
    let nizObjekata = [objekat1,objekat2,objekat3]
    localStorage.setItem("zadatiObjekti",JSON.stringify(nizObjekata))
}
else{

}
let lista = JSON.parse(localStorage.getItem("zadatiObjekti"))
let tabela = document.querySelector("table")
function ucitaj(){
    for(i=0;i<lista.length;i++){
        tabela.innerHTML += "<tr>" + "<td>" + lista[i].id + "</td>" + "<td>" + lista[i].proizvođač + "</td>" + "<td>" + lista[i].model + "</td>" + "<td>" + lista[i].tip + "</td>" + "<td>" + lista[i].cena + "</td>" + "<td>" + lista[i].opis + "</td>" + "</tr>"
    }
}
ucitaj()
function filtriraj(){
    tabela.innerHTML = ""
    for(i=0;i<lista.length;i++){
        if((lista[i].proizvođač.includes(document.querySelectorAll("input")[0].value) || document.querySelectorAll("input")[0].value == "")&&(lista[i].model.includes(document.querySelectorAll("input")[1].value) || document.querySelectorAll("input")[1].value == "")&&(lista[i].tip.includes(document.querySelectorAll("input")[2].value) || document.querySelectorAll("input")[2].value == "")&&((lista[i].cena > parseInt(document.querySelectorAll("input")[3].value)) || (document.querySelectorAll("input")[3].value == ""))&&((lista[i].cena > parseInt(document.querySelectorAll("input")[3].value)) || (document.querySelectorAll("input")[4].value == ""))){
            tabela.innerHTML += "<tr>" + "<td>" + lista[i].id + "</td>" + "<td>" + lista[i].proizvođač + "</td>" + "<td>" + lista[i].model + "</td>" + "<td>" + lista[i].tip + "</td>" + "<td>" + lista[i].cena + "</td>" + "<td>" + lista[i].opis + "</td>" + "</tr>"
        }
    }
}