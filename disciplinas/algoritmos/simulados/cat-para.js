window.registrarCategoria({
  id: 'para', titulo: 'Para (for)', icone: '↺',
  questoes: [
    {
      id:1, titulo:'Soma de 1 ate N',
      enunciado:'O algoritmo le um numero inteiro N e soma todos os valores inteiros de 1 ate N usando um laco para. A variavel soma comeca em zero. A cada iteracao, o valor de i e somado ao acumulador. Ao final, exibe o resultado.',
      base:[
        'inteiro n, i, soma',
        'leia(n)',
        'soma <- 0',
        'para i de 1 ate n faca',
        '   soma <- soma + i',
        'fim_para',
        'escreva("Soma: ", soma)'
      ],
      n1:[
        {linha:3, antes:'para i de ', depois:' faca', resposta:'1 ate n', dica:'O laco vai de 1 ate o numero lido.'},
        {linha:2, antes:'soma <- ', depois:'', resposta:'0', dica:'O acumulador comeca em zero antes do laco.'},
        {linha:4, antes:'   soma <- soma + ', depois:'', resposta:'i', dica:'Cada valor de i e somado ao acumulador.'}
      ],
      n2:[
        {linha:3, resposta:'para i de 1 ate n faca', dica:'Declaracao do laco de 1 ate n.'},
        {linha:4, resposta:'   soma <- soma + i', dica:'Acumulacao de i dentro do laco.'}
      ],
      n3:{linhas:[2,3,4,5], label:'bloco de inicializacao e laco',
        resposta:['soma <- 0','para i de 1 ate n faca','   soma <- soma + i','fim_para'],
        dica:'Escreva a inicializacao de soma e o laco para que acumula de 1 ate n.'}
    },
    {
      id:2, titulo:'Tabuada completa',
      enunciado:'O algoritmo le um numero inteiro N e imprime a tabuada desse numero de 1 a 10. Para cada valor de i de 1 ate 10, exibe uma linha no formato: N x i = resultado. Por exemplo, se N for 3, exibe "3 x 1 = 3", "3 x 2 = 6" ate "3 x 10 = 30".',
      base:[
        'inteiro n, i',
        'leia(n)',
        'para i de 1 ate 10 faca',
        '   escreva(n, " x ", i, " = ", n * i)',
        'fim_para'
      ],
      n1:[
        {linha:2, antes:'para i de ', depois:' faca', resposta:'1 ate 10', dica:'A tabuada vai de 1 ate 10.'},
        {linha:3, antes:'   escreva(n, " x ", i, " = ", n * ', depois:')', resposta:'i', dica:'O resultado e n multiplicado por i.'},
        {linha:1, antes:'leia(', depois:')', resposta:'n', dica:'Le o numero para calcular a tabuada.'}
      ],
      n2:[
        {linha:2, resposta:'para i de 1 ate 10 faca', dica:'Declaracao do laco de 1 ate 10.'},
        {linha:3, resposta:'   escreva(n, " x ", i, " = ", n * i)', dica:'Impressao de cada linha da tabuada.'}
      ],
      n3:{linhas:[2,3,4], label:'bloco do laco da tabuada',
        resposta:['para i de 1 ate 10 faca','   escreva(n, " x ", i, " = ", n * i)','fim_para'],
        dica:'Escreva o laco para que imprime a tabuada de 1 a 10.'}
    },
    {
      id:3, titulo:'Contagem regressiva',
      enunciado:'O algoritmo le um numero inteiro N e usa um laco para imprimir a contagem regressiva de N ate 1, com passo menos 1. Cada numero e exibido em uma linha. Ao terminar o laco, exibe "Fim!".',
      base:[
        'inteiro n, i',
        'leia(n)',
        'para i de n ate 1 passo -1 faca',
        '   escreva(i)',
        'fim_para',
        'escreva("Fim!")'
      ],
      n1:[
        {linha:2, antes:'para i de ', depois:' faca', resposta:'n ate 1 passo -1', dica:'O laco comeca em n, vai ate 1 com passo menos 1.'},
        {linha:3, antes:'   escreva(', depois:')', resposta:'i', dica:'Exibe o valor atual de i a cada iteracao.'},
        {linha:5, antes:'escreva("', depois:'")', resposta:'Fim!', dica:'Mensagem exibida ao terminar a contagem.'}
      ],
      n2:[
        {linha:2, resposta:'para i de n ate 1 passo -1 faca', dica:'Declaracao do laco com passo negativo.'},
        {linha:3, resposta:'   escreva(i)', dica:'Impressao do valor de i dentro do laco.'}
      ],
      n3:{linhas:[2,3,4,5], label:'bloco do laco regressivo',
        resposta:['para i de n ate 1 passo -1 faca','   escreva(i)','fim_para','escreva("Fim!")'],
        dica:'Escreva o laco regressivo e a mensagem final.'}
    },
    {
      id:4, titulo:'Quadrado dos numeros',
      enunciado:'O algoritmo le um numero inteiro N e usa um laco para exibir o quadrado de cada numero de 1 ate N. Para cada valor de i, calcula i multiplicado por i e exibe no formato "i^2 = resultado". Por exemplo, se N for 4, exibe: 1^2=1, 2^2=4, 3^2=9, 4^2=16.',
      base:[
        'inteiro n, i',
        'leia(n)',
        'para i de 1 ate n faca',
        '   escreva(i, "^2 = ", i * i)',
        'fim_para'
      ],
      n1:[
        {linha:2, antes:'para i de ', depois:' faca', resposta:'1 ate n', dica:'O laco vai de 1 ate n.'},
        {linha:3, antes:'   escreva(i, "^2 = ", i * ', depois:')', resposta:'i', dica:'O quadrado de i e i multiplicado por i.'},
        {linha:1, antes:'leia(', depois:')', resposta:'n', dica:'Le o limite superior do laco.'}
      ],
      n2:[
        {linha:2, resposta:'para i de 1 ate n faca', dica:'Declaracao do laco de 1 ate n.'},
        {linha:3, resposta:'   escreva(i, "^2 = ", i * i)', dica:'Exibe i e seu quadrado.'}
      ],
      n3:{linhas:[2,3,4], label:'bloco do laco dos quadrados',
        resposta:['para i de 1 ate n faca','   escreva(i, "^2 = ", i * i)','fim_para'],
        dica:'Escreva o laco para que calcula e exibe o quadrado de cada numero de 1 ate n.'}
    },
    {
      id:5, titulo:'Sequencia de Fibonacci',
      enunciado:'O algoritmo le um numero N e exibe os N primeiros termos da sequencia de Fibonacci. A sequencia comeca com 0 e 1; cada termo seguinte e a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8, 13... A cada iteracao, exibe o valor atual de A, depois calcula o proximo somando A e B, avanca A para B e B para o valor calculado em temp.',
      base:[
        'inteiro n, i, a, b, temp',
        'leia(n)',
        'a <- 0',
        'b <- 1',
        'para i de 1 ate n faca',
        '   escreva(a)',
        '   temp <- a + b',
        '   a <- b',
        '   b <- temp',
        'fim_para'
      ],
      n1:[
        {linha:4, antes:'para i de ', depois:' faca', resposta:'1 ate n', dica:'O laco repete n vezes, de 1 ate n.'},
        {linha:6, antes:'   temp <- a + ', depois:'', resposta:'b', dica:'O proximo termo e a soma de A mais B.'},
        {linha:7, antes:'   a <- ', depois:'', resposta:'b', dica:'A avanca para o valor atual de B.'}
      ],
      n2:[
        {linha:2, resposta:'a <- 0', dica:'O primeiro termo de Fibonacci e zero.'},
        {linha:3, resposta:'b <- 1', dica:'O segundo termo de Fibonacci e um.'}
      ],
      n3:{linhas:[4,5,6,7,8,9], label:'bloco do laco de Fibonacci',
        resposta:['para i de 1 ate n faca','   escreva(a)','   temp <- a + b','   a <- b','   b <- temp','fim_para'],
        dica:'Escreva o laco para completo que exibe e avanca a sequencia de Fibonacci.'}
    }
  ]
});
