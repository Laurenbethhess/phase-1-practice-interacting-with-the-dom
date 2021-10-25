// setInterval( () => {
//     let increment = parseInt(counter.innerText)
//     counter.innerText = increment + 1
// }, 1000)

let counter = document.querySelector('#counter')
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let heart = document.getElementById("heart")
let pause = document.getElementById("pause")
const formElement = document.querySelector('form')


plus.addEventListener('click', () => {
    let increment = parseInt(counter.innerText)
    counter.innerText = increment + 1
})

minus.addEventListener('click', () => {
    let increment = parseInt(counter.innerText)
    counter.innerText = increment - 1
})

formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const userText = e.target.comment.value
    if (userText.length > 0) {
        const commentContainer = document.getElementById('list')
        const newElement = document.createElement('li')
        newElement.textContent = userText
        commentContainer.append(newElement)
    }
    e.target.comment.value = ''
})

heart.addEventListener('click', () => {
    const likeContainer = document.querySelector('.likes')
    const currentNumber = counter.textContent
    const existingElement = document.getElementById(`likes-${currentNumber}`)
    if (existingElement) {
        const fullText = existingElement.innerText
        const words = fullText.split(' ')
        const ourNewNumber = parseInt(words[4]) + 1
        words[4] = ourNewNumber
        existingElement.innerText = words.join(' ')
    } else {
        const newLi = document.createElement('li')
        newLi.id = `likes-${currentNumber}`
        newLi.textContent = `${currentNumber} has been liked 1 times`
        likeContainer.append(newLi)
    }
}) 

// As a user, I can pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.


pause.addEventListener('click', () => {
    if (pause.innerText = 'pause') {
        pause.innerText = 'resume'
    } 
})
