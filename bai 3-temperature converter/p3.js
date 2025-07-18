
function convertCelcius(temp){
    let f = document.getElementById("input").value;
    let c = parseFloat(f-32)/1.8;
    document.getElementById("result").innerHTML = c;
}
convertCelcius(temp);

