function calc() {

    const elem = document.getElementById("result");
    let nb1 = document.getElementById("number1").value;
    let nb2 = document.getElementById("number2").value;
    let op = document.getElementById("operation").value;

    let final = 0;
    switch (op) {
        case '+':
            final = +nb1 + +nb2;
            break;
        case '-':
            final = +nb1 - +nb2;
            break;
        case '*':
            final = +nb1 * +nb2;
            break;
        case '/':
            final = +nb1 / +nb2;
            break;
        default:
            final = 0;
            break;
    }
    elem.innerHTML = final;
}