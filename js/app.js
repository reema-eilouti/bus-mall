let imagesSection = document.getElementById('imagesSection');

let leftImageEl = document.getElementById('leftImage');
let middleImageEl = document.getElementById('middleImage');
let rightImageEl = document.getElementById('rightImage');

let remainingClicks = 25;

let titles = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dogduck',
    'dragon',
    'pen',
    'petsweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'watercan',
    'wineglass'
];


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickHandler(event) {
    remainingClicks--;
    if (remainingClicks === 0) {
        imagesSection.removeEventListener('click', clickHandler);
        createChart();
    } else {
        if (event.target.id !== 'imagesSection') {
            for (let i = 0; i < Product.all.length; i++) {
                if (Product.all[i].title === event.target.alt) {
                    Product.all[i].clicks++;
                }
            }
            render();
        }
    }
}

function createChart() {
    let ctx = document.getElementById('myChart').getContext('2d');

    let productTitles = [];
    let productClicks = [];

    for (let i = 0; i < Product.all.length; i++) {
        productTitles.push(Product.all[i].title);
        productClicks.push(Product.all[i].clicks);
    }
    new Chart(ctx, {
        type: 'bar',

        data: {
            labels: productTitles,
            datasets: [{
                barPercentage: 0.5,
                barThickness: 6,
                borderWidth: 5,
                label: '# of clicks:',
                backgroundColor: 'rgb(100, 125, 50)',
                borderColor: 'rgb(0, 0, 0)',
                data: productClicks,
            }, ],
        },
        options: {},
    });
}

function Product(title) {
    this.title = title;
    this.image = `img/${title}.jpg`;
    this.timesViewed = 0;
    this.clicks = 0;
    Product.all.push(this);
}

function render() {

    let leftIndex = randomNumber(0, Product.all.length - 1);
    let middleIndex = randomNumber(0, Product.all.length - 1);
    let rightIndex = randomNumber(0, Product.all.length - 1);

    Product.all[leftIndex].timesViewed++;
    Product.all[middleIndex].timesViewed++;
    Product.all[rightIndex].timesViewed++;

    leftImageEl.src = Product.all[leftIndex].image;
    leftImageEl.alt = Product.all[leftIndex].title;

    middleImageEl.src = Product.all[middleIndex].image;
    middleImageEl.alt = Product.all[middleIndex].title;

    rightImageEl.src = Product.all[rightIndex].image;
    rightImageEl.alt = Product.all[rightIndex].title;
}

Product.all = [];

for (let i = 0; i < titles.length; i++) {
    new Product(titles[i]);
}

imagesSection.addEventListener('click', clickHandler);