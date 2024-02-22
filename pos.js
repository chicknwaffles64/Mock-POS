const numpad = document.getElementById("numpad")
const enter = document.getElementById("enter")
const textbox = document.getElementById('textbox')
const orderlist = document.getElementById('orderlist')

function newOrder() {
    index = Math.floor(Math.random() * products.length)
    console.log(`incoming order: ${products[index]}`)
    const letter = document.createElement("order")
    orderlist.appendChild(letter)
    letter.textContent = products[index][0]
}

const products = [
    ["Chocolate Cov.- Almonds", 610],
    ["Chocolate Cov.- Almonds 73% (Dark)", 647],
    ["Chocolate Cov.- Almonds Cafe Latte",3162],
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

    //CHOCOLATE
    ["Aero Minis",3310],
    ["Bark - Almond Dark Choc",612],
    ["Bark - Almond White",613],
    ["Big Turk Bites",596],
    ["Chocolate - Butterfinger Mini",3568],
    ["Caramel Nut Cluster",624],
    ["Chocolate Peebles",538],
    ["Coffee Crisp Thins", 3416],
    ["Crunchetti Almond Clstr - Dark",3570],
    ["Crunchetti Almond Clstr - Milk",3569],
    ["Chocolate Drops - Cookies 'N Creme",767],
    ["Kit Kat Minis",3311],
    ["M&M's - Caramel",3103],
    ["M&M's - Fudge Brownie",3482],
    ["M&M's - Peanuts",590],
    ["M&M's - Peanuts Butter",682],
    ["Chocolate - Macaroons",543],
    ["Oh Henry Nut Roll",527],
    ["Henry Nut Reese Bites",3459],
    ["OMG's - Dark Chocolate",2591],
    ["OMG's - Milk Chocolate",2492],
    ["OMG's - Peanut",2592],
    ["OMG's - Peanut Butter Pretzel",3053],
    ["OMG's - Vanilla Almond",2813],
    ["OMG's - Vanilla Pretzel",3436],
    ["Reese's PB Cups Mini",3102],
    ["Rolo Mini", 2721],
    ["Rosebuds", 544],
    ["Rosebuds Dark", 516],
    ["Sea Salt Bites", 2722],
    ["Sea Salt Caramels", 2539],
    ["Skor Bar", 636],
    ["Smarties", 628],
    ["Yummies", 575],

    //GUM
    ["Gum Chews", 791],
    ["Dubble Bubble", 649],
    ["Dubble Bubble Twist", 2781],
    ["Gumballs Colossal assort.", 643],
    ["Gum Balls Reg. assort.", 589],
    ["Pearlized Gumballs (All)", 3019],

    //SOUR COATED
    ["Jolly Rancher - fruity sours", 3294],
    ["Jolly Rancher Misfits", 3313],
    ["Jolly Rancher sour misfits", 3438],
    ["Juicy Sour - Apple Rings", 780],
    ["Juicy Sour - Cola Bottle Gummies", 797],
    ["Juicy Sour - Neon Worms", 691],
    ["Juicy Sour - Peach Hearts",513],
    ["Juicy Sour - Peach Rings mini", 779],
    ["Sour Slices - Blue Raspberries", 653],
    ["Sour Slices - Cherry", 599],
    ["Sour Slices - Grapes", 704],
    ["Sour Slices - Peaches", 642],
    ["Sour Slices - Watermelon", 707],
    ["Sour Slices - Wild Strawberries", 799],
    ["Sour - Belts", 669],
    ["Sour - Cherry Sours", 640],
    ["Sour - Cola Belts", 3234],
    ["Sour - Dino", 788],
    ["Sour - Fruit Juice Berries", 506],
    ["Sour - Keys", 633],
    ["Sour - Patch kids", 507],
    ["Tangy Carribean Fish", 3263],

    //MISC
    ["Baby Pacificers", 573],
    ["Big Foot", 677],
    ["Big Foot Sour Blue", 532],
    ["Candy Blox", 684],
    ["Finnish Berries", 524],
    ["Fruit Blast (colourful fruit shaped candies)", 659],
    ["Fruit Juice Berries", 505],
    ["Gum Drops - Jumbo", 508],
    ["Hot Lips", 678],
    ["Jelly Babies", 3546],
    ["Jelly Beans - Assort.", 618],
    ["Jelly beans jelly belly",3107],
    ["Jelly Dots Tropical",699],
    ["Ju Jubes Sour (Allan)",560],
    ["Ju Jubes Super Soft (Dare)",546],
    ["Licorice - Allsorts",629],
    ["Reese's Pieces",626],
    ["Reese's Pieces - Peanut",3301],
    ["Skittles",534],
    ["Spearmint Leaves",584],
    ["Turkish Delight Asst Flavs",574],
    
    //FLOUR
    ["1-1 All Purpose Flour MWWI (Made Without Wheat Ingredients)",2875],
    ["All Purpose Flour",310],
    ["All Purpose Flour MWWI (Made Without Wheat Ingredients)",209],
    ["Arrowroot Flour MWWI (Made Without Wheat Ingredients)",200],
    ["Buckwheat flour - Light", 316],
    ["Buckwheat flour- Dark",321],
    ["Bread Mix - Sourdough", 240],
    ["Bread Mix - White", 346],
    ["Bread Mix - Whole Wheat", 347],
    ["Cake & Pastry Mix", 311],
    ["Corn Flour", 278],
    ["Durum Semolina",335],
    ["Quinoa Flour. organic", 221],
    ["Rice Flour - White", 267],
    ["Rice Flour - Brown",288],
    ["Tapioca Flour (Starch)",339],
    
    //SUGAR
    ["Coarse White Sugar",929],
    ["Demerara Style Sugar", 300],
    ["Instant Dissolving (fruit) Sugar", 301],
    ["Dark Brown Sugar", 302],
    ["Icing Sugar", 304],
    ["White Fine Sugar",305],
    ["Cane Sugar organic",308],
    
    //MISC BAKING
    ["Baking Gums",258],
    ["Baking Soda",259],
    ["Corn Starch",260],
    ["Baking Powder",261],
    ["Chocolate Cookie Crumbs",329],
    ["Dried Soap Berries",3104],
    ["Gelatine", 270],
    ["Graham Cracker Crumbs", 328],
    ["Lecithin Granules", 943],
    ["Potato Starch", 279],
    ["Psyllium Husk (flakes)", 283],

    //SNACKS
    ["Fortune Cookies",55],
    ["Popping Corn - White",11],
    ["Popping Corn - Jumbo", 60],
    ["Wasabi Green Peas", 89],
    
    //NUTS
    ["Almonds - Dry R & Unsalted",120],
    ["Almonds - Hickory Smoked R & S",133],
    ["Almonds - Marcona (spanish)",158],
    ["Sunflower nuts - hulled raw",139],
    ["Sunflower nuts - inshell R&S",136],
    ["Mixed Nuts - Deluxe NS",119],
    
    //BEANS
    ["kidney beans", 407],
    
    //TOTES/BAKING (1700s)
    ["Butterscotch chips", 1762],
    ["Chocolate chips - white",1811],
    ["Chocolate Squares - Semi Sweet", 1770],
    ["Chocolate Squares - White", 1795],
        //WAFERS (1800s)
    ["Melting Wafers - Dark Brown",1809],
    ["Merkens Wafers - White",1803],

    ["Glazed Cherries - Red", 1751],
    ["Glazed Cherries - Green", 1752],
    
    //PASTA/RICE
    ["All Dressed Popcorn Seasoning", 2982],
    ["Butter Salt", 988],
    ["White Cheddar Popcorn Seasoning",984],

    //SPICES
    ["Orange Peel (grated)", 993],
    ["Yeast Brewers (Brewer's yeast, brown)", 941],
    ["Yeast Flaked (yellow)", 939],
    ["Active dry yeast", 940],
    ["Onion - Flakes", 915],
    ["Onion - Minced", 883],
    
    //NON FOODS
    [`Piping Bags 12"`,10818],
    [`Piping Bags 18"`,16716],
    ["Stainless Steel Straws", 17593],

    //PET FOOD (1100s)
    ["Beef Jerky Strips",1151],
    ["Marrow Bone Dog Treats",1160],

    //COOKIES
    ["Macaroon Ruffles (look like chocolate fingers)", 1305],
    ["Graham Wafers", 1325],

    //COFFEE/TEA/MILK (1200s)
    ["Earl Grey Tea Bag", 1257],
    ["Green Tea Bag", 1218],
    ["Earl Grey Tea Leaves", 1216],
    ["Green Tea Leaves", 1217],
    ["Whole Milk Powder", 1224],
    ["Coffee Whitener", 1226],
    ["Buttermilk Non Instant Powder", 1228],
]

//start of program
var index = 0
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
        break
    }
})
