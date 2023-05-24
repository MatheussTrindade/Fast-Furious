var sec = 0;
var min = 0;
var hr = 0;
var interval


function start() {
    watch()
    interval = setInterval(watch, 1000)
}

function stopTime() {
    
    clearInterval(interval)
    sec = 0
    min = 0
    window.alert("Seu tempo foi: " + document.getElementById('timer').innerText)
    // cadastrarTimer()
    var finaltime =  document.getElementById('timer').innerText;

    // Enviando o valor da nova input
    fetch("/raceTime/stopTime", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js

            timerServer: finaltime

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML = "Corrida Comcluida, Indo para ranking";

            setTimeout(() => {
                window.location = "../public/login.html";
            }, "2000")

            // limparFormulario();
            // finalizarAguardar();
        } else {
            throw ("Ouve um erro no registro da sua corrida !");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}


document.getElementById('timer').innerText = '00:00:00'


function bettervision(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function watch() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hr++
        }
    }
    document.getElementById('timer').innerText = bettervision(hr) + ':' + bettervision(min) + ':' + bettervision(sec)
}

// function cadastrarTimer() {
        
    // var finaltime =  document.getElementById('timer').innerText;

    //     // Enviando o valor da nova input
    //     fetch("/corridaTimer/cadastrarTimer", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             // crie um atributo que recebe o valor recuperado aqui
    //             // Agora vá para o arquivo routes/usuario.js

    //             timeServer: finaltime

    //         })
    //     }).then(function (resposta) {

    //         console.log("resposta: ", resposta);

    //         if (resposta.ok) {
    //             cardErro.style.display = "block";

    //             mensagem_erro.innerHTML = "Corrida Comcluida, Indo para ranking";

    //             setTimeout(() => {
    //                 window.location = "../public/login.html";
    //             }, "2000")

    //             limparFormulario();
    //             finalizarAguardar();
    //         } else {
    //             throw ("Ouve um erro no registro da sua corrida !");
    //         }
    //     }).catch(function (resposta) {
    //         console.log(`#ERRO: ${resposta}`);
    //         // finalizarAguardar();
    //     });

    //     return false;
    // }

    // function sumirMensagem() {
    //     cardErro.style.display = "none"
    // }
