var data = new Date()
var hora = data.getHours()

function clicar(){
    var assunto = prompt('Informe o assunto que deseja tratar abaixo: ')

    if( hora > 0 && hora < 12 ){
        var horario = "Bom dia! "
    } 
    else if( hora >= 12 && hora < 18 ){
        var horario = "Boa tarde! "
    }
    else{
        var horario = "Boa noite! "
    }

    if( assunto.length > 0 ){
        window.location.href = `https://wa.me/558492153515?text= ${horario} ${assunto}!`
    }
    else{
        alert("Digite o assunto por favor.")
    }
}
