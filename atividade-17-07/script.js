function calcularRegra() {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    resultado = (b*c)/a;
    document.getElementById("resultado").innerHTML = "<h1>X = "+resultado+"</h1>"
}