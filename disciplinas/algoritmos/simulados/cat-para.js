window.registrarCategoria({
  id: 'para', titulo: 'Para (for)', icone: '↺',
  questoes: [
    {
      id:1, titulo:'Tabuada completa',
      enunciado:'O algoritmo lê um número inteiro n. Em seguida, para cada valor de i começando em 1 e indo até 10, exibe uma linha com o formato: n x i = resultado. Por exemplo, se n for 5, a primeira linha será "5 x 1 = 5", a segunda "5 x 2 = 10", e assim por diante até "5 x 10 = 50".',
      base:['inteiro n, i','leia(n)','para i de 1 até 10 faça','   escreva(n, " x ", i, " = ", n * i)','fim_para'],
      n1:[{linha:2,antes:'para i de ',depois:' faça',resposta:'1 até 10',dica:'O laço começa em 1 e termina em 10.'},{linha:3,antes:'   escreva(n, " x ", i, " = ", ',depois:')',resposta:'n * i',dica:'O resultado de cada linha é n multiplicado por i.'},{linha:1,antes:'leia(',depois:')',resposta:'n',dica:'Variável que armazena o número lido.'}],
      n2:[{linha:2,resposta:'para i de 1 até 10 faça',dica:'Declaração completa do laço: de 1 até 10.'},{linha:3,resposta:'   escreva(n, " x ", i, " = ", n * i)',dica:'Exibe cada linha da tabuada com o formato correto.'}],
      n3:{linhas:[2,3,4],label:'bloco do laço para',resposta:['para i de 1 até 10 faça','   escreva(n, " x ", i, " = ", n * i)','fim_para'],dica:'Escreva o laço para completo: declaração, corpo e fim_para.'}
    },
    {
      id:2, titulo:'Fatorial e potência',
      enunciado:'O algoritmo lê um número inteiro n. Usando um único laço de 1 até n, calcula simultaneamente o fatorial de n (multiplicando fat por cada valor de i) e 2 elevado à potência n (multiplicando pot por 2,0 a cada iteração). Antes do laço, fat deve ser inicializado com 1 (elemento neutro da multiplicação) e pot com 1,0. Ao final, exibe os dois resultados.',
      base:['inteiro n, i, fat','real pot','leia(n)','fat <- 1','pot <- 1.0','para i de 1 até n faça','   fat <- fat * i','   pot <- pot * 2.0','fim_para','escreva("Fatorial: ", fat)','escreva("Potência de 2: ", pot)'],
      n1:[{linha:5,antes:'para i de ',depois:' faça',resposta:'1 até n',dica:'O laço vai de 1 até n, o número lido.'},{linha:6,antes:'   fat <- fat * ',depois:'',resposta:'i',dica:'O fatorial multiplica o acumulador pelo valor atual de i.'},{linha:7,antes:'   pot <- pot * ',depois:'',resposta:'2.0',dica:'A potência multiplica o acumulador pela base 2,0 a cada iteração.'}],
      n2:[{linha:3,resposta:'fat <- 1',dica:'Fatorial começa em 1 — elemento neutro da multiplicação.'},{linha:4,resposta:'pot <- 1.0',dica:'Potência começa em 1,0 — elemento neutro da multiplicação.'}],
      n3:{linhas:[5,6,7,8],label:'bloco do laço para',resposta:['para i de 1 até n faça','   fat <- fat * i','   pot <- pot * 2.0','fim_para'],dica:'Escreva o laço que calcula fatorial e potência de 2 simultaneamente.'}
    },
    {
      id:3, titulo:'Soma dos ímpares',
      enunciado:'O algoritmo lê um número inteiro n. Soma todos os números ímpares de 1 até n. Para percorrer apenas os ímpares, o laço começa em 1 e usa passo 2 (ou seja, i assume os valores 1, 3, 5, 7 ...). A soma é acumulada em uma variável iniciada com zero. Ao final, exibe o total.',
      base:['inteiro n, i, soma','leia(n)','soma <- 0','para i de 1 até n passo 2 faça','   soma <- soma + i','fim_para','escreva("Soma dos ímpares: ", soma)'],
      n1:[{linha:3,antes:'para i de ',depois:' faça',resposta:'1 até n passo 2',dica:'Começa em 1 com passo 2 para percorrer apenas os ímpares.'},{linha:4,antes:'   soma <- soma + ',depois:'',resposta:'i',dica:'Acumula o valor atual de i na variável soma.'},{linha:2,antes:'soma <- ',depois:'',resposta:'0',dica:'O acumulador começa em zero antes do laço.'}],
      n2:[{linha:3,resposta:'para i de 1 até n passo 2 faça',dica:'Laço com passo 2 iniciando em 1.'},{linha:4,resposta:'   soma <- soma + i',dica:'Acumula i na soma a cada iteração.'}],
      n3:{linhas:[2,3,4,5],label:'bloco de acumulação dos ímpares',resposta:['soma <- 0','para i de 1 até n passo 2 faça','   soma <- soma + i','fim_para'],dica:'Escreva a inicialização do acumulador e o laço dos ímpares com passo 2.'}
    },
    {
      id:4, titulo:'Contagem de aprovados',
      enunciado:'O algoritmo lê 5 notas uma a uma usando um laço de 1 até 5. Para cada nota lida, verifica se ela é maior que ou igual a 6,0: se for, incrementa o contador de aprovados em 1. Antes do laço, o contador deve ser inicializado com zero. Ao final do laço, exibe o total de aprovados.',
      base:['inteiro i, aprovados','real nota','aprovados <- 0','para i de 1 até 5 faça','   escreva("Nota ", i, ": ")','   leia(nota)','   se (nota >= 6.0) então','      aprovados <- aprovados + 1','   fim_se','fim_para','escreva("Total de aprovados: ", aprovados)'],
      n1:[{linha:3,antes:'para i de ',depois:' faça',resposta:'1 até 5',dica:'O laço percorre as 5 notas, de 1 até 5.'},{linha:6,antes:'   se ',depois:' então',resposta:'(nota >= 6.0)',dica:'Uma nota é aprovada se for maior que ou igual a 6,0.'},{linha:7,antes:'      aprovados <- aprovados + ',depois:'',resposta:'1',dica:'Cada aprovação incrementa o contador em 1.'}],
      n2:[{linha:2,resposta:'aprovados <- 0',dica:'O contador de aprovados começa em zero antes do laço.'},{linha:5,resposta:'   leia(nota)',dica:'Lê a nota do aluno dentro do laço.'}],
      n3:{linhas:[6,7,8],label:'bloco condicional de contagem de aprovados',resposta:['   se (nota >= 6.0) então','      aprovados <- aprovados + 1','   fim_se'],dica:'Escreva o se-então que verifica se nota é maior que ou igual a 6,0 e incrementa o contador.'}
    },
    {
      id:5, titulo:'Sequência de Fibonacci',
      enunciado:'O algoritmo lê um número n e exibe os n primeiros termos da sequência de Fibonacci. A sequência começa com 0 e 1; cada termo seguinte é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8, 13 ... A cada iteração, exibe o valor atual de a, depois calcula o próximo termo somando a e b, avança a para b e b para o novo termo calculado (armazenado em temp).',
      base:['inteiro n, i, a, b, temp','leia(n)','a <- 0','b <- 1','para i de 1 até n faça','   escreva(a)','   temp <- a + b','   a <- b','   b <- temp','fim_para'],
      n1:[{linha:4,antes:'para i de ',depois:' faça',resposta:'1 até n',dica:'O laço repete n vezes, de 1 até n.'},{linha:6,antes:'   temp <- a + ',depois:'',resposta:'b',dica:'O próximo termo é a soma de a mais b.'},{linha:7,antes:'   a <- ',depois:'',resposta:'b',dica:'a avança para o valor atual de b.'}],
      n2:[{linha:2,resposta:'a <- 0',dica:'O primeiro termo de Fibonacci é zero.'},{linha:3,resposta:'b <- 1',dica:'O segundo termo de Fibonacci é um.'}],
      n3:{linhas:[4,5,6,7,8,9],label:'bloco do laço de Fibonacci',resposta:['para i de 1 até n faça','   escreva(a)','   temp <- a + b','   a <- b','   b <- temp','fim_para'],dica:'Escreva o laço completo que exibe e avança a sequência de Fibonacci.'}
    }
  ]
});
