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

let botaoAnteriorEl = document.querySelectorAll('#anterior');

botaoAnteriorEl.addEventListener('click', function (){
	i++;
	let img = botaoAnteriorEl.previousSibling;
	img.src = servidorDasImagens + todasAsImagens[i];
});

let botaoProximoEl = document.querySelectorAll('#proximo');
