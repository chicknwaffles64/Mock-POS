const numpad = document.getElementById("numpad")
const enter = document.getElementById("enter")
const textbox = document.getElementById('textbox')
const orderlist = document.getElementById('orderlist')

function newOrder() {
    index = Math.floor(Math.random() * productNames.length)
    console.log(`incoming order: ${productNames[index]}`)
    const letter = document.createElement("order")
    orderlist.appendChild(letter)
    letter.textContent = productNames[index][1]
}


import { productNames } from './productNames.js'
//start of program
var index = 0
var total = 0.00
newOrder()

numpad.addEventListener('click', (e) => {
    if (!isNaN(e.target.id)) {
        textbox.value += e.target.textContent
        return
    }
    switch(e.target.id) {
        case 'clear':
            textbox.value = ""
            break
        
        case 'enter':
            const currentOrder = orderlist.lastChild
            if (textbox.value == productNames[index][0]) { 
                currentOrder.classList.add('correct') 
            }
            else {
                currentOrder.classList.add('wrong')
            }
            currentOrder.textContent = productNames[index][1] + ' - ' + productNames[index][0]
            newOrder()
            if (orderlist.children.length > 5) orderlist.removeChild(orderlist.children[0])
            textbox.value = ""
            
            total += Math.floor((Math.random() * 400)) + 100
            let totaldisplay = total.toString().slice(0,-2)+ '.' + total.toString().slice(-2)
            document.getElementById('totaldisplay1').textContent = totaldisplay
            document.getElementById('totaldisplay2').textContent = totaldisplay
        break
    }
})

