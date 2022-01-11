let value = '';
let out = document.querySelector('.calc-screen p');
let check = 0;
function checkNull() {
    check = 0;
}
function clearAll() {
    value = '';
    out.textContent = '';
}
function error() {
    out.textContent = 'Error';
    value = '';
}
function clearEnd(elem) {
    return elem.toString().slice(0, - 1);

}
function percent(elem) {
    return elem / 100;

}
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.eqal').onclick = equal;

function equal() {

    try {
        if (eval(value) == Infinity) return error();
        if (isNaN(eval(value)) == true) return error();
        out.textContent = eval(value);
        value = out.textContent;
        console.log(eval(value));



    }
    catch (err) {
        error();
    }


}
document.querySelector('.buttons').onclick = (event) => {
    const key = event.target.textContent;
    if (event.target.classList.contains('ac')) return checkNull();
    if (event.target.classList.contains('eqal')) {
        check = 1;
        if (value.toString().split('').indexOf('.') == -1) { checkNull() }
        return
    };
    if (event.target.classList.contains('<-')) {
        value = clearEnd(value);
        out.textContent = value;
        console.log(out, value);
        return;
    }
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('%')) {
        value = percent(value);
        out.textContent = value;
        check = 1;
        if (value.toString().split('').indexOf('.') == -1) { checkNull() }
        return;
    }
    if (event.target.classList.contains('dot')) {

        if (check > 0) return;
        check++

    }
    if (event.target.classList.contains('minus')) checkNull();
    if (event.target.classList.contains('plus')) checkNull();
    if (event.target.classList.contains('multiply')) checkNull();
    if (event.target.classList.contains('division')) checkNull();
    value = value + key;

    out.textContent = value;
    console.log(out, value);
}