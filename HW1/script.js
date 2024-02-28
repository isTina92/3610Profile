const canv = document.getElementById("JsonCanva");
const context = canv.getContext("2d");
// canv.style.backgroundColor = "pink";

// create the fruit Json array
var fruitData = [
    { name: "Apple", quantity: 20, color: "#dd1533" },
    { name: "Orange", quantity: 10, color: "#ff8c00" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 5, color: "#a0e040" },
    { name: "Blueberry", quantity: 5, color: "#3D91CC" },
    { name: "Grape", quantity: 10, color: "purple" }
];

var barHeight = 50; 
var startY = 50;  // bar initial starting point

// adjust canva heigh to ensure all bar can show up
canv.height = (barHeight) * fruitData.length + 2 * startY;

// change text style
context.font = "bold 16px Arial";

fruitData.forEach((fruit, index) => {
    // define the color by refering fruit color
    context.fillStyle = fruit.color;
    // make bar width
    context.fillRect(0, startY + (barHeight) * index, fruit.quantity * 25, barHeight);

    context.fillStyle = "black";
    // write fruit name
    context.fillText(fruit.name + " - " + fruit.quantity, 5, startY + (barHeight) * index + barHeight / 2 + 6);
});
