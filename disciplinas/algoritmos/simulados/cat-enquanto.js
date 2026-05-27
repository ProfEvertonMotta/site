window.registrarCategoria({
  id: 'enquanto', titulo: 'Enquanto (while)', icone: '⟳',
  questoes: [
    {
      id:1, titulo:'Contagem progressiva',
      enunciado:'O algoritmo lê um número inteiro N e exibe todos os valores de 1 até N usando um laço enquanto. O contador começa em 1 e é incrementado em 1 a cada iteração. O laço continua enquanto o contador for menor que ou igual a N.',
      base:[
        'inteiro n, cont',
        'leia(n)',
        'cont <- 1',
        'enquanto (cont <= n) faça',
        '   escreva(cont)',
        '   cont <- cont + 1',
        'fim_enquanto'
      ],
      n1:[
        {linha:3, antes:'enquanto (cont ', depois:' n) faça', resposta:'<=', dica:'O laço continua enquanto cont for menor que ou igual a n.'},
        {linha:2, antes:'cont <- ', depois:'', resposta:'1', dica:'O contador começa em 1.'},
        {linha:5, antes:'   cont <- cont + ', depois:'', resposta:'1', dica:'Incrementa o contador em 1 a cada iteração.'}
      ],
      n2:[
        {linha:3, resposta:'enquanto (cont <= n) faça', dica:'Condição: enquanto cont for menor que ou igual a n.'},
        {linha:5, resposta:'   cont <- cont + 1', dica:'Incremento do contador dentro do laço.'}
      ],
      n3:{linhas:[2,3,4,5,6], label:'bloco do enquanto',
        resposta:['cont <- 1','enquanto (cont <= n) faça','   escreva(cont)','   cont <- cont + 1','fim_enquanto'],
        dica:'Escreva a inicialização do contador e o laço enquanto completo.'}
    },
    {
      id:2, titulo:'Soma ate sentinela',
      enunciado:'O algoritmo lê números inteiros repetidamente e os acumula em uma variável soma. O processo continua enquanto o número digitado for diferente de menos 1 (valor sentinela). Antes de entrar no laço, o primeiro número já é lido. Ao sair do laço, exibe a soma total.',
      base:[
        'inteiro num, soma',
        'soma <- 0',
        'leia(num)',
        'enquanto (num <> -1) faça',
        '   soma <- soma + num',
        '   escreva("Proximo (-1 para parar): ")',
        '   leia(num)',
        'fim_enquanto',
        'escreva("Soma total: ", soma)'
      ],
      n1:[
        {linha:3, antes:'enquanto (num ', depois:' -1) faça', resposta:'<>', dica:'O laço continua enquanto num for diferente de menos 1.'},
        {linha:1, antes:'soma <- ', depois:'', resposta:'0', dica:'O acumulador começa em zero.'},
        {linha:4, antes:'   soma <- soma + ', depois:'', resposta:'num', dica:'Acumula o número lido na variável soma.'}
      ],
      n2:[
        {linha:2, resposta:'leia(num)', dica:'Lê o primeiro número antes de entrar no laço.'},
        {linha:5, resposta:'   escreva("Proximo (-1 para parar): ")', dica:'Instrução ao usuário dentro do laço.'}
      ],
      n3:{linhas:[3,4,5,6,7], label:'bloco do enquanto',
        resposta:['enquanto (num <> -1) faça','   soma <- soma + num','   escreva("Proximo (-1 para parar): ")','   leia(num)','fim_enquanto'],
        dica:'Escreva o laço enquanto com condição, acumulação, instrução e releitura.'}
    },
    {
      id:3, titulo:'Adivinhe o numero',
      enunciado:'O algoritmo define o número secreto como 42. O usuário tenta adivinhar digitando chutes. O laço continua enquanto o chute for diferente do número secreto. Se o chute for menor que 42, exibe "Maior!" (o segredo é maior). Se for maior que 42, exibe "Menor!". Quando acerta, exibe "Acertou!".',
      base:[
        'inteiro secreto, chute',
        'secreto <- 42',
        'chute <- 0',
        'enquanto (chute <> secreto) faça',
        '   escreva("Seu chute: ")',
        '   leia(chute)',
        '   se (chute < secreto) então',
        '      escreva("Maior!")',
        '   senão',
        '      se (chute > secreto) então',
        '         escreva("Menor!")',
        '      fim_se',
        '   fim_se',
        'fim_enquanto',
        'escreva("Acertou!")'
      ],
      n1:[
        {linha:3, antes:'enquanto (chute ', depois:' secreto) faça', resposta:'<>', dica:'O laço continua enquanto o chute for diferente do número secreto.'},
        {linha:6, antes:'   se (chute ', depois:' secreto) então', resposta:'<', dica:'Se o chute for menor que 42, o segredo é maior.'},
        {linha:9, antes:'      se (chute ', depois:' secreto) então', resposta:'>', dica:'Se o chute for maior que 42, o segredo é menor.'}
      ],
      n2:[
        {linha:4, resposta:'   escreva("Seu chute: ")', dica:'Instrução ao usuário para digitar o chute.'},
        {linha:7, resposta:'      escreva("Maior!")', dica:'Dica exibida quando o chute é menor que o segredo.'}
      ],
      n3:{linhas:[6,7,8,9,10,11,12], label:'bloco de dicas ao usuario',
        resposta:['   se (chute < secreto) então','      escreva("Maior!")','   senão','      se (chute > secreto) então','         escreva("Menor!")','      fim_se','   fim_se'],
        dica:'Escreva o bloco condicional aninhado que exibe a dica correta ao usuário.'}
    },
    {
      id:4, titulo:'Maior e menor valor',
      enunciado:'O algoritmo lê 6 números inteiros. O primeiro é lido antes do laço e serve para inicializar o maior e o menor. O laço repete mais 5 vezes (enquanto cont for menor que 5). A cada iteração, se o número for maior que o maior atual, atualiza o maior; se for menor que o menor atual, atualiza o menor. Ao final, exibe os dois.',
      base:[
        'inteiro num, maior, menor, cont',
        'cont <- 0',
        'leia(num)',
        'maior <- num',
        'menor <- num',
        'enquanto (cont < 5) faça',
        '   leia(num)',
        '   se (num > maior) então',
        '      maior <- num',
        '   fim_se',
        '   se (num < menor) então',
        '      menor <- num',
        '   fim_se',
        '   cont <- cont + 1',
        'fim_enquanto',
        'escreva("Maior: ", maior)',
        'escreva("Menor: ", menor)'
      ],
      n1:[
        {linha:5, antes:'enquanto (cont ', depois:' 5) faça', resposta:'<', dica:'Já foi lido 1 número; o laço precisa de mais 5, então cont menor que 5.'},
        {linha:7, antes:'   se (num ', depois:' maior) então', resposta:'>', dica:'Atualiza maior se o número atual for maior.'},
        {linha:10, antes:'   se (num ', depois:' menor) então', resposta:'<', dica:'Atualiza menor se o número atual for menor.'}
      ],
      n2:[
        {linha:3, resposta:'maior <- num', dica:'Inicializa maior com o primeiro número lido.'},
        {linha:13, resposta:'   cont <- cont + 1', dica:'Incrementa o contador ao final de cada iteração.'}
      ],
      n3:{linhas:[7,8,9,10,11,12], label:'bloco de atualização de maior e menor',
        resposta:['   se (num > maior) então','      maior <- num','   fim_se','   se (num < menor) então','      menor <- num','   fim_se'],
        dica:'Escreva os dois se-então que atualizam maior e menor dentro do laço.'}
    },
    {
      id:5, titulo:'Validacao de entrada',
      enunciado:'O algoritmo pede uma nota entre 0 e 10. A variável nota é inicializada com menos 1 para forçar a entrada no laço. O laço repete enquanto nota for menor que 0,0 OU maior que 10,0, pedindo um novo valor. Quando o usuário digita um valor válido, o laço termina e exibe a nota.',
      base:[
        'real nota',
        'nota <- -1',
        'enquanto (nota < 0.0) ou (nota > 10.0) faça',
        '   escreva("Digite uma nota entre 0 e 10: ")',
        '   leia(nota)',
        'fim_enquanto',
        'escreva("Nota valida: ", nota)'
      ],
      n1:[
        {linha:2, antes:'enquanto (nota < 0.0) ou (nota ', depois:' 10.0) faça', resposta:'>', dica:'O laço continua enquanto nota for maior que 10,0 (valor inválido).'},
        {linha:1, antes:'nota <- ', depois:'', resposta:'-1', dica:'Inicializa nota com -1 para forçar a entrada no laço.'},
        {linha:4, antes:'   leia(', depois:')', resposta:'nota', dica:'Lê o novo valor digitado pelo usuário.'}
      ],
      n2:[
        {linha:2, resposta:'enquanto (nota < 0.0) ou (nota > 10.0) faça', dica:'Condição do laço: nota fora do intervalo 0,0 a 10,0.'},
        {linha:3, resposta:'   escreva("Digite uma nota entre 0 e 10: ")', dica:'Instrução ao usuário dentro do laço.'}
      ],
      n3:{linhas:[2,3,4,5], label:'bloco de validacao',
        resposta:['enquanto (nota < 0.0) ou (nota > 10.0) faça','   escreva("Digite uma nota entre 0 e 10: ")','   leia(nota)','fim_enquanto'],
        dica:'Escreva o laço enquanto completo que valida a entrada do usuário.'}
    }
  ]
});
