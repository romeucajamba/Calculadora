const calcular = document.getElementById('calcular');


//Eventos
calcular.addEventListener('click', imc);

//Funçoes
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if(nome !== "" && altura !== "" && peso !== ""){
        const valorImc = (peso / (altura * altura)).toFixed(1)//arrendodar;
        resultado.textContent = valorImc;

        let classificacao = "";
        if(valorImc < 18.5){
            classificacao = " você está a.baixo do peso!";
        } 
         else if(valorImc < 25){
            classificacao = "Teu peso é idela, parabéns!";
        }
      else if(valorImc < 30){
        classificacao = " estás levemente acima do peso!";
        }
        else if(valorImc < 35){
            classificacao = "Estás obeso ou a se tornar, cuidado!!"
        }
        resultado.textContent = `${nome} seu IMC é ${valorImc} e ${classificacao}`;
    } 
    else{
        resultado.textContent = 'preencha todos os campos!!!';
    }
}