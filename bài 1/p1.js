function square(number){
    var result = number * number;
    return result;
}
function calculator(){
    var input = document.getElementById("input").value;
    var result = square(input);
    document.getElementById("result").innerHTML = result;
}