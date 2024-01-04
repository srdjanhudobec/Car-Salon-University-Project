function dodaj(){
    //svi idjevi i istovremeno jednaki
    let idjevi = []
    let markaIModel = []
    let lista = JSON.parse(localStorage.getItem("zadatiObjekti"))
    console.log(lista[1].id)
    for(i=0;i<lista.length;i++)
    {
        idjevi.push(lista[i].id)
    }
    for(i=0;i<lista.length;i++){
        markaIModel.push(lista[i].proizvođač + " " + lista[i].model)
    }
    let id = document.querySelectorAll("input")[0].value;
    let model = document.querySelectorAll("input")[2].value;
    let proizvođač = document.querySelectorAll("input")[1].value;
    let noviObjekat = {
        "id": id, 

        "proizvođač": proizvođač, 

        "model": model, 

        "tip": document.querySelectorAll("input")[3].value, 

        "cena": document.querySelectorAll("input")[4].value, 

        "opis": document.querySelectorAll("input")[5].value 
    }
    if((idjevi.includes(id)) == false){
        if(markaIModel.includes(model) == true && markaIModel.includes(proizvođač)== true)
        {}
        else{
            localStorage.removeItem("zadatiObjekti")
            lista.push(noviObjekat)
            localStorage.setItem("zadatiObjekti",JSON.stringify(lista))
        }
    }
    window.location.href = "index.html"
}