// Criar uma função quantidade de vitórias e derrotas
// calcular saldo = vitórias - derrotas
// Definir o nível com base no número de vitórias com a mensade saldo e nivel
// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

function calcularVitoriasEDerrotas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
}

console.log(calcularVitoriasEDerrotas(50, 2)); // O Herói tem esse saldo porque tem 80 vitórias e 0 derrotas