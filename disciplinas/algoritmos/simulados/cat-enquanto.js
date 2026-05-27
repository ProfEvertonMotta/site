window.registrarCategoria({
  id: 'enquanto', titulo: 'Enquanto (while)', icone: '⟳',
  questoes: [
    {
      id:1, titulo:'Soma até sentinela',
      enunciado:'O algoritmo lê números inteiros repetidamente e os acumula em uma variável soma. O processo continua enquanto o número digitado for diferente de menos 1 (que é o valor sentinela, usado para encerrar). Antes de entrar no laço, o primeiro número já é lido. Dentro do laço, soma o número, pede o próximo e lê novamente. Ao sair do laço, exibe a soma total.',
      base:['inteiro num, soma','soma <- 0','leia(num)','enquanto (num <> -1) faça','   soma <- soma + num','   escreva("Próximo (-1 para parar): ")','   leia(num)','fim_enquanto','escreva("Soma total: ", soma)'],
      n1:[{linha:3,antes:'enquanto ',depois:' faça',resposta:'(num <> -1)',dica:'O laço continua enquanto num for diferente de menos 1.'},{linha:1,antes:'soma <- ',depois:'',resposta:'0',dica:'O acumulador de soma começa em zero.'},{linha:4,antes:'   soma <- soma + ',depois:'',resposta:'num',dica:'Acumula o número atual na variável soma.'}],
      n2:[{linha:2,resposta:'leia(num)',dica:'Lê o primeiro número antes de entrar no laço.'},{linha:5,resposta:'   escreva("Próximo (-1 para parar): ")',dica:'Instrução ao usuário para digitar o próximo número dentro do laço.'}],
      n3:{linhas:[3,4,5,6,7],label:'bloco do enquanto',resposta:['enquanto (num <> -1) faça','   soma <- soma + num','   escreva("Próximo (-1 para parar): ")','   leia(num)','fim_enquanto'],dica:'Escreva o laço enquanto completo: condição, acumulação, instrução e releitura.'}
    },
    {
      id:2, titulo:'Maior e menor valor',
      enunciado:'O algoritmo lê 6 números inteiros ao total. O primeiro é lido antes do laço e serve para inicializar tanto o maior quanto o menor. O laço repete mais 5 vezes (enquanto o contador for menor que 5). A cada iteração, lê um novo número: se ele for maior que o maior atual, atualiza o maior; se for menor que o menor atual, atualiza o menor. Ao final, exibe o maior e o menor.',
      base:['inteiro num, maior, menor, cont','cont <- 0','leia(num)','maior <- num','menor <- num','enquanto (cont < 5) faça','   leia(num)','   se (num > maior) então','      maior <- num','   fim_se','   se (num < menor) então','      menor <- num','   fim_se','   cont <- cont + 1','fim_enquanto','escreva("Maior: ", maior)','escreva("Menor: ", menor)'],
      n1:[{linha:5,antes:'enquanto ',depois:' faça',resposta:'(cont < 5)',dica:'Já foi lido 1 número antes; o laço precisa de mais 5, então enquanto cont for menor que 5.'},{linha:7,antes:'   se ',depois:' então',resposta:'(num > maior)',dica:'Atualiza o maior se o número atual for maior que o maior encontrado até agora.'},{linha:10,antes:'   se ',depois:' então',resposta:'(num < menor)',dica:'Atualiza o menor se o número atual for menor que o menor encontrado até agora.'}],
      n2:[{linha:3,resposta:'maior <- num',dica:'Inicializa maior com o primeiro número lido antes do laço.'},{linha:13,resposta:'   cont <- cont + 1',dica:'Incrementa o contador ao final de cada iteração.'}],
      n3:{linhas:[7,8,9,10,11,12],label:'bloco de atualização de maior e menor',resposta:['   se (num > maior) então','      maior <- num','   fim_se','   se (num < menor) então','      menor <- num','   fim_se'],dica:'Escreva os dois se-então que atualizam maior e menor dentro do laço.'}
    },
    {
      id:3, titulo:'Adivinhe o número',
      enunciado:'O algoritmo define o número secreto como 42. O usuário tenta adivinhar digitando chutes. O laço continua enquanto o chute for diferente do número secreto. A cada tentativa errada, o algoritmo dá uma dica: se o chute for menor que 42, exibe "Maior!" (indicando que o número secreto é maior); se o chute for maior que 42, exibe "Menor!". Quando o usuário acerta, o laço termina e exibe "Acertou!".',
      base:['inteiro secreto, chute','secreto <- 42','chute <- 0','enquanto (chute <> secreto) faça','   escreva("Seu chute: ")','   leia(chute)','   se (chute < secreto) então','      escreva("Maior!")','   senão','      se (chute > secreto) então','         escreva("Menor!")','      fim_se','   fim_se','fim_enquanto','escreva("Acertou!")'],
      n1:[{linha:3,antes:'enquanto ',depois:' faça',resposta:'(chute <> secreto)',dica:'O laço continua enquanto o chute for diferente do número secreto.'},{linha:6,antes:'   se ',depois:' então',resposta:'(chute < secreto)',dica:'Se o chute for menor que 42, o número secreto é maior.'},{linha:9,antes:'      se ',depois:' então',resposta:'(chute > secreto)',dica:'Se o chute for maior que 42, o número secreto é menor.'}],
      n2:[{linha:4,resposta:'   escreva("Seu chute: ")',dica:'Instrução ao usuário para digitar o chute dentro do laço.'},{linha:7,resposta:'      escreva("Maior!")',dica:'Dica exibida quando o chute é menor que 42.'}],
      n3:{linhas:[6,7,8,9,10,11,12],label:'bloco de dicas ao usuário',resposta:['   se (chute < secreto) então','      escreva("Maior!")','   senão','      se (chute > secreto) então','         escreva("Menor!")','      fim_se','   fim_se'],dica:'Escreva o bloco condicional aninhado que dá as dicas ao usuário.'}
    },
    {
      id:4, titulo:'Contagem regressiva',
      enunciado:'O algoritmo lê um número inteiro n e faz uma contagem regressiva exibindo os valores de n até 1. A cada iteração do laço, exibe o valor atual de n e depois decrementa n em 1. O laço continua enquanto n for maior que zero. Quando n chega a zero, o laço termina e o algoritmo exibe "Fogo!".',
      base:['inteiro n','leia(n)','enquanto (n > 0) faça','   escreva(n)','   n <- n - 1','fim_enquanto','escreva("Fogo!")'],
      n1:[{linha:2,antes:'enquanto ',depois:' faça',resposta:'(n > 0)',dica:'O laço continua enquanto n for maior que zero.'},{linha:3,antes:'   escreva(',depois:')',resposta:'n',dica:'Exibe o valor atual de n a cada iteração.'},{linha:4,antes:'   n <- n - ',depois:'',resposta:'1',dica:'Decrementa n em 1 a cada iteração.'}],
      n2:[{linha:2,resposta:'enquanto (n > 0) faça',dica:'Declaração completa do laço enquanto.'},{linha:4,resposta:'   n <- n - 1',dica:'Decremento de n dentro do laço.'}],
      n3:{linhas:[2,3,4,5],label:'bloco do enquanto',resposta:['enquanto (n > 0) faça','   escreva(n)','   n <- n - 1','fim_enquanto'],dica:'Escreva o laço enquanto completo com condição, impressão e decremento.'}
    },
    {
      id:5, titulo:'Validação de entrada',
      enunciado:'O algoritmo pede ao usuário que digite uma nota. A nota é válida somente se for maior que ou igual a 0,0 E menor que ou igual a 10,0. Para forçar a entrada no laço desde o início, a variável nota é inicializada com menos 1 (um valor inválido). O laço repete enquanto a nota for menor que 0,0 OU maior que 10,0, pedindo uma nova nota a cada tentativa. Quando o usuário digita um valor válido, o laço termina e a nota válida é exibida.',
      base:['real nota','nota <- -1','enquanto (nota < 0.0) ou (nota > 10.0) faça','   escreva("Digite uma nota entre 0 e 10: ")','   leia(nota)','fim_enquanto','escreva("Nota válida: ", nota)'],
      n1:[{linha:2,antes:'enquanto ',depois:' faça',resposta:'(nota < 0.0) ou (nota > 10.0)',dica:'O laço continua enquanto nota for menor que 0,0 OU maior que 10,0.'},{linha:1,antes:'nota <- ',depois:'',resposta:'-1',dica:'Inicializa nota com -1 para garantir a entrada no laço.'},{linha:4,antes:'   leia(',depois:')',resposta:'nota',dica:'Lê o novo valor digitado pelo usuário dentro do laço.'}],
      n2:[{linha:2,resposta:'enquanto (nota < 0.0) ou (nota > 10.0) faça',dica:'Declaração do laço: continua enquanto o valor for fora do intervalo 0,0 a 10,0.'},{linha:3,resposta:'   escreva("Digite uma nota entre 0 e 10: ")',dica:'Instrução ao usuário dentro do laço.'}],
      n3:{linhas:[2,3,4,5],label:'bloco de validação',resposta:['enquanto (nota < 0.0) ou (nota > 10.0) faça','   escreva("Digite uma nota entre 0 e 10: ")','   leia(nota)','fim_enquanto'],dica:'Escreva o laço enquanto de validação com condição, instrução e leitura.'}
    }
  ]
});
