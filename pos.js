const numpad = document.getElementById("numpad")
const enter = document.getElementById("enter")
const textbox = document.getElementById('textbox')
const orderlist = document.getElementById('orderlist')
const products = [
    ["Chocolate Cov.- Almonds", 610],
    ["Chocolate Cov.- Almonds 73% (Dark)", 647],
    ["Chocolate Cov.- Almonds Cafe Latte",674],
    ["Chocolate Cov.- Bridge Mix",621],
    ["Chocolate Cov.- Cashews",681],
    ["Chocolate Cov.- Caramel Balls",509],
    ["Chocolate Cov.- Cherries",675],
    ["Chocolate Cov.- Coffee Beans",563],
    ["Chocolate Cov.- Cranberries",696],
    ["Chocolate Cov.- Ju Jubes",510],
    ["Chocolate Cov.- Malt Balls",601],
    ["Chocolate Cov.- Peanuts",611],
    ["Chocolate Cov.- Raisins",663],
    ["Chocolate Cov.- Raisins 43% Dark",634],
    ["Chocolate Cov.- Rasp.Creams (Milk & Dark)",572],
    ["Yogurt Cov.- Cranberries",528],
    ["Yogurt Cov.- Peanuts",605],
    ["Yogurt Cov.- Raisins",533],
]
function newOrder() {
    index = Math.floor(Math.random() * products.length)
    console.log(`incoming order: ${products[index]}`)
    const letter = document.createElement("order")
    orderlist.appendChild(letter)
    letter.textContent = products[index][0]
}
//start of program
var index = 0
newOrder()

numpad.addEventListener('click', (e) => {
    if (e.target.id == "numpad") return
    textbox.value += e.target.textContent
})

enter.addEventListener('click', () => {
    const currentOrder = orderlist.lastChild
    if (textbox.value == products[index][1]) { 
        currentOrder.classList.add('correct') 
    }
    else {
        currentOrder.classList.add('wrong')
    }
    currentOrder.textContent = products[index][0] + ' - ' + products[index][1]
    newOrder()
    if (orderlist.children.length > 5) orderlist.removeChild(orderlist.children[0])
    textbox.value = ""
})