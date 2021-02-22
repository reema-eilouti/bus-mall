let imagesSection = document.getElementById('imagesSection');
let leftImageEl = document.getElementById('leftImage');
let middleImageEl = document.getElementById('middleImage');
let rightImageEl = document.getElementById('rightImage');


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickHandler(event) {
    remainingVotes--;
    if (remainingVotes === 0) {
        imagesSection.removeEventListener('click', clickHandler);
        createChart();
    } else {
        if (event.target.id !== 'imagesSection') {
            for (let i = 0; i < Goat.all.length; i++) {
                if (Goat.all[i].name === event.target.title) {
                    Goat.all[i].votes++;
                }
            }
        }
    }
}


function createChart() {}

let titles = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass']

function Product(title) {
    this.title = title;
    this.image = `img/${title}.jpg`;
    this.timesViewed = 0;
    this.clicks = 0;
}

Product.prototype.render = function(column) {
    switch (column) {
        case 1:
            leftImageEl.src = this.image;
            leftImageEl.alt = this.title;
            this.timesViewed += 1;
            break;
        case 2:
            middleImageEl.src = this.image;
            middleImageEl.alt = this.title;
            this.timesViewed += 1;
            break;
        case 3:
            rightImageEl.src = this.image;
            rightImageEl.alt = this.title;
            this.timesViewed += 1;
            break;
    }
}

imagesSection.addEventListener('click', clickHandler);


for (let column = 1; column < 4; column++) {
    randomIndex = randomNumber(0, titles.length - 1)

    randomTitle = titles[randomIndex];

    item = new Product(randomTitle);

    item.render(column);

    titles.splice(randomIndex, 1)
}