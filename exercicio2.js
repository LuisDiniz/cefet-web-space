// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let i = 0;
let img = document.querySelector('#slide'); 
let botaoAnteriorEl = document.querySelector('#anterior');
let botaoProximoEl = document.querySelector('#proximo');

botaoAnteriorEl.addEventListener('click', function (){
	i--;
  if (i < 0)
    i = todasAsImagens.length-1;
	img.src = servidorDasImagens + todasAsImagens[i];
});

botaoProximoEl.addEventListener('click', function (){
  i++;
  if (i == todasAsImagens.length)
    i = 0;
  img.src = servidorDasImagens + todasAsImagens[i];
});
