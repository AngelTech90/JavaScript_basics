const S = selector => document.getElementById(selector);
        
//botones para escribir numeros en pantalla
    let btnUno = S("uno").onclick= function(){S("operaciones").value += "1"};
    let btnDos = S("dos").onclick= function(){S("operaciones").value += "2"};
    let btnTres = S("tres").onclick= function(){S("operaciones").value += "3"};
    let btnCuatro = S("cuatro").onclick= function(){S("operaciones").value += "4"};
    let btnCinco = S("cinco").onclick= function(){S("operaciones").value += "5"};
    let btnSeis = S("seis").onclick= function(){S("operaciones").value += "6"};
    let btnSiete = S("siete").onclick = function(){S("operaciones").value += "7"};
    let btnOcho = S("ocho").onclick = function(){S("operaciones").value += "8"};
    let btnNueve = S("nueve").onclick = function(){S("operaciones").value += "9"};
    
//botones especiales
let btnBorrar = S("borrar").onclick = function(){S("operaciones").value = ""};
let btnSuma = S("suma").onclick = function(){S("operaciones").value += "+"};
let btnResta = S("resta").onclick = function(){S("operaciones").value += "-"};
let btnDividir = S("dividir").onclick = function(){S("operaciones").value += "/"};
let btnMultiplicar = S("multiplica").onclick =function(){S("operaciones").value += "*"};
let btnPunto = S("punto").onclick = function(){S("operaciones").value += "."};
let btnOperar = S("operacion").addEventListener("click",calcular);

//aplicamos eval para ejecutar la operacion tomando todos los elementos dentro de nuestro input
function calcular(){

    var resultado = eval(S("operaciones").value)

    S("operaciones").value = resultado;};

