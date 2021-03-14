const btnCalcular = document.getElementById('calculando')
const resultado = document.getElementById('resultado')

function imc(){
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    if(nome === '' && peso === '' || altura === ''){
        resultado.textContent = 'digite em algum dos campos para calcular'
    }else{
        const valorImc = peso / (altura * altura).toFixed(2)
        resultado.textContent = `nome: ${nome} \n altura: ${altura} \n peso: ${peso} \n IMC: ${valorImc}`
    }
}

btnCalcular.addEventListener('click', imc)