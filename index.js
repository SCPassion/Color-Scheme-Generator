const form = document.getElementById('form')
const color = document.getElementById('color')
const scheme = document.getElementById('scheme')
const colorHex = [...document.getElementsByClassName('color-hex')]

const baseURL = "https://www.thecolorapi.com"
const endpoint = "/scheme"

color.value = "#F55A5A"

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    const url = `${baseURL}${endpoint}?hex=${formData.get('color').slice(1)}&count=5&mode=${formData.get('scheme')}`
    fetch(url)
        .then(res=>res.json())
        .then(data=> {
            data.colors.forEach((color, index)=> {
                colorHex[index].textContent = color.hex.value
                document.getElementById(colorHex[index].dataset.id).style.backgroundColor = color.hex.value
            })
        })
});