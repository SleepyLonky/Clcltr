//const MyAge = 666;
//
//if (MyAge < 666) {
 //   alert(" You are young");
//}
//else if (MyAge < 100) {
 //   alert(" You very young")
//}
//else {
 //   alert("You already DEAD!")
//}

//const firstNumder = Number(prompt ("enter your first number: "))
//const operator = Number(prompt (" enter operator +,-,*,/"))
//const secondNumber = Number(prompt (" enter your second number:"))
//
//let result
//
//if (operator == '+') {
 //  result = firstNumder + secondNumber 
//}
//else if (operator == '-') {
//    result = firstNumder - secondNumber
//}
//else if (operator == '*') {
//    result = firstNumder * secondNumber
//}
//else if (operator == '/') {
//    result = firstNumder / secondNumber
//}
//else {
 //   alert(" вы вызвали сатану")
//}
//
//prompt(`${firstNumder} ${operator} ${secondNumber} = ${result}`)

//const  Number = prompt("10")
//if (Number % 2 == 0) {
 //   alert("четное")
//}
//else {
 //   alert("нечетное")
//}

function insert(number) {
    document.form.textview.value =
    document.form.textview.value + number
}

function clean() {
    document.form.textview.value = ""
}

function deleteP () {
    let number = document.form.textview.value
    document.form.textview.value = number.substring(0, number.length-1)
}

function calculate () {
    let number =   document.form.textview.value
    if (number) {
        document.form.textview.value = eval(number).toFixed(1)
    }
    }

    function square () {
        let number =   document.form.textview.value
        if (number) {
            document.form.textview.value = number * number
        }
        }