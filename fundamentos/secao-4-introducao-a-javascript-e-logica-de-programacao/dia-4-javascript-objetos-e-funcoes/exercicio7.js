function triangulo(angulo1, angulo2, angulo3){
    if (angulo1 + angulo2 + angulo3 === 180){
        return true;
    } else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
        return "Erro, angulo invalido";
    } else {
        return false
    }
}
console.log(triangulo(60, 60, -90));