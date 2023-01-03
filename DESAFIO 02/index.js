//MarketPlace onde não posso vender produtos com valor abaixo de $20,00

let productValue = Number(prompt('Enter the product value: ')) 
//o tipo vira numero se tiver o Number

if (productValue >= 20) {
document.getElementById('result').innerHTML = 'Approved'
    
}else
document.getElementById('result').innerHTML = 'Denied'
