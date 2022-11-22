// Desafio: Criar uma página onde o utilizador possa iniciar um jogo contra o computador, e o jogador terá de escolher pedra, papel ou tesoura e depois deverá ser mostrado o resultado do jogo (ganhou ou perdeu) com base na escolha da máquina.

function Rock(){

    var rn = Math.floor(Math.random()* 3) + 1;

    // rn = 1 é Pedra | rn = 2 é Papel | rn = 3 é Tesoura

    if(rn == 1)[
        alert('A escolha da máquina foi pedra, o resultado é: Empate')
    ]
    else{
        if(rn == 2)[
            alert('A escolha da máquina foi papel, o resultado é: Derrota')
        ]
        else[
            alert('A escolha da máquina foi pedra, o resultado é: Vitória')
        ]
    }
}

function Paper(){

    var rn = Math.floor(Math.random()* 3) + 1;

    // rn = 1 é Pedra | rn = 2 é Papel | rn = 3 é Tesoura

    if(rn == 1)[
        alert('A escolha da máquina foi pedra, o resultado é: Vitória')
    ]
    else{
        if(rn == 2)[
            alert('A escolha da máquina foi papel, o resultado é: Empate')
        ]
        else[
            alert('A escolha da máquina foi pedra, o resultado é: Derrota')
        ]
    }
}

function Scissors(){

    var rn = Math.floor(Math.random()* 3) + 1;

    // rn = 1 é Pedra | rn = 2 é Papel | rn = 3 é Tesoura

    if(rn == 1)[
        alert('A escolha da máquina foi pedra, o resultado é: Derrota')
    ]
    else{
        if(rn == 2)[
            alert('A escolha da máquina foi papel, o resultado é: Vitória')
        ]
        else[
            alert('A escolha da máquina foi pedra, o resultado é: Derrota')
        ]
    }
}