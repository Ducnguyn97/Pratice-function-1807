
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            document.getElementById("result").innerHTML = "số " + number + " Không là số nguyên tố";
            return;
        }
    }
            document.getElementById("result").innerHTML = "số " + number + " là số nguyên tố";
}

function checkPrime(){
    let num = document.getElementById("number").value;
    isPrime(num);
}
