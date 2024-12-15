const form = document.getElementById('form');
const color = document.getElementById('color');
const scheme = document.getElementById('scheme');

color.value = "#F55A5A"

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    const data = {hex: formData.get('color'), scheme:formData.get('scheme') }
});

fetch("https://www.thecolorapi.com/scheme?hex=0047AB&count=5&mode=analogic")
    .then(res=>res.json())
    .then(data=>console.log(data.colors))