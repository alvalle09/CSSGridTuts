
const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');

const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

// dynamically create html elements, pass in random class names 
function generateHTML([h, v]) {
    return `
        <div class="item h${h} v${v}">
            <img src="images/${randomNumber(12)}.jpg">
            <div class="item__overlay">
                <button>View →</button>
            </div>
        </div>
    `;
}

const digits = Array.from({ length: 50}, () => 
    [randomNumber(4), randomNumber(4)]).concat([ [1,1], [1,1], [1,1],
    [1,1], [1,1], [1,1], [1,1], [1,1]]);

console.log(digits);                    

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1
}

//
function handleClick(e) {
    console.log(e.currentTarget);
}

const html = digits.map(generateHTML).join('');
//console.log(html);

gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));



