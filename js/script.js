// const linksInternos = document.querySelectorAll('a[href^="#"]')

// function handleLink(event) {
//     event.preventDefault()
//     linksInternos.forEach((link) => {
//         link.classList.remove('ativo')
//     });
//     event.currentTarget.classList.add('ativo');

// }

// linksInternos.forEach((link) => {
//     link.addEventListener('click', handleLink);
// })

// function handleElemento(event) {
//     (event.currentTarget.remove())
// }


// const todosElementos = document.querySelectorAll('body *')

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento)
// })

// console.log(todosElementos)


function handleClickT(event) {
    console.log(event.key)
    if (event.key === 't') {
        console.log('clicou no T')
    }
}

window.addEventListener('keydown', handleClickT)