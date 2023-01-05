function outcome() {

    let num1 = Number(document.getElementById('num-one').value) // Number o valor ser tratado como numero, chama pelo id, value para aceitar qualquer valor
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0 // sempre o valor total ser igual a zero

    if (document.getElementById('box1').checked) // condição para se a opção da operação for selecionada.
        total = num1 + num2
    else if (document.getElementById('box2').checked)
        total = num1 - num2
    else if (document.getElementById('box3').checked)
        total = num1 * num2
    else
        total = num1 / num2
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total) //apresenta o resultado calculado como o formato de string.
}