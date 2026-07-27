const perguntas=[

{
pergunta:"Quantos jogadores um time possui em campo?",
respostas:["9","10","11","12"],
correta:2
},

{
pergunta:"Qual seleção possui mais Copas do Mundo?",
respostas:["Alemanha","Brasil","Argentina","Itália"],
correta:1
},

{
pergunta:"Quem é conhecido como Rei do Futebol?",
respostas:["Messi","Pelé","Cristiano Ronaldo","Maradona"],
correta:1
},

{
pergunta:"Qual país sediou a Copa de 2014?",
respostas:["Brasil","Rússia","França","Alemanha"],
correta:0
},

{
pergunta:"Quanto tempo dura uma partida?",
respostas:["80 minutos","90 minutos","100 minutos","120 minutos"],
correta:1
},

{
pergunta:"Qual clube revelou Neymar?",
respostas:["Flamengo","Palmeiras","Santos","São Paulo"],
correta:2
},

{
pergunta:"Quem venceu a Copa de 2022?",
respostas:["França","Argentina","Brasil","Croácia"],
correta:1
},

{
pergunta:"Qual jogador é conhecido como CR7?",
respostas:["Messi","Mbappé","Cristiano Ronaldo","Haaland"],
correta:2
},

{
pergunta:"Quantos tempos possui uma partida?",
respostas:["1","2","3","4"],
correta:1
},

{
pergunta:"Qual é o maior estádio do Brasil?",
respostas:["Morumbi","Mineirão","Maracanã","Beira-Rio"],
correta:2
}

];

let atual=0;
let pontos=0;

function iniciarQuiz(){
document.getElementById("inicio").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");
mostrarPergunta();
}

function mostrarPergunta(){

let p=perguntas[atual];

document.getElementById("pergunta").innerHTML=(atual+1)+". "+p.pergunta;

let respostas=document.getElementById("respostas");

respostas.innerHTML="";

p.respostas.forEach((r,i)=>{

let botao=document.createElement("button");

botao.innerHTML=r;

botao.onclick=()=>responder(i);

respostas.appendChild(botao);

});

document.getElementById("progresso").style.width=((atual)/perguntas.length*100)+"%";

}

function responder(i){

if(i===perguntas[atual].correta){
pontos++;
}

atual++;

if(atual<perguntas.length){

mostrarPergunta();

}else{

mostrarResultado();

}

}

function mostrarResultado(){

document.getElementById("quiz").classList.add("hidden");

document.getElementById("resultado").classList.remove("hidden");

document.querySelector("#resultado h2").innerHTML=

`Você acertou <b>${pontos}</b> de <b>${perguntas.length}</b> perguntas!`;

}