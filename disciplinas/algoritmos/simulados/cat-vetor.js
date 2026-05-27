window.registrarCategoria({
  id: 'vetor', titulo: 'Vetor', icone: '▤',
  questoes: [
    {
      id:1, titulo:'Busca linear',
      enunciado:'O algoritmo le 7 inteiros em um vetor de indices 0 a 6 e depois le um valor alvo. A variavel pos e inicializada com menos 1 para indicar nao encontrado. Um laco percorre o vetor: se o elemento da posicao i for igual ao alvo, armazena i em pos. Apos o laco, se pos for maior que ou igual a zero, exibe a posicao; caso contrario, exibe "Nao encontrado".',
      base:[
        'inteiro v[7], i, alvo, pos',
        'para i de 0 ate 6 faca',
        '   leia(v[i])',
        'fim_para',
        'leia(alvo)',
        'pos <- -1',
        'para i de 0 ate 6 faca',
        '   se (v[i] = alvo) entao',
        '      pos <- i',
        '   fim_se',
        'fim_para',
        'se (pos >= 0) entao',
        '   escreva("Posicao: ", pos)',
        'senao',
        '   escreva("Nao encontrado")',
        'fim_se'
      ],
      n1:[
        {linha:1, antes:'para i de ', depois:' faca', resposta:'0 ate 6', dica:'O vetor tem 7 posicoes: indices de 0 ate 6.'},
        {linha:7, antes:'   se (v[i] ', depois:' alvo) entao', resposta:'=', dica:'Condicao: elemento atual igual ao valor buscado.'},
        {linha:11, antes:'se (pos ', depois:' 0) entao', resposta:'>=', dica:'Se pos maior que ou igual a zero, o elemento foi encontrado.'}
      ],
      n2:[
        {linha:5, resposta:'pos <- -1', dica:'Inicializa pos com menos 1 para indicar nao encontrado.'},
        {linha:8, resposta:'      pos <- i', dica:'Armazena o indice i quando o elemento e encontrado.'}
      ],
      n3:{linhas:[6,7,8,9,10], label:'bloco da busca linear',
        resposta:['para i de 0 ate 6 faca','   se (v[i] = alvo) entao','      pos <- i','   fim_se','fim_para'],
        dica:'Escreva o laco que percorre o vetor e armazena o indice quando encontrar o alvo.'}
    },
    {
      id:2, titulo:'Soma e media do vetor',
      enunciado:'O algoritmo le 6 numeros reais em um vetor de indices 0 a 5. Durante o laco de leitura, acumula a soma de todos os elementos. Apos o laco, calcula a media dividindo a soma por 6. Exibe a soma e a media ao final.',
      base:[
        'real v[6], soma, media',
        'inteiro i',
        'soma <- 0',
        'para i de 0 ate 5 faca',
        '   leia(v[i])',
        '   soma <- soma + v[i]',
        'fim_para',
        'media <- soma / 6',
        'escreva("Soma: ", soma)',
        'escreva("Media: ", media)'
      ],
      n1:[
        {linha:3, antes:'para i de ', depois:' faca', resposta:'0 ate 5', dica:'O vetor tem 6 posicoes: indices de 0 ate 5.'},
        {linha:5, antes:'   soma <- soma + ', depois:'', resposta:'v[i]', dica:'Acumula o elemento da posicao i na soma.'},
        {linha:2, antes:'soma <- ', depois:'', resposta:'0', dica:'O acumulador comeca em zero.'}
      ],
      n2:[
        {linha:4, resposta:'   leia(v[i])', dica:'Le e armazena o valor na posicao i.'},
        {linha:7, resposta:'media <- soma / 6', dica:'Calcula a media dividindo a soma por 6.'}
      ],
      n3:{linhas:[3,4,5,6], label:'bloco do laco de leitura e acumulacao',
        resposta:['para i de 0 ate 5 faca','   leia(v[i])','   soma <- soma + v[i]','fim_para'],
        dica:'Escreva o laco que le cada elemento e acumula a soma.'}
    },
    {
      id:3, titulo:'Maior elemento e posicao',
      enunciado:'O algoritmo le 7 inteiros em um vetor de indices 0 a 6. Antes do segundo laco, maior e inicializado com v[0] e posMaior com 0. O laco percorre de 1 ate 6: se o elemento atual for maior que o maior encontrado, atualiza maior e registra o indice i em posMaior. Ao final, exibe o maior valor e sua posicao.',
      base:[
        'inteiro v[7], i, maior, posMaior',
        'para i de 0 ate 6 faca',
        '   leia(v[i])',
        'fim_para',
        'maior <- v[0]',
        'posMaior <- 0',
        'para i de 1 ate 6 faca',
        '   se (v[i] > maior) entao',
        '      maior <- v[i]',
        '      posMaior <- i',
        '   fim_se',
        'fim_para',
        'escreva("Maior: ", maior)',
        'escreva("Posicao: ", posMaior)'
      ],
      n1:[
        {linha:6, antes:'para i de ', depois:' faca', resposta:'1 ate 6', dica:'O segundo laco comeca em 1, pois v[0] ja inicializou maior.'},
        {linha:7, antes:'   se (v[i] ', depois:' maior) entao', resposta:'>', dica:'Elemento atual maior que o maior encontrado ate agora.'},
        {linha:4, antes:'maior <- ', depois:'', resposta:'v[0]', dica:'Inicializa maior com o primeiro elemento do vetor.'}
      ],
      n2:[
        {linha:5, resposta:'posMaior <- 0', dica:'Inicializa posMaior com 0.'},
        {linha:9, resposta:'      posMaior <- i', dica:'Registra o indice i quando encontra um novo maior.'}
      ],
      n3:{linhas:[6,7,8,9,10,11], label:'bloco do laco de busca do maior',
        resposta:['para i de 1 ate 6 faca','   se (v[i] > maior) entao','      maior <- v[i]','      posMaior <- i','   fim_se','fim_para'],
        dica:'Escreva o laco que percorre de 1 ate 6 e atualiza maior e posMaior.'}
    },
    {
      id:4, titulo:'Contar negativos',
      enunciado:'O algoritmo le 8 inteiros em um vetor de indices 0 a 7. Apos a leitura, percorre o vetor com um segundo laco e conta quantos elementos sao menores que zero (negativos). O contador comeca em zero. Ao final, exibe a quantidade de negativos.',
      base:[
        'inteiro v[8], i, negat',
        'para i de 0 ate 7 faca',
        '   leia(v[i])',
        'fim_para',
        'negat <- 0',
        'para i de 0 ate 7 faca',
        '   se (v[i] < 0) entao',
        '      negat <- negat + 1',
        '   fim_se',
        'fim_para',
        'escreva("Negativos: ", negat)'
      ],
      n1:[
        {linha:5, antes:'para i de ', depois:' faca', resposta:'0 ate 7', dica:'Segundo laco percorre o vetor de 0 ate 7.'},
        {linha:6, antes:'   se (v[i] ', depois:' 0) entao', resposta:'<', dica:'Elemento menor que zero e negativo.'},
        {linha:4, antes:'negat <- ', depois:'', resposta:'0', dica:'O contador comeca em zero antes do segundo laco.'}
      ],
      n2:[
        {linha:6, resposta:'   se (v[i] < 0) entao', dica:'Condicao que identifica elemento negativo.'},
        {linha:7, resposta:'      negat <- negat + 1', dica:'Incrementa o contador quando encontra negativo.'}
      ],
      n3:{linhas:[4,5,6,7,8,9], label:'bloco de contagem de negativos',
        resposta:['negat <- 0','para i de 0 ate 7 faca','   se (v[i] < 0) entao','      negat <- negat + 1','   fim_se','fim_para'],
        dica:'Escreva a inicializacao e o laco que conta os negativos.'}
    },
    {
      id:5, titulo:'Inversao do vetor',
      enunciado:'O algoritmo le 5 inteiros em um vetor de indices 0 a 4. O segundo laco percorre o vetor de tras para frente: comeca no indice 4, vai ate o indice 0 com passo menos 1, exibindo cada elemento. Assim, os valores sao exibidos na ordem inversa a que foram digitados.',
      base:[
        'inteiro v[5], i',
        'para i de 0 ate 4 faca',
        '   leia(v[i])',
        'fim_para',
        'escreva("Ordem inversa:")',
        'para i de 4 ate 0 passo -1 faca',
        '   escreva(v[i])',
        'fim_para'
      ],
      n1:[
        {linha:1, antes:'para i de ', depois:' faca', resposta:'0 ate 4', dica:'Primeiro laco: leitura de 0 ate 4.'},
        {linha:5, antes:'para i de ', depois:' faca', resposta:'4 ate 0 passo -1', dica:'Segundo laco: de 4 ate 0 com passo menos 1.'},
        {linha:6, antes:'   escreva(', depois:')', resposta:'v[i]', dica:'Exibe o elemento na posicao i.'}
      ],
      n2:[
        {linha:2, resposta:'   leia(v[i])', dica:'Le e armazena o valor na posicao i.'},
        {linha:6, resposta:'   escreva(v[i])', dica:'Exibe o elemento na posicao i no segundo laco.'}
      ],
      n3:{linhas:[5,6,7], label:'bloco do laco de exibicao invertida',
        resposta:['para i de 4 ate 0 passo -1 faca','   escreva(v[i])','fim_para'],
        dica:'Escreva o laco que percorre o vetor de 4 ate 0 com passo menos 1.'}
    }
  ]
});
