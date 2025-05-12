function clicar() {
    let start = document.getElementById('istart')
    let end = document.getElementById('iend')
    let pass = document.getElementById('ipass')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {

        res.innerHTML = 'Impossível contar... '
        // alert(`Digite os campos faltantes`)
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let valorInicio = Number(start.value)
        let valorFinal = Number(end.value)
        let incremento = Number(pass.value)
        if (incremento <= 0 ) {
            alert('Passo inválido! Considerando PASSO 1')
            incremento = 1
        }
        if (valorInicio < valorFinal) {

            // Contagem Crescente
            for (let c = valorInicio; c <= valorFinal; c += incremento){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem Regressiva
            for (let c = valorInicio; c >= valorFinal; c -= incremento) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
    
}