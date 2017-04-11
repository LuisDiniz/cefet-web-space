// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let botaoEl = document.querySelectorAll('.botao-expandir-retrair');


for (let botao of botaoEl){
	botao.addEventListener('click', function (){

		let p = botao.parentNode;

		if (p.classList.contains('expandido')){
			botao.innerHTML = '+';
			p.classList.remove('expandido');			
		}

		else {
			botao.innerHTML = '-';
			p.classList.add('expandido');
		}

	});
}
