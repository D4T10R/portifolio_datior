const opcoes = document.querySelector('#opcoes').style
const corpo = document.querySelector('#corpo')
const rodape = document.querySelector('#rodape')

console.log(corpo)
        
mostrarOpcoes()
function mostrarOpcoes() {
    document.querySelector("#icone-menu").addEventListener('click', () => {
        if (opcoes.display === "") {
            opcoes.display="block"
        }
    })

    // Se clicar no corpo: 
    corpo.addEventListener('click', ()=> {
        if (opcoes.display === "block") {
            opcoes.display = ""
        }
        
    })

    // Se clicar no  rodape:
    rodape.addEventListener('click', () => {
        if (opcoes.display === "block") {
            opcoes.display = ""
        }
    })
}

/* ENVIAR FORMULARIO */
const formulario = document.getElementById("form")

formulario.addEventListener('submit', () => {
    alert("ESTOU COMPLETANDO MEU PORTIFÓLIO! ENTRE EM CONTATO PELO MEU EMAIL ENQUANTO EU FAÇO A MANUTENÇÃO DO FORMULÁRIO")
})