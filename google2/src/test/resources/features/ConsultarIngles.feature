Feature: Buscar Termo

	Scenario: Busca Termo Unico com Enter
		Given que acesso o site do Google
		When digito o termo "feriado" e pressiono Enter
		#And pressiono o Enter
		Then vejo os resultados e a guia "Feriados nacionais para o ano de 2019"

	#Scenario: Busca Termo Unico com Clique
	#	Given que acesso o site do Google
	#	When digito o termo "feriado"
	#	And clico no botao Pesquisa Google
	#	Then vejo os resultados e a guia "Feriados nacionais para o ano de 2019"
