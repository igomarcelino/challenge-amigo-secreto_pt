//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let amigosSorteados = [];
let nome_amigo = document.getElementById('amigo');
let amigos_para_sorteio = document.getElementById('listaAmigos');
let amigos_sorteados = document.getElementById('resultado');
let btn_sortear = document.getElementById('btn_sortear');
let indice_sorteio = 0;

verificarListaParaSorteio();

function adicionarAmigo(){
    
    if( nome_amigo.value != ""){
        amigos_para_sorteio.innerHTML += `<li>${nome_amigo.value}</li>`;
        amigos.push(nome_amigo.value);
    }else{
        alert('Insira um nome');
    }
    nome_amigo.value = "";
    btn_sortear.removeAttribute("disabled");
    console.log(amigos);
}

function sortearAmigo(){
    if(amigos.length > 0){
        amigos.sort((a,b) => Math.random() - 0.5);
    console.log(amigos);
    console.log(amigos);
    amigos_para_sorteio.innerHTML = "";
    for(var i = 0; i< amigos.length -1 ; i++){
        amigos_para_sorteio.innerHTML += `<li>${amigos[i]}</li>`;
    }
    amigos_sorteados.innerHTML = `<li>${amigos[amigos.length -1 ]}</li>`;
    amigos.pop();
    console.log(amigos.length);
    }else{
        alert("Nao possui nomes para sorteio");
    }
    

}

function verificarListaParaSorteio(){
    if(amigos.length == 0){
        btn_sortear.setAttribute("disabled",true);
    }
}


