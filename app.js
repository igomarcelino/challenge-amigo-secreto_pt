//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let nome_amigo = document.getElementById('amigo');
function adicionarAmigo(){
    amigos.push(nome_amigo.value);
    console.log(amigos);
    nome_amigo.value = "";
}


