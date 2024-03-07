const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".abas-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
    console.log
}

const contadores = document.querySelectorAll(".contador");
const tempoObj1 = new Date("2024-11-30T00:00:00");
const tempoObj2 = new Date("2025-02-01T00:00:00");
const tempoObj3 = new Date("2034-01-01T00:00:00");
const tempoObj4 = new Date("2050-02-01T00:00:00");

const tempos = [tempoObj1, tempoObj2, tempoObj3, tempoObj4]





function calculaTempo(tempoObj){
    let tempoAtual = new Date();
    let tempoFinal = tempoObj - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60)
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24)
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0){
        return [dias, horas, minutos, segundos];
    } else {
        return [0,0,0,0];
    }
    
    
}

function atualizarCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizarCronometro();
    setInterval(atualizarCronometro,1000);
}

comecaCronometro();