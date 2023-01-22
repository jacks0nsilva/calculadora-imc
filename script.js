let BotaoDeChecar = document.querySelector('#botao-checar')
// Botão que calcula o IMC e abre um modal para exibir o resultado
BotaoDeChecar.addEventListener('click', CalcularIMC)

let BotaoFecharModal = document.getElementById('botao-fechar-modal')
// Botão para fechar o modal que exibe o resultado

function CalcularIMC(){
    let height= document.getElementById('altura')
    let weight = document.getElementById('peso')
    let altura = Number(height.value)
    let peso = Number(weight.value)
    if (height.value <= 0 || weight.value <= 0){
        window.alert('Não foi possível calcular seu IMC, verifique os dados e tente novamente')
    } else{
        let modal = document.querySelector('dialog')
        let resultadoIMC = document.querySelector('.resultado-imc')
        let resultIMC = IMC(peso,altura)
         if (resultIMC < 18.6){
            resultadoIMC.innerText = `Seu IMC é de ${resultIMC}! Isso significa que você está abaixo do peso 😟`
        } else if (resultIMC <= 24.9 && resultIMC >= 18.6){
            resultadoIMC.innerText = `Seu IMC é de ${resultIMC}! Isso significa que você está no peso ideal 😃`
        } else if (resultIMC <= 29.9 && resultIMC >= 25){
            resultadoIMC.innerText = `Seu IMC é de ${resultIMC}! Isso significa que você está levemente acima do peso 😟`
        } else if (resultIMC <= 34.9 && resultIMC >= 30){
            resultadoIMC.innerText = `Seu IMC é de ${resultIMC}! Isso significa que você está no primeiro grau de obesidade 😟`
        } else if (resultIMC <= 39.9 && resultIMC >=35){
            resultadoIMC.innerText = `Seu IMC é de ${resultIMC}! Isso significa que você está no segundo grau de obesidade (severa) 😧`
        } else{
            resultadoIMC.innerText = `Seu IMC é de ${resultIMC}! Isso significa que você está no terceiro grau de obesidade (mórbida) 😧`
        }
        modal.classList.remove('exibir-modal')
        BotaoFecharModal.addEventListener('click', FecharModal)
    }
}

// Função para calculr o IMC
function IMC(peso,altura){
    let resultado = (peso/(altura*altura))
    return resultado.toFixed(2)
}


// Função para fechar o Modal
function FecharModal(){
    let modal = document.querySelector('dialog')
    modal.classList.add('exibir-modal')
}