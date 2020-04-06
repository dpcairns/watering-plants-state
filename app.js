const button = document.getElementById('water-button');
const img = document.getElementById('plant');
const status = document.getElementById('status');
const ouncesSpan = document.getElementById('ounces');

let ounces = 0;

button.addEventListener('click', () => {
    ounces++;

    ouncesSpan.textContent = ounces;  
    
    if (ounces > 10) {
        status.textContent = 'oh no...its getting overwatered';
        img.src = 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-sad-plant-illustration-vector-on-white-background-png-image_5293316.jpg';
    }

    if (ounces > 20) {
        status.textContent = 'it is drowned';
        img.src = 'https://brokeassstuart.com/wp-content/pictsnShit/2017/03/sad-plant.jpg';
    }
});