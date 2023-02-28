const opcoes = document.querySelector('#opcoes').style
const corpo = document.querySelector('#corpo')

console.log(corpo)
        
mostrarOpcoes()
function mostrarOpcoes() {
    document.querySelector("#icone-menu").addEventListener('click', () => {
        if (opcoes.display === "") {
            opcoes.display="block"
        }
    })
    corpo.addEventListener('click', ()=> {
        if (opcoes.display === "block") {
            opcoes.display = ""
        }
        
    })
}

