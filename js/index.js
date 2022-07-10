const button = document.querySelector('#btn')
const form = document.querySelector('form')
const list = document.querySelector('ul')
const input = document.querySelector('input[name="username"]')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(input.value.trim() === '') return

    let li = document.createElement('li')
    let span = document.createElement('span')
    let button = document.createElement('button')

    span.textContent = input.value
    button.textContent = 'X'

    li.append(span, button)
    list.append(li)
    console.log('hello');

    input.value = null

    button.addEventListener('click', () => {
        button.parentNode.remove()
    })
    
})