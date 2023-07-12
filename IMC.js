const btn = document.getElementById("btn-resultado")

resultado.addEventListener ("click", function IMC(){
       let peso = Number(document.getElementById ("peso").value);

       let altura = Number(document.getElementById("altura").value)

       let result = document.getElementById("total");

        result.textContent = peso/ (altura * altura);
})