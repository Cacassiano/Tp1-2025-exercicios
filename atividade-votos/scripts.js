nome = []
idade = []
votantes = "\tPessoas que votam Obrigatoriamente\n"
faculta = "\tPessoas que votam Facutativamente\n"
naoVotantes = "\tPessoas que não Votam\n"

for(i = 7, j = 0; i >0; i--, j++) {
    nome.push(prompt("escreva um nome ("+i+" restando)"));
    tempIdade = parseInt(prompt("escreva a idade de: " + nome[j]))
    idade.push(tempIdade);
    if(tempIdade>70 || (tempIdade == 16 || tempIdade == 17 )) {
        faculta += nome[j]+"\n";
    } else if (tempIdade >17) {
        votantes += nome[j]+"\n"
    } else {
        naoVotantes += nome[j]+"\n"
    }
} 
alert(votantes)
alert(faculta)
alert(naoVotantes)
