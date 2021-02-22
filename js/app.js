let leftImageEl = document.getElementById('leftImage');
let middleImageEl = document.getElementById('middleImage');
let rightImageEl = document.getElementById('rightImage');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createChart() {}

let titles = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass]

function Product(title) {
    this.title = title;
    this.image = `img/${title}.jpg`;
    this.timesViewed = 0;
}

Product.prototype.render = function() {

}

for (let i = 0; i < 3; i++) {
    randomIndex = randomNumber(0, titles.length - 1)

    randomTitle = titles[randomIndex];

    item = new Product(randomTitle);

    item.render();
}