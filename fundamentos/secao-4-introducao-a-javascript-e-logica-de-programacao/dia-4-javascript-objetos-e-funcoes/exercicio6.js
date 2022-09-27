function number(a){
    if (a > 0){
        return "Positive";
    }else if (a < 0){
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(number(6));