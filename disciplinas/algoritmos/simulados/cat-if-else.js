window.registrarCategoria({
  id: 'if-else', titulo: 'Se-Senão', icone: '⤳',
  questoes: [
    {
      id:1, titulo:'Par ou ímpar',
      enunciado:'O algoritmo lê um número inteiro. Se o resto da divisão desse número por 2 for igual a zero, o número é par e exibe "Par". Caso contrário, exibe "Impar".',
      base:[
        'inteiro n',
        'leia(n)',
        'se (n mod 2 = 0) então',
        '   escreva("Par")',
        'senão',
        '   escreva("Impar")',
        'fim_se'
      ],
      n1:[
        {linha:2, antes:'se (n mod 2 ', depois:' 0) então', resposta:'=', dica:'Condição de paridade: resto igual a zero.'},
        {linha:3, antes:'   escreva("', depois:'")', resposta:'Par', dica:'Mensagem quando o número é par.'},
        {linha:5, antes:'   escreva("', depois:'")', resposta:'Impar', dica:'Mensagem quando o número é ímpar.'}
      ],
      n2:[
        {linha:2, resposta:'se (n mod 2 = 0) então', dica:'Condição que verifica se o número é par.'},
        {linha:5, resposta:'   escreva("Impar")', dica:'Mensagem exibida quando o número não é par.'}
      ],
      n3:{linhas:[2,3,4,5,6], label:'bloco se-senão completo',
        resposta:['se (n mod 2 = 0) então','   escreva("Par")','senão','   escreva("Impar")','fim_se'],
        dica:'Escreva o se-senão que verifica paridade e exibe a mensagem correta.'}
    },
    {
      id:2, titulo:'Maior de dois números',
      enunciado:'O algoritmo lê dois números inteiros A e B. Se A for maior que B, exibe "A e maior". Se B for maior que A, exibe "B e maior". Se os dois forem iguais, exibe "Iguais".',
      base:[
        'inteiro a, b',
        'leia(a)',
        'leia(b)',
        'se (a > b) então',
        '   escreva("A e maior")',
        'senão',
        '   se (b > a) então',
        '      escreva("B e maior")',
        '   senão',
        '      escreva("Iguais")',
        '   fim_se',
        'fim_se'
      ],
      n1:[
        {linha:3, antes:'se (', depois:') então', resposta:'a > b', dica:'Condição para A ser maior que B.'},
        {linha:6, antes:'   se (', depois:') então', resposta:'b > a', dica:'Condição para B ser maior que A.'},
        {linha:9, antes:'      escreva("', depois:'")', resposta:'Iguais', dica:'Mensagem quando os dois valores são iguais.'}
      ],
      n2:[
        {linha:4, resposta:'   escreva("A e maior")', dica:'Mensagem exibida quando A é maior que B.'},
        {linha:7, resposta:'      escreva("B e maior")', dica:'Mensagem exibida quando B é maior que A.'}
      ],
      n3:{linhas:[5,6,7,8,9,10,11], label:'bloco senão aninhado',
        resposta:['senão','   se (b > a) então','      escreva("B e maior")','   senão','      escreva("Iguais")','   fim_se','fim_se'],
        dica:'Escreva o bloco senão aninhado que trata os casos B maior e iguais.'}
    },
    {
      id:3, titulo:'Classificação de nota',
      enunciado:'O algoritmo lê uma nota inteira de 0 a 10. Se a nota for maior que ou igual a 9, exibe "Otimo". Se for maior que ou igual a 7 e menor que 9, exibe "Bom". Se for maior que ou igual a 5 e menor que 7, exibe "Regular". Se for menor que 5, exibe "Insuficiente".',
      base:[
        'inteiro nota',
        'leia(nota)',
        'se (nota >= 9) então',
        '   escreva("Otimo")',
        'senão',
        '   se (nota >= 7) então',
        '      escreva("Bom")',
        '   senão',
        '      se (nota >= 5) então',
        '         escreva("Regular")',
        '      senão',
        '         escreva("Insuficiente")',
        '      fim_se',
        '   fim_se',
        'fim_se'
      ],
      n1:[
        {linha:2, antes:'se (nota ', depois:' 9) então', resposta:'>=', dica:'Nota maior que ou igual a 9 é Otimo.'},
        {linha:5, antes:'   se (nota ', depois:' 7) então', resposta:'>=', dica:'Nota maior que ou igual a 7 é Bom.'},
        {linha:8, antes:'      se (nota ', depois:' 5) então', resposta:'>=', dica:'Nota maior que ou igual a 5 é Regular.'}
      ],
      n2:[
        {linha:3, resposta:'   escreva("Otimo")', dica:'Mensagem para nota maior que ou igual a 9.'},
        {linha:9, resposta:'         escreva("Regular")', dica:'Mensagem para nota entre 5 e 6.'}
      ],
      n3:{linhas:[7,8,9,10,11,12,13,14], label:'bloco senão de Bom, Regular e Insuficiente',
        resposta:['   senão','      se (nota >= 7) então','         escreva("Bom")','      senão','         se (nota >= 5) então','            escreva("Regular")','         senão','            escreva("Insuficiente")'],
        dica:'Escreva o bloco senão aninhado com as classificações Bom, Regular e Insuficiente.'}
    },
    {
      id:4, titulo:'Turno do dia',
      enunciado:'O algoritmo lê uma hora inteira de 0 a 23. Se a hora for menor que 12, exibe "Manha". Se for maior que ou igual a 12 e menor que 18, exibe "Tarde". Se for maior que ou igual a 18, exibe "Noite".',
      base:[
        'inteiro hora',
        'leia(hora)',
        'se (hora < 12) então',
        '   escreva("Manha")',
        'senão',
        '   se (hora < 18) então',
        '      escreva("Tarde")',
        '   senão',
        '      escreva("Noite")',
        '   fim_se',
        'fim_se'
      ],
      n1:[
        {linha:2, antes:'se (hora ', depois:' 12) então', resposta:'<', dica:'Hora menor que 12 corresponde à Manha.'},
        {linha:5, antes:'   se (hora ', depois:' 18) então', resposta:'<', dica:'Hora menor que 18 corresponde à Tarde.'},
        {linha:8, antes:'      escreva("', depois:'")', resposta:'Noite', dica:'Mensagem para hora maior que ou igual a 18.'}
      ],
      n2:[
        {linha:3, resposta:'   escreva("Manha")', dica:'Mensagem para hora menor que 12.'},
        {linha:6, resposta:'      escreva("Tarde")', dica:'Mensagem para hora entre 12 e 17.'}
      ],
      n3:{linhas:[4,5,6,7,8,9,10], label:'bloco senão aninhado de Tarde e Noite',
        resposta:['senão','   se (hora < 18) então','      escreva("Tarde")','   senão','      escreva("Noite")','   fim_se','fim_se'],
        dica:'Escreva o bloco senão que diferencia Tarde (menor que 18) de Noite (maior que ou igual a 18).'}
    },
    {
      id:5, titulo:'Comparação de tres numeros',
      enunciado:'O algoritmo lê três números inteiros A, B e C. Se A for maior que B e A for maior que C, exibe "A e o maior". Se B for maior que C, exibe "B e o maior". Caso contrário, exibe "C e o maior".',
      base:[
        'inteiro a, b, c',
        'leia(a)',
        'leia(b)',
        'leia(c)',
        'se (a > b) e (a > c) então',
        '   escreva("A e o maior")',
        'senão',
        '   se (b > c) então',
        '      escreva("B e o maior")',
        '   senão',
        '      escreva("C e o maior")',
        '   fim_se',
        'fim_se'
      ],
      n1:[
        {linha:4, antes:'se (', depois:') então', resposta:'a > b) e (a > c', dica:'A é o maior quando supera B e C ao mesmo tempo.'},
        {linha:7, antes:'   se (', depois:') então', resposta:'b > c', dica:'Entre B e C, B é maior quando b for maior que c.'},
        {linha:10, antes:'      escreva("', depois:'")', resposta:'C e o maior', dica:'Mensagem quando C supera B.'}
      ],
      n2:[
        {linha:5, resposta:'   escreva("A e o maior")', dica:'Mensagem quando A supera B e C.'},
        {linha:8, resposta:'      escreva("B e o maior")', dica:'Mensagem quando B supera C.'}
      ],
      n3:{linhas:[6,7,8,9,10,11,12], label:'bloco senão de B e C',
        resposta:['senão','   se (b > c) então','      escreva("B e o maior")','   senão','      escreva("C e o maior")','   fim_se','fim_se'],
        dica:'Escreva o bloco senão que compara B e C para determinar o maior entre os dois.'}
    }
  ]
});
