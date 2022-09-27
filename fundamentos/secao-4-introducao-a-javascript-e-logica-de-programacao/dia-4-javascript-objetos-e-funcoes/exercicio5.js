function numero(a, b, c){
    if (a > b && a > c){
        return "O primeiro numero é o maior";
    }else if(b > a && b > c){
        return "O segundo numero é o maior";
    }else {
        return "O terceiro numero é o maior";
    }
}
console.log(numero(4, 6, 3));