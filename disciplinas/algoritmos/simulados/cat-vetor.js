window.registrarCategoria({
  id: 'vetor', titulo: 'Vetor', icone: '▤',
  questoes: [
    {
      id:1, titulo:'Estatísticas de notas',
      enunciado:'O algoritmo lê 6 notas reais em um vetor de índices 0 a 5. Durante a leitura, acumula a soma das notas e conta quantas são maiores que ou iguais a 6,0 (aprovados). Após o laço, calcula a média dividindo a soma por 6. Ao final, exibe a média e o total de aprovados.',
      base:['real notas[6], soma, media','inteiro i, aprovados','soma <- 0','aprovados <- 0','para i de 0 até 5 faça','   leia(notas[i])','   soma <- soma + notas[i]','   se (notas[i] >= 6.0) então','      aprovados <- aprovados + 1','   fim_se','fim_para','media <- soma / 6','escreva("Média: ", media)','escreva("Aprovados: ", aprovados)'],
      n1:[{linha:4,antes:'para i de ',depois:' faça',resposta:'0 até 5',dica:'O vetor tem 6 posições: índices de 0 até 5.'},{linha:6,antes:'   soma <- soma + ',depois:'',resposta:'notas[i]',dica:'Acumula a nota da posição atual (notas[i]) na soma.'},{linha:7,antes:'   se ',depois:' então',resposta:'(notas[i] >= 6.0)',dica:'Uma nota é aprovada se for maior que ou igual a 6,0.'}],
      n2:[{linha:5,resposta:'   leia(notas[i])',dica:'Lê cada nota e armazena na posição i do vetor.'},{linha:11,resposta:'media <- soma / 6',dica:'Calcula a média dividindo a soma total pelo número de notas (6).'}],
      n3:{linhas:[4,5,6,7,8,9,10],label:'bloco de leitura, acumulação e contagem',resposta:['para i de 0 até 5 faça','   leia(notas[i])','   soma <- soma + notas[i]','   se (notas[i] >= 6.0) então','      aprovados <- aprovados + 1','   fim_se','fim_para'],dica:'Escreva o laço completo com leitura, acumulação da soma e contagem de aprovados.'}
    },
    {
      id:2, titulo:'Inversão de vetor',
      enunciado:'O algoritmo usa dois laços. O primeiro percorre o vetor do índice 0 ao índice 4 (5 posições) para ler os valores. O segundo percorre o mesmo vetor de trás para frente: começa no índice 4, vai até o índice 0, com passo menos 1, exibindo cada elemento. Assim, os valores são exibidos na ordem inversa à que foram digitados.',
      base:['inteiro v[5], i','para i de 0 até 4 faça','   leia(v[i])','fim_para','escreva("Ordem inversa: ")','para i de 4 até 0 passo -1 faça','   escreva(v[i])','fim_para'],
      n1:[{linha:1,antes:'para i de ',depois:' faça',resposta:'0 até 4',dica:'Primeiro laço percorre de 0 até 4 para leitura.'},{linha:5,antes:'para i de ',depois:' faça',resposta:'4 até 0 passo -1',dica:'Segundo laço começa em 4, vai até 0 com passo menos 1.'},{linha:6,antes:'   escreva(',depois:')',resposta:'v[i]',dica:'Exibe o elemento na posição i do vetor.'}],
      n2:[{linha:2,resposta:'   leia(v[i])',dica:'Lê cada elemento e armazena na posição i do vetor.'},{linha:6,resposta:'   escreva(v[i])',dica:'Exibe o elemento na posição i no segundo laço (ordem inversa).'}],
      n3:{linhas:[5,6,7],label:'bloco de exibição na ordem inversa',resposta:['para i de 4 até 0 passo -1 faça','   escreva(v[i])','fim_para'],dica:'Escreva o segundo laço que percorre o vetor de 4 até 0 com passo menos 1 exibindo cada elemento.'}
    },
    {
      id:3, titulo:'Busca linear',
      enunciado:'O algoritmo lê 7 inteiros em um vetor (índices 0 a 6) e depois lê um valor alvo a ser buscado. A variável pos é inicializada com menos 1 (indicando "não encontrado"). Um segundo laço percorre o vetor: se o elemento da posição i for igual ao alvo, armazena i em pos. Após o laço, se pos for maior que ou igual a zero, o elemento foi encontrado e sua posição é exibida; caso contrário, exibe "Não encontrado".',
      base:['inteiro v[7], i, alvo, pos','para i de 0 até 6 faça','   leia(v[i])','fim_para','leia(alvo)','pos <- -1','para i de 0 até 6 faça','   se (v[i] = alvo) então','      pos <- i','   fim_se','fim_para','se (pos >= 0) então','   escreva("Posição: ", pos)','senão','   escreva("Não encontrado")','fim_se'],
      n1:[{linha:1,antes:'para i de ',depois:' faça',resposta:'0 até 6',dica:'O vetor tem 7 posições: índices de 0 até 6.'},{linha:7,antes:'   se ',depois:' então',resposta:'(v[i] = alvo)',dica:'Verifica se o elemento na posição i é igual ao valor buscado.'},{linha:11,antes:'se ',depois:' então',resposta:'(pos >= 0)',dica:'Se pos for maior que ou igual a zero, o elemento foi encontrado.'}],
      n2:[{linha:5,resposta:'pos <- -1',dica:'Inicializa pos com menos 1 para indicar "não encontrado" antes da busca.'},{linha:8,resposta:'      pos <- i',dica:'Armazena o índice i em pos quando o elemento é encontrado.'}],
      n3:{linhas:[6,7,8,9,10],label:'bloco da busca linear',resposta:['para i de 0 até 6 faça','   se (v[i] = alvo) então','      pos <- i','   fim_se','fim_para'],dica:'Escreva o laço de busca que percorre o vetor e armazena o índice quando encontrar o alvo.'}
    },
    {
      id:4, titulo:'Ordenação por seleção',
      enunciado:'O algoritmo ordena 5 inteiros em ordem crescente usando o algoritmo de seleção. O laço externo percorre de 0 até 3 (não precisa chegar ao último). Para cada posição i, assume que ela tem o menor elemento (minIdx recebe i). O laço interno percorre de i mais 1 até 4: se encontrar um elemento menor que v[minIdx], atualiza minIdx. Após o laço interno, troca v[i] com v[minIdx] usando uma variável auxiliar temp.',
      base:['inteiro v[5], i, j, minIdx, temp','para i de 0 até 4 faça','   leia(v[i])','fim_para','para i de 0 até 3 faça','   minIdx <- i','   para j de i+1 até 4 faça','      se (v[j] < v[minIdx]) então','         minIdx <- j','      fim_se','   fim_para','   temp <- v[i]','   v[i] <- v[minIdx]','   v[minIdx] <- temp','fim_para','para i de 0 até 4 faça','   escreva(v[i])','fim_para'],
      n1:[{linha:4,antes:'para i de ',depois:' faça',resposta:'0 até 3',dica:'O laço externo vai de 0 até 3 (não precisa ir até o último elemento).'},{linha:7,antes:'      se ',depois:' então',resposta:'(v[j] < v[minIdx])',dica:'Se o elemento na posição j for menor que o menor encontrado até agora, atualiza minIdx.'},{linha:6,antes:'   para j de ',depois:' faça',resposta:'i+1 até 4',dica:'O laço interno começa em i mais 1 e vai até o último índice (4).'}],
      n2:[{linha:5,resposta:'   minIdx <- i',dica:'Assume a posição i como a do menor elemento antes do laço interno.'},{linha:11,resposta:'   temp <- v[i]',dica:'Salva o valor de v[i] em temp antes de sobrescrevê-lo na troca.'}],
      n3:{linhas:[11,12,13],label:'bloco de troca (swap)',resposta:['   temp <- v[i]','   v[i] <- v[minIdx]','   v[minIdx] <- temp'],dica:'Escreva as três linhas que trocam v[i] com v[minIdx] usando a variável auxiliar temp.'}
    },
    {
      id:5, titulo:'Frequência de elemento',
      enunciado:'O algoritmo lê 8 inteiros em um vetor (índices 0 a 7) e depois lê um valor alvo. Percorre o vetor inteiro usando um laço de 0 até 7: cada vez que um elemento for igual ao alvo, incrementa o contador cont em 1. O contador começa em zero antes do laço. Ao final, exibe quantas vezes o alvo apareceu no vetor.',
      base:['inteiro v[8], i, alvo, cont','para i de 0 até 7 faça','   leia(v[i])','fim_para','leia(alvo)','cont <- 0','para i de 0 até 7 faça','   se (v[i] = alvo) então','      cont <- cont + 1','   fim_se','fim_para','escreva("Ocorrências de ", alvo, ": ", cont)'],
      n1:[{linha:1,antes:'para i de ',depois:' faça',resposta:'0 até 7',dica:'O vetor tem 8 posições: índices de 0 até 7.'},{linha:7,antes:'   se ',depois:' então',resposta:'(v[i] = alvo)',dica:'Verifica se o elemento da posição i é igual ao valor alvo.'},{linha:8,antes:'      cont <- cont + ',depois:'',resposta:'1',dica:'Incrementa o contador em 1 cada vez que encontrar o alvo.'}],
      n2:[{linha:5,resposta:'cont <- 0',dica:'O contador começa em zero antes do laço de contagem.'},{linha:6,resposta:'para i de 0 até 7 faça',dica:'Segundo laço que percorre o vetor inteiro para contar as ocorrências.'}],
      n3:{linhas:[6,7,8,9,10],label:'bloco de contagem de ocorrências',resposta:['para i de 0 até 7 faça','   se (v[i] = alvo) então','      cont <- cont + 1','   fim_se','fim_para'],dica:'Escreva o laço que percorre o vetor e conta quantas vezes o alvo aparece.'}
    }
  ]
});
