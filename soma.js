const resultado = document.getElementById("resultado")

resultado.addEventListener("click", function soma(){
    const num1 = parseInt(document.getElementById
        ("numero1").value);
    const num2 = parseInt(document.getElementById
     ("numero2").value);
     
    let total = document.getElementById("total");

    total.textContent = num1 + num2;
})