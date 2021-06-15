const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//setting up a loop that will generate numbers randomly
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener('click', function() {
let hexColor = '#';
for (var i=0; i < 6; i++) {
    hexColor += hex[getRanNum()];

}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRanNum() {
return Math.floor(Math.random() * hex.length);
}
