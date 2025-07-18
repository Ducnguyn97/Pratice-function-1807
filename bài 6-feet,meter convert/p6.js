let foot = parseFloat(prompt("Nhập vào số foot"));
let meter = parseFloat(prompt("Nhập vào số meter"));
function footToMeter(foot) {
    let result  = 0.305 *foot;
    return result;

}
function meterToFoot(meter) {
    let result =3.279 * meter;
    return result;
}
document.write(foot +" foot = "+ footToMeter(foot) + " meter " + "<br>");
document.write(meter +" meter = "+ meterToFoot(meter)+ " foot");