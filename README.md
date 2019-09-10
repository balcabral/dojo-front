DOJO FrontEnd

Desafio:

Nosso desafio consiste em criar um sistema para cadastro de jogador em um time de futebol. Os campos para cadastrados serão nome, ano de nascimento, altura, peso, 2 posições e 2 times. 

Campos obrigatórios: 
	- Nome
	- Pelo menos uma posição
	- Pelo menos um time

A lista de jogadores cadastrados deverão seguir as seguintes regras:
	- O campo nome (primeiro item da lista), sempre deverá vir com a cor azul.
	- Se o time escolhido (time 1 ou time 2) for o Brasil, a borda desta campo deverá ser azul.
	

Parte 1: Criar html e css dos inputs usando grid do bootstrap onde serão exibidos 4 campos por linha no tamanho xl, qualquer tamanho menor que xl serão 2 campos por linha. As divs do título e do botão sempre ocuparão o espaço total.

Parte 2: Criar o two way data binding do objeto FichaModel e mostrar na mesma tela conforme vai digitando nos inputs.

Parte 3: Criar o método getForkJoin que baterá nas 2 services ja criadas, implementar o loading que só sumirá quando as 2 apis terminarem e chamar o método no onInit.

Parte 4: 
	- Criar html e css das propriedades bindadas usando flex de modo que um item fique do lado do outro ocupando todo o espaço da linha. 
	- Ao clicar em Cadastrar, deveremos inserir o item na lista fichaLista. Essa lista que deverá ser exibida na tela. Sempre que um item for inserido nela deveremos bondar um novo objeto.
	- Para cadastrar deveremos ter um método que valida se o nome, pelo menos uma posição e pelo menos um time foram preenchidos.
	- Utilizar sass/bem nas classes e o primeiro item (nome) sempre deve vir com a cor da fonte azul (seletor por posição).