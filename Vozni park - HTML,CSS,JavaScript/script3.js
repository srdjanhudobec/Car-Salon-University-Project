let forma = document.querySelector("form")
forma.style.visibility = "hidden"
function pretrazi(){
    let lista = JSON.parse(localStorage.getItem("zadatiObjekti"))
    let id = document.querySelectorAll("input")[0].value
    if(id == ""){
        forma.style.visibility = "hidden"
    }
    for(i=0;i<lista.length;i++){
        console.log(lista[i].id)
        console.log(id)
        if(lista[i].id == id)
        {
            document.querySelectorAll("input")[0].value = lista[i].id
            document.querySelectorAll("input")[1].value = lista[i].proizvođač
            document.querySelectorAll("input")[2].value = lista[i].model
            document.querySelectorAll("input")[3].value = lista[i].tip
            document.querySelectorAll("input")[4].value = lista[i].cena
            document.querySelectorAll("input")[5].value = lista[i].opis
            forma.style.visibility = "visible"
        }
    }
    let dugmeIzmeni = document.querySelectorAll("button")[1]
    let dugmePonisti = document.querySelectorAll("button")[2]
    dugmeIzmeni.onclick = function(){
                        // let noviObjekat = {
                        //     "id": document.querySelectorAll("input")[0].value, 
                    
                        //     "proizvođač": document.querySelectorAll("input")[1].value, 
                    
                        //     "model": document.querySelectorAll("input")[2].value, 
                    
                        //     "tip": document.querySelectorAll("input")[3].value, 
                    
                        //     "cena": document.querySelectorAll("input")[4].value, 
                    
                        //     "opis": document.querySelectorAll("input")[5].value 
                        // }
                    
                    for(i=0;i<lista.length;i++){
                        let dosadasnjiId = lista[i].id
                        if(lista[i].id == id){
                            // lista.splice(i,1)
                            lista[i].id = dosadasnjiId
                            lista[i].proizvođač = document.querySelectorAll("input")[1].value;
                            lista[i].model = document.querySelectorAll("input")[2].value;
                            lista[i].tip = document.querySelectorAll("input")[3].value;
                            lista[i].cena = document.querySelectorAll("input")[4].value;
                            lista[i].opis = document.querySelectorAll("input")[5].value;
                            console.log(lista)
                            localStorage.removeItem("zadatiObjekti")
                            localStorage.setItem("zadatiObjekti",JSON.stringify(lista))
                            window.location.href = "index.html"
                        }
                        
                    }
                }
        dugmePonisti.onclick = function(){
            window.location.href = "index.html"
        }


}