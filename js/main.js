
function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //   document.getElementById("mouseMove").innerHTML = "Obrigada por passar o mouse";
 //   alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
 //   document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/* Function | window.open | window.location.href
function redirecionar(){
    window.open("https://github.com/maite-marques");
    window.location.href = "https://github.com/maite-marques";
}
*/

/* Function botão | inner.HTML | document.getElementById
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar! Clicando aqui você acessa o meu GitHub!</b>";
//    alert("Obrigada por clicar")
}
*/

/* Function | 
function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validarIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade? ");
console.log(validarIdade(idade));

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"))

*/

/* Date | Month | Date | Hours | Minutes 
var d = new Date();
alert(d.getMonth());
alert(d.getMinutes());
alert(d.getDate());
alert(d.getHours());
*/

/* for 
var count;
for(count=0; count<=5; count++){
    alert(count); 
};
*/

/* while | ++
var count = 0;
while (count < 5){
//    console.log(count);
    alert(count);
    count++;
};
*/

/* if | else
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/* vários dicionários no mesmo
var frutas= [{nome: "maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}];
console.log(frutas);
*/

/* dicionário | nome.elemento
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

/* array | pop | push | reverse | toString | join | lenght
var lista = ["maça", "pera", "laranja"];
lista.push("uva");  push coloca
lista.pop(); pop remove
lista.lenght quantidae total da lista 
lista.reverse() inverte do fim para o começo
lista.toString() converte array em string
lista.join(" - ")  converte em string separado por (" ")
console.log(lista);
alert(lista[1]);
*/

/* console.log | alert | var
//var nome = "Maite Marques"; 
var idade = 28;
//var frase = "Japão é o melhor time do mundo"

//alert(nome + " tem " + idade + " anos");
//console.log(nome);
//console.log(idade + nome);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
*/
