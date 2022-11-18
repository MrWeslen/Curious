alert('Esse é o top 7 Filmes que assisti e gostei. (tem outros mas esses são os principais)')

var movieDB = [
    {title: "Alita",
     rating: 8.4,
     hasWatched: true,
     runtime: 122,
     synopsis: "ESSE FILME FOI SIMPLESMENTE MARAVILHOSO! EU ESTAVA PROCURANDO PRATA E ACHEI OURO COM ELE.",
     background: "url('../img/alita.png')"
    },
    {title: "Irmão urso",
     rating: 8.8,
     hasWatched: false,
     runtime: 85,
     synopsis: "Esse foi o primeiro filme que assisti, então é bem marcante pra mim, lembro te ter visto umas 10x com minha familia (indico muito também)",
     background: "url('../img/filme irmao 1.jpg')"
    },
    {title: "Irmão urso 2",
     rating: 8.1,
     hasWatched: true,
     runtime: 74,
     synopsis: "Esse é apenas uma continuação, porém é perfeito como um todo. Não é tão bom como o primeiro, mas ainda assim vale a pena assistir.",
     background: "url('../img/irmao urso 2.jpg')"
    },
    {title: "Rei leão",
     rating: 7.5,
     hasWatched: false,
     runtime: 87,
     synopsis: "O pai sendo um ganso e o melhor lutador sendo um panda que cai por acidente... mas como diz no filme, não existem acidentes na vida, essas frases filosoficas são perfeitas.",
     background: "url('../img/panda.webp')"
    },
    {title: "Como treinar seu dragão 3",
     rating: 8.4,
     hasWatched: false,
     runtime: 94,
     synopsis: "Eu sempre gostei de dragões ou coisas parecidas (Mesmo sabendo que não existem), e esse filme trouxe uma das coisas que acho interessante, se tornando o TOP 1 pra mim.",
     background: "url('../img/dragao.jpg')"
    },
    {title: "Carros",
     rating: 8.7,
     hasWatched: false,
     runtime: 117,
     synopsis: "Eu comecei a gostar desse filme, simplesmente porque tinha o jogo dele KKKKKKKKKKKKK foi 2 mes jogando, então acabou que gostei do filme.",
     background: "url('../img/carros.jpg')"
    },
    {title: "Aviões", 
     rating: 6.6,
     hasWatched: false,
     runtime: 93,
     synopsis: "Não é um filme muito fixante, porém a historia por tras dele é MUITO BOA, superação, o quanto palavras podem nos motivas ou desmotivar, realmente é um filme bacana.",
     background: "url('../img/aviao.jpg')"
    }
];

function printMovieInfo(element) {
if (element.hasWatched)
console.log("You have watched " + element.title + " - " + element.rating + " stars");
else
console.log("You have not seen " + element.title + " - " + element.rating + " stars");
}

// console stuff
movieDB.forEach(printMovieInfo);

movieDB.forEach(createCard);

function createCard(element, i){
// card
var card = document.createElement('div');
card.setAttribute("class", "movie-card");
card.style.backgroundImage = element.background;

// title
var title = document.createElement('h1');
title.innerText = element.title;
card.appendChild(title);

// runtime
var runtime = document.createElement('span');
runtime.innerText = element.runtime + " min";
card.appendChild(runtime);

// rating
var star = document.createElement("i");
star.setAttribute("class", "fas fa-star");
var rating = document.createElement('span');
rating.innerText = element.rating + " ";
rating.appendChild(star);
card.appendChild(rating);

// synopsis
var synopsis = document.createElement('p');
synopsis.innerText = element.synopsis;
card.appendChild(synopsis);

// watch/watch again
var watch = document.createElement('button');
watch.setAttribute("class", "watch");
if (element.hasWatched == false)
watch.innerText = "ASSISTIR";

else
watch.innerText = "ASSISTIR";
card.appendChild(watch);

document.body.appendChild(card);
}

