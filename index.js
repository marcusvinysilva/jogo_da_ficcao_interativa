const prompt = require('prompt-sync')();
console.clear();

console.log('Antonias, um senhor feudal, revestido com sua ambição ardente para controlar a terra chamada MU estava facilmente iludido, uma vez nomeado Lemulia por um sorcerer evil, que com a obcessão de Antonias podia trazer Kundun, diabo da escuridão, de volta à vida. Ao ver sua filha encantadora separada de si por um membro de Kundun, Antonias derramou lágrimas de sangue e lamentou o fato e fez suas decisões doentes. Na extremidade tudo era por nada, simplesmente porque a morte de sua filha foi sem sentido pelas mãos do sorcerer evil. Lemulia não deixou seu crime de reviver o diabo da escuridão, Kundun. Há mas somente um trajeto de esperança para a terra de MU. Mas quem fará a tarefa de descobrir as 8 pedras selantes que foram dispersadas através do continente de MU? Quem irá selar o Demônio Kundun e restaurar a terra a sua beleza uma vez anterior? Será VOCÊ? O diabo da escuridão tem começado já a fazer tarefas de ação para dominar o continente de MU.');
console.log();

let nome = prompt('Nome do personagem: ');
console.log();

let status = 'vivo';

const personagem = {
    nome: nome,
    classe: 'Dark Knight',
    pontos: 0,
    moedas: 800,
    forca: 25,
    vida: 100,
    vida_maxima: 100,
    pocoes: 10,
    equipamentos: [],
}

const aranhas = {
    vida: 25,
    dano: 10
}

const esqueletos = {
    vida: 50,
    dano: 20
}

const fantasmas = {
    vida: 100,
    dano: 40
}

const leoes = {
    vida: 200,
    dano: 80
}

function mostrar_informacoes(){
    console.log('Informações do personagem:');
    console.log(`Nome: ${personagem.nome}`);
    console.log(`Pontos: ${personagem.pontos}`);
    console.log(`Moedas: ${personagem.moedas}`);
    console.log(`Força: ${personagem.forca}`);
    console.log(`Vida: ${personagem.vida}`);
    console.log(`Poções de Renegeração: ${personagem.pocoes}`);
    console.log(`Equipamentos: ${personagem.equipamentos}`);
    console.log();
}

function user_pocao() {
    while(true){
        if(personagem.pocoes > 0){
            console.log();
            personagem.pocoes--;
            personagem.vida = personagem.vida_maxima;
            console.log('Você usou uma poção de regeneração.');
            console.log('Sua vida esta cheia.');
            console.log();
            break;
        } else {
            console.log();
            console.log('Nenhuma poção de regeneração encontrada.');
            console.log('1 - Comprar.');
            console.log('S - Sair.');
            escolha = prompt('O que deseja fazer? ');

            if(escolha.toLowerCase == '1'){
                console.log();
                console.log('O custo de cada poção de regeneração é de 50 moedas.');
                console.log(`Seu saldo: ${personagem.moedas} moedas.`);
                quantidade = +prompt('Deseja comprar quantas poções? ');

                if((quantidade * 50) < personagem.moedas){
                    console.log();
                    console.log(`${quantidade} poções compradas com sucesso!`);
                    personagem.moedas = personagem.moedas - (quantidade * 50);
                    console.log(`Seu saldo agora é de ${personagem.moedas} moedas.`);
                    personagem.pocoes--;
                    personagem.vida = personagem.vida_maxima;
                    console.log('Você usou uma poção de regeneração.');
                    console.log('Sua vida esta cheia.');
                    console.log();
                    break;
                } else {
                    console.log();
                    console.log('Você não possui moedas suficientes.');
                    console.log();
                    continue;
                }
            } else if(escolha.toLowerCase = 's'){
                console.log();
                console.log('Saindo...');
                console.log();
                break;
            } else {
                continue;
            }
        }
    }
}

function loja(){
    while(true){
        console.log('Loja:');
        console.log('1 - Armadura.');
        console.log('Força: 25 / Vida: 50 / Preço: 700 moedas.');
        console.log('2 - Arma.');
        console.log('Força: 50 / Vida: 25 / Preço: 300 moedas.');
        console.log('3 - Escudo.');
        console.log('Força: 25 / Vida: 50 /  Preço: 300 moedas.');
        console.log('4 - Asa.');
        console.log('Força: 25 / Vida: 25 /  Preço: 200 moedas.');
        console.log('S - Sair.');
        escolha = prompt('Qual item você deseja comprar? ');

        if(escolha.toLowerCase() == '1'){
            if(personagem.moedas >= 700){
                console.log('');
                console.log('Armadura comprada com sucesso!');
                personagem.moedas = personagem.moedas - 700;
                personagem.forca = personagem.forca + 25;
                personagem.vida_maxima = personagem.vida_maxima + 50;
                personagem.equipamentos.push('Armadura');
                console.log('');
                continue;
            } else {
                console.log('');
                console.log('Você não possui moedas suficientes.');
                console.log('');
                continue;
            }
        } else if(escolha.toLowerCase() == '2'){
            if(personagem.moedas >= 300){
                console.log('');
                console.log('Arma comprada com sucesso!');
                personagem.moedas = personagem.moedas - 300;
                personagem.forca = personagem.forca + 50;
                personagem.vida_maxima = personagem.vida_maxima + 25;
                personagem.equipamentos.push('Arma');
                console.log('');
                continue;
            } else {
                console.log('Você não possui moedas suficientes.');
                console.log('');
                continue;
            }
        } else if(escolha.toLowerCase() == '3'){
            if(personagem.moedas >= 300){
                console.log('');
                console.log('Escudo comprada com sucesso!');
                personagem.moedas = personagem.moedas - 300;
                personagem.forca = personagem.forca + 25;
                personagem.vida_maxima = personagem.vida_maxima + 50;
                personagem.equipamentos.push('Escudo');
                console.log('');
                continue;
            } else {
                console.log('');
                console.log('Você não possui moedas suficientes.');
                console.log('');
                continue;
                
            }
        } else if(escolha.toLowerCase() == '4'){
            if(personagem.moedas >= 200){
                console.log('');
                console.log('Asa comprada com sucesso!');
                personagem.moedas = personagem.moedas - 200;
                personagem.forca = personagem.forca + 25;
                personagem.vida_maxima = personagem.vida_maxima + 25;
                personagem.equipamentos.push('Asa');
                console.log('');
                continue;
            } else {
                console.log('');
                console.log('Você não possui moedas suficientes.');
                console.log('');
                continue;
            }
        } else if(escolha.toLowerCase() == 's'){
            console.log('');
            console.log('Saindo...');
            console.log('');
            break;
        } else {
            console.log('');
            console.log('Escolha inválida!');
            console.log('');
            continue;
        }
    }
}

function batalhar(){
    p: while(true){
        console.log('Batalhar:');
        console.log('1 - Aranhas.');
        console.log('Dificuldade: Fácil / Ponto(s): 1 / Recompensa: 10 moedas.');
        console.log('2 - Esqueletos.');
        console.log('Dificuldade: Fácil / Ponto(s): 2 / Recompensa: 20 moedas.');
        console.log('3 - Fantasmas.');
        console.log('Dificuldade: Médio / Ponto(s): 5 / Recompensa: 50 moedas.');
        console.log('4 - Leões.');
        console.log('Dificuldade: Difícil / Ponto(s): 10 / Recompensa: 100 moedas.');
        console.log('S - Sair.');
        escolha = prompt('Quem você deseja enfrentar? ');

        console.log();
        if(escolha.toLowerCase() == '1'){
            while(aranhas.vida > 0){
                aranhas.vida = aranhas.vida - personagem.forca;
                console.log('Você atacou a aranha.');
                personagem.vida = personagem.vida - aranhas.dano;
                console.log('Você foi atacado.');
                console.log(`Vida: ${personagem.vida}.`);
                if(personagem.vida < 0){
                    console.log('Você for morto.');
                    status = 'morto';
                    console.log();
                    break p;
                }
                if(aranhas.vida <= 0){
                    console.log('Você matou a aranha.');
                    personagem.pontos = personagem.pontos + 1;
                    personagem.moedas = personagem.moedas + 10;
                    console.log('Você recebeu: Ponto(s): 1 / Recompensa: 10 moedas.');
                    console.log();
                } else {
                    console.log('Ataque novamente.');
                }
            }
            aranhas.vida = 25;
        } else if(escolha.toLowerCase() == '2'){
            while(esqueletos.vida > 0){
                esqueletos.vida = esqueletos.vida - personagem.forca;
                console.log('Você atacou o esqueleto.');
                personagem.vida = personagem.vida - esqueletos.dano;
                console.log('Você foi atacado.');
                console.log(`Vida: ${personagem.vida}.`);
                if(personagem.vida < 0){
                    console.log('Você for morto.');
                    status = 'morto';
                    console.log();
                    break p;
                } 
                if(esqueletos.vida <= 0){
                    console.log('Você matou o esqueleto.');
                    personagem.pontos = personagem.pontos + 2;
                    personagem.moedas = personagem.moedas + 20;
                    console.log('Você recebeu: Ponto(s): 2 / Recompensa: 20 moedas.');
                    console.log();
                } else {
                    console.log('Ataque novamente.');
                }
            }
            esqueletos.vida = 50;
        } else if(escolha.toLowerCase() == '3'){
            while(fantasmas.vida > 0){
                fantasmas.vida = fantasmas.vida - personagem.forca;
                console.log('Você atacou o fantasma.');
                personagem.vida = personagem.vida - fantasmas.dano;
                console.log('Você foi atacado.');
                console.log(`Vida: ${personagem.vida}.`);
                if(personagem.vida < 0){
                    console.log('Você for morto.');
                    status = 'morto';
                    console.log();
                    break p;
                } 
                if(fantasmas.vida <= 0){
                    console.log('Você matou o fantasma.');
                    personagem.pontos = personagem.pontos + 5;
                    personagem.moedas = personagem.moedas + 50;
                    console.log('Você recebeu: Ponto(s): 5 / Recompensa: 50 moedas.');
                    console.log();
                } else {
                    console.log('Ataque novamente.');
                }
            }
            fantasmas.vida = 100;
        } else if(escolha.toLowerCase() == '4'){
            while(leoes.vida > 0){
                leoes.vida = leoes.vida - personagem.forca;
                console.log('Você atacou o leão.');
                personagem.vida = personagem.vida - leoes.dano;
                console.log('Você foi atacado.');
                console.log(`Vida: ${personagem.vida}.`);
                if(personagem.vida < 0){
                    console.log('Você for morto.');
                    status = 'morto';
                    console.log();
                    break p;
                } 
                if(leoes.vida <= 0){
                    console.log('Você matou o leão.');
                    personagem.pontos = personagem.pontos + 10;
                    personagem.moedas = personagem.moedas + 100;
                    console.log('Você recebeu: Ponto(s): 10 / Recompensa: 100 moedas.');
                    console.log();
                } else {
                    console.log('Ataque novamente.');
                }
            }
            leoes.vida = 200;
        } else if(escolha.toLowerCase() == 's'){
            console.log();
            console.log('Saindo...');
            console.log();
            break;
        } else {
            console.log();
            console.log('Escolha inválida.');
            console.log();
            continue;
        }
    }
}

function evoluir(){
    while(true){
        if(personagem.pontos > 220){
            personagem.classe = 'Blade Knight';
            console.log();
            console.log('Evolução realizada com sucesso, você agora é um Blade Knight.');
            console.log();
            break;
        } else {
            console.log();
            console.log('Pontos insuficientes para a evolução.');
            console.log();
            break;
        }
    }
    console.log();
}

function missoes(){
    console.log('Missões:');
    console.log('1 - Conseguir duzentos e cinquenta pontos.');
    console.log('2 - Evoluir a classe do personagem.');
    console.log('3 - Comprar a armadura.');
    console.log('4 - Comprar a arma.');
    console.log('5 - Comprar o escudo.');
    console.log('6 - Comprar a asa.');
    console.log('Atenção, é necessário ter ao menos 50 moedas na hora de concluir o jogo.');
    console.log();
}

function concluir(){
    while(true){
        console.log('Analistando informações do personagem.');
        if(personagem.classe == 'Blade Knight'){
            if(personagem.moedas >= 50){
                if(personagem.pontos >= 250){
                    if(personagem.equipamentos.includes('Armadura')){
                        if(personagem.equipamentos.includes('Arma')){
                            if(personagem.equipamentos.includes('Escudo')){
                                if(personagem.equipamentos.includes('Asa')){
                                    console.log();
                                    console.log('Parabens, você realizou todas as missões com sucesso e concluiu o jogo.');
                                    break;
                                }   else {
                                    console.log();
                                    console.log('Você precisa comprar a asa.');
                                    break;
                                }
                            } else {
                                console.log();
                                console.log('Você precisa comprar o escudo.');
                                break;
                            }
                        } else {
                            console.log();
                            console.log('Você precisa comprar a arma.');
                            break;
                        }
                    } else {
                        console.log();
                        console.log('Você precisa comprar a armadura.');
                        break;
                    }
                } else {
                    console.log();
                    console.log('Você precisa de 250 pontos ou mais.');
                    break;
                }
            } else {
                console.log();
                console.log('Você precisa de 50 moedas ou mais.');
                break;
            }
        } else {
            console.log();
            console.log('Você precisa realizar a evolução de classe.');
            break;
        }
    }
    console.log();
}

function menu() {
    while(true){
        if(status == 'vivo'){
            console.log('Menu de opções:');
            console.log('1 - Informações do personagem.');
            console.log('2 - Poção de regeneração.');
            console.log('3 - Loja.');
            console.log('4 - Batalhar.');
            console.log('5 - Evoluir.');
            console.log('6 - Missões.');
            console.log('7 - Concluir.');
            console.log('S - Sair.');
            escolha = prompt('O que deseja fazer? ');
            
            console.log();
            if(escolha.toLowerCase() == '1'){
                mostrar_informacoes();
            } else if(escolha.toLowerCase() == '2'){
                user_pocao();
            } else if(escolha.toLowerCase() == '3'){
                loja();
            } else if(escolha.toLowerCase() == '4'){
                batalhar();
            } else if(escolha.toLowerCase() == '5'){
                evoluir();
            } else if(escolha.toLowerCase() == '6'){
                missoes();
            } else if(escolha.toLowerCase() == '7'){
                concluir();
            } else if(escolha.toLowerCase() == 's'){
                console.log('Saindo...');
                console.log();
                break;
            } else {
                console.log('Escolha inválida!');
                console.log();
                continue;
            }
        } else {
            console.log(`${nome}, infelizmente você foi morto e sua jornada chegou ao fim.`);
            console.log('Encerrando...')
            break;
        }
    }
}

menu();