Feature: Buscar Termo

	Scenario: Busca Termo Unico com Enter
		Given que acesso o site do Google1
		When digito o termo "geladeira" e pressiono Enter1
		#And pressiono o Enter
		Then vejo os resultados e a guia 1 "feriado - Pesquisa Google" 

	#Scenario: Busca Termo Unico com Clique
	#	Given que acesso o site do Google
	#	When digito o termo "feriado"
	#	And clico no botao Pesquisa Google
	#	Then vejo os resultados e a guia "feriado - Pesquisa Google"