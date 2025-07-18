let n = +prompt("Số phần tử của mảng");
let arr = [];
let num;
for (let i = 0; i < n; i++) {
    num = +prompt("Phần tử thứ "+ i +":");
    arr.push(num);
}
document.write(arr + "<br>");
function getMin(Array){
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    } return "Phần tử GTNN: " + min;
}
let min = getMin(arr);
document.write(min);
